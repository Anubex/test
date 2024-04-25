/* eslint-disable @typescript-eslint/no-explicit-any */
import { useResponsive } from '@/hooks/use-responsive'
import activateService, { ICheckSim } from '@/services/activate-service'
import { parseDataUrl } from '@/utils/base64'
import { fPhone } from '@/utils/format-phone'
import { ErrorResponseProps } from '@/utils/global-interface'
import LoadingButton from '@mui/lab/LoadingButton'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Tab, styled } from '@mui/material'
import { AxiosError } from 'axios'
import dayjs from 'dayjs'
import { Form, Formik, useFormikContext } from 'formik'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ImSpinner } from 'react-icons/im'
import { MdOutlineChevronRight } from 'react-icons/md'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { PageT } from './activate-sim-view'
import CameraInput from './components/camera-input'
import FileInput from './components/file-input'
import TextInput from './components/text-input'

type TabT = 'camera' | 'file' | 'input'

interface Step1T extends PageT {
  setPhoneNumber: Dispatch<SetStateAction<string>>
  setSerialNo: Dispatch<SetStateAction<string>>
  imageBuffer: any
  setImageBuffer: Dispatch<SetStateAction<any>>
}

const CustomTab = styled(Tab)(() => ({
  '&.Mui-selected': {
    color: '#28A745',
    borderColor: '#28A745',
  },
}))

interface initialValuesType {
  phoneNumber: string
  iccid: string
}

const initialValues: initialValuesType = {
  phoneNumber: '',
  iccid: '',
}

export default function Step1({
  onNext,
  setPhoneNumber,
  setSerialNo,
  imageBuffer,
  setImageBuffer,
}: Step1T) {
  const { t } = useTranslation()
  const lgUp = useResponsive('up', 'lg')
  const [currentTab, setCurrentTab] = useState<TabT>(!lgUp ? 'camera' : 'file')

  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  const simSchema = Yup.object().shape({
    phoneNumber:
      currentTab !== 'input'
        ? Yup.string()
        : Yup.string()
            .required('กรุณากรอกหมายเลขโทรศัพท์ของคุณ')
            .test(
              'is-phone-number',
              'กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง',
              (value) => {
                if (value == null) return false
                const lengthValid = value.length === 10
                if (!lengthValid) return false
                if (value.charAt(0) !== '0') return false
                return true
              },
            ),
    iccid:
      currentTab !== 'input'
        ? Yup.string()
        : Yup.string()
            .required('กรุณากรอก Serial No.')
            .test('is-iccid', 'กรุณากรอก Serial No. ให้ถูกต้อง', (value) => {
              if (value == null) return false
              const lengthValid = value.length === 19
              if (!lengthValid) return false
              return true
            }),
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    fn_checkValueNEmpty()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageBuffer])

  const fn_checkValueNEmpty = () => {
    if (imageBuffer !== undefined && imageBuffer !== '') {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const HandleFormik: React.FC = () => {
    const { setFieldValue, setFieldTouched, values } =
      useFormikContext<initialValuesType>()

    useEffect(() => {
      if (currentTab !== 'input') {
        setFieldValue('phoneNumber', initialValues.phoneNumber)
        setFieldValue('iccid', initialValues.iccid)
        setFieldTouched('phoneNumber', false)
        setFieldTouched('iccid', false)
      } else {
        const isPhoneNumberValid =
          values.phoneNumber.length === 10 &&
          values.phoneNumber.charAt(0) === '0'
        const isIccidValid = values.iccid.length === 19
        setDisabled(!(isPhoneNumberValid && isIccidValid))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTab, values])
    return null
  }

  const handleChange = (_event: React.SyntheticEvent, tab: TabT) => {
    setImageBuffer(undefined)
    setPhoneNumber('')
    setSerialNo('')
    setCurrentTab(tab)
  }

  const btnNext = async (values: initialValuesType) => {
    if (onNext) {
      setLoading(true)
      let payload: ICheckSim

      const updateStateAndPreparePayload = async () => {
        if (currentTab !== 'input') {
          let imageFile: Blob
          let contentType
          if (typeof imageBuffer === 'string') {
            const base64Data = parseDataUrl(imageBuffer)
            contentType = base64Data.contentType
            const binaryString = window.atob(base64Data.base64Data)
            const binaryLen = binaryString.length
            const bytes = new Uint8Array(binaryLen)
            for (let i = 0; i < binaryLen; i++) {
              const ascii = binaryString.charCodeAt(i)
              bytes[i] = ascii
            }
            imageFile = new Blob([bytes], { type: contentType })
          } else {
            imageFile = imageBuffer
            contentType = imageBuffer.type
          }
          const formData = new FormData()
          formData.append(
            'image',
            imageFile,
            `${dayjs().format('YYYYMMDDHHmmss')}.${contentType.replace(
              'image/',
              '',
            )}`,
          )
          try {
            const result = await activateService.ocrSim(formData)
            setPhoneNumber(result.phoneNumber)
            setSerialNo(result.iccid)
            return {
              phoneNumber: fPhone(result.phoneNumber, '66'),
              iccid: result.iccid,
            }
          } catch (error) {
            console.log(error)
            toast.error('ไม่สามารถดึงข้อมูลจากรูปภาพได้', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            throw error
          }
        } else {
          setPhoneNumber(values.phoneNumber)
          setSerialNo(values.iccid)
          return {
            phoneNumber: fPhone(values.phoneNumber, '66'),
            iccid: values.iccid,
          }
        }
      }

      try {
        payload = await updateStateAndPreparePayload()
      } catch (error) {
        console.log(error)
        setLoading(false)
        return
      }
      setLoading(true)
      setTimeout(async () => {
        if (payload.iccid === '') {
          setLoading(false)
          toast.error('รูปภาพไม่ชัดเจนให้ดึงข้อมูล กรุณาลองใหม่อีกครั้ง', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          return
        }
        await activateService
          .checkSim(payload)
          .then(() => {
            setLoading(false)
            onNext('second')
          })
          .catch((error) => {
            setTimeout(() => setLoading(false), 1000)
            const response = (error as AxiosError).response
            console.log(response)
            let message: string = t('error.toast-internal-error')
            if (response?.status === 500) {
              const result: ErrorResponseProps =
                response?.data as ErrorResponseProps
              if (result?.code === '501') {
                message = 'ไม่สามารถค้นหา SIM ได้ กรุณาลองใหม่อีกครั้ง'
              } else if (result?.code === '502') {
                message = 'ไม่พบ SIM ที่ต้องการลงทะเบียน'
              } else if (result?.code === '503') {
                message = 'ไม่สามารถตรวจสอบสถานะ SIM ได้ กรุณาลองใหม่อีกครั้ง'
              } else if (result?.code === '504') {
                message = 'SIM อยู่ระหว่างรอเจ้าหน้าที่ตรวจสอบ'
              } else if (result?.code === '505') {
                message = 'SIM ถูกใช้งานแล้วไม่สามารถลงทะเบียนซ้ำได้'
              }
            }
            toast.error(message, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          })
      }, 1000)
    }
  }

  if (onNext) {
    return (
      <>
        <div className="mt-[66px] flex min-h-[80vh] items-center justify-center px-[25px] py-[100px] md:px-0">
          <div className="grid justify-items-center">
            <h1 className="text-center text-[36px] font-bold text-[#28A745]">
              ลงทะเบียนซิม
            </h1>
            <div className="my-[25px] flex flex-nowrap items-center justify-center gap-[15px] text-left">
              <p className="grid h-[55px] w-[55px] place-content-center place-items-center rounded-full bg-[#227041] text-[24px] font-bold text-white">
                1.
              </p>
              <p className="font-semibold">
                ถ่ายรูปบาร์โค้ดซิม เพื่อลงทะเบียนซิมในระบบ
              </p>
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => btnNext(values)}
              validationSchema={simSchema}
            >
              {({ values, submitForm }) => (
                <Form
                  className="grid w-full justify-items-center"
                  autoComplete="off"
                >
                  <HandleFormik />
                  <div className="mx-auto flex w-full min-w-[375px] max-w-[637px] items-start justify-center rounded-[10px] border-2 border-black/[0.1] pb-[15px] md:mx-0 md:w-[637px]">
                    <div className="relative w-full max-w-[90%]">
                      <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={currentTab}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                              onChange={handleChange}
                              className="!flex !justify-between"
                              centered={true}
                              TabIndicatorProps={{
                                style: {
                                  backgroundColor: '#28A745',
                                },
                              }}
                            >
                              {!lgUp && (
                                <CustomTab
                                  label="ถ่ายรูป"
                                  value="camera"
                                  disabled={loading}
                                />
                              )}
                              <CustomTab
                                label="อัปโหลด"
                                value="file"
                                disabled={loading}
                              />
                              <CustomTab
                                label="กรอกข้อมูล"
                                value="input"
                                disabled={loading}
                              />
                            </TabList>
                          </Box>
                          <TabPanel value="camera">
                            <CameraInput
                              image={imageBuffer}
                              handleImage={setImageBuffer}
                            />
                          </TabPanel>
                          <TabPanel value="file">
                            <FileInput
                              image={imageBuffer}
                              handleImage={setImageBuffer}
                            />
                          </TabPanel>
                          <TabPanel value="input">
                            <TextInput
                              phoneNumber={values.phoneNumber}
                              serialNo={values.iccid}
                            />
                          </TabPanel>
                        </TabContext>
                      </Box>
                    </div>
                  </div>

                  <LoadingButton
                    startIcon={<MdOutlineChevronRight />}
                    loading={loading}
                    disabled={disabled}
                    loadingPosition="start"
                    loadingIndicator={<ImSpinner className="loading-icon" />}
                    variant={disabled === false ? 'contained' : 'outlined'}
                    className={`my-[25px] !mt-[25px] !h-[52px] w-[233px] rounded-[10px] ${
                      disabled === false
                        ? '!text-white shadow-lg'
                        : 'flex items-center'
                    } !border-0 !text-[16px] font-bold`}
                    sx={
                      disabled === false
                        ? {
                            background:
                              'linear-gradient(180deg, #28A745 10%, #227041 90%)',
                          }
                        : {}
                    }
                    color={disabled === false ? 'inherit' : 'success'}
                    onClick={submitForm}
                  >
                    <span>ขั้นตอนถัดไป</span>
                  </LoadingButton>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </>
    )
  }
}
