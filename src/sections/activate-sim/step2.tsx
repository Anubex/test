/* eslint-disable @typescript-eslint/no-explicit-any */
import { useResponsive } from '@/hooks/use-responsive'
import activateService from '@/services/activate-service'
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
import html2canvas from 'html2canvas'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ImSpinner } from 'react-icons/im'
import { MdOutlineChevronRight } from 'react-icons/md'
import Barcode from 'react-jsbarcode'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { PageT, initialCustomerValuesType } from './activate-sim-view'
import CameraInput from './components/camera-input'
import CustomerForm from './components/customer-form'
import FileInput from './components/file-input'

type TabT = 'camera' | 'file'

const CustomTab = styled(Tab)(() => ({
  '&.Mui-selected': {
    color: '#28A745',
    borderColor: '#28A745',
  },
}))

interface Step2T extends PageT {
  phoneNumber: string
  serialNo: string
  information: initialCustomerValuesType
  simImageBuffer: any
  frontImageBuffer: any
  setFrontImageBuffer: Dispatch<SetStateAction<any>>
  personImageBuffer: any
  setPersonImageBuffer: Dispatch<SetStateAction<any>>
}

export default function Step2({
  onNext,
  phoneNumber,
  serialNo,
  information,
  simImageBuffer,
  frontImageBuffer,
  setFrontImageBuffer,
  personImageBuffer,
  setPersonImageBuffer,
}: Step2T) {
  const { t } = useTranslation()
  const lgUp = useResponsive('up', 'lg')
  const BarCodeRef = useRef<HTMLInputElement>(null)

  const [currentDocTab, setCurrentDocTab] = useState<TabT>(
    !lgUp ? 'camera' : 'file',
  )
  const [currentPersonalTab, setCurrentPersonalTab] = useState<TabT>(
    !lgUp ? 'camera' : 'file',
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  const customerSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    personalId: Yup.string(),
    birthYear: Yup.string(),
    birthMonth: Yup.string(),
    birthDay: Yup.string(),
    address: Yup.string(),
    contactNumber: Yup.string(),
  })

  const HandleFormik: React.FC = () => {
    const { values } = useFormikContext<initialCustomerValuesType>()

    const hasEmptyString = (values: initialCustomerValuesType): boolean => {
      for (const key in values) {
        if (Object.prototype.hasOwnProperty.call(values, key)) {
          if (key as keyof typeof values) {
            if (values[key as keyof initialCustomerValuesType] === '') {
              return true
            }
          }
        }
      }
      return false
    }

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
      const checkImageValue = fn_checkValueNEmpty()
      if (!hasEmptyString(values) && !checkImageValue) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, frontImageBuffer, personImageBuffer])
    return null
  }

  const fn_checkValueNEmpty = () => {
    if (
      frontImageBuffer !== undefined &&
      frontImageBuffer !== '' &&
      personImageBuffer !== undefined &&
      personImageBuffer !== ''
    ) {
      return false
    } else {
      return true
    }
  }

  const handleChangeDoc = (_event: React.SyntheticEvent, tab: TabT) => {
    setFrontImageBuffer(undefined)
    setCurrentDocTab(tab)
  }

  const handleChangePersonal = (_event: React.SyntheticEvent, tab: TabT) => {
    setPersonImageBuffer(undefined)
    setCurrentPersonalTab(tab)
  }

  const getBlobFromHtmlElement = async (
    elementRef: React.RefObject<HTMLDivElement>,
  ): Promise<Blob | null> => {
    if (elementRef.current) {
      const canvas = await html2canvas(elementRef.current, { useCORS: true })
      return new Promise((resolve) => {
        canvas.toBlob(resolve, 'image/png')
      })
    }
    return null
  }

  const btnNext = async (values: initialCustomerValuesType) => {
    if (onNext) {
      setLoading(true)
      // let payload: IActivateSim
      let simImageFile: Blob | null
      let simImageContentType
      let frontImageFile: Blob
      let frontImageContentType
      let personImageFile: Blob
      let personImageContentType
      if (typeof simImageBuffer === 'string') {
        const base64Data = parseDataUrl(simImageBuffer)
        simImageContentType = base64Data.contentType
        const binaryString = window.atob(base64Data.base64Data)
        const binaryLen = binaryString.length
        const bytes = new Uint8Array(binaryLen)
        for (let i = 0; i < binaryLen; i++) {
          const ascii = binaryString.charCodeAt(i)
          bytes[i] = ascii
        }
        simImageFile = new Blob([bytes], { type: simImageContentType })
      } else {
        simImageFile = await getBlobFromHtmlElement(BarCodeRef)
      }
      if (typeof frontImageBuffer === 'string') {
        const base64Data = parseDataUrl(frontImageBuffer)
        frontImageContentType = base64Data.contentType
        const binaryString = window.atob(base64Data.base64Data)
        const binaryLen = binaryString.length
        const bytes = new Uint8Array(binaryLen)
        for (let i = 0; i < binaryLen; i++) {
          const ascii = binaryString.charCodeAt(i)
          bytes[i] = ascii
        }
        frontImageFile = new Blob([bytes], { type: frontImageContentType })
      } else {
        frontImageFile = frontImageBuffer
        frontImageContentType = frontImageBuffer.type
      }
      if (typeof personImageBuffer === 'string') {
        const base64Data = parseDataUrl(personImageBuffer)
        personImageContentType = base64Data.contentType
        const binaryString = window.atob(base64Data.base64Data)
        const binaryLen = binaryString.length
        const bytes = new Uint8Array(binaryLen)
        for (let i = 0; i < binaryLen; i++) {
          const ascii = binaryString.charCodeAt(i)
          bytes[i] = ascii
        }
        personImageFile = new Blob([bytes], { type: personImageContentType })
      } else {
        personImageFile = personImageBuffer
        personImageContentType = personImageBuffer.type
      }
      const formData = new FormData()
      formData.append('personalType', 'F')
      formData.append('personalId', values.personalId)
      formData.append('firstName', values.firstName)
      formData.append('lastName', values.lastName)
      formData.append(
        'birthDate',
        `${values.birthYear}-${values.birthMonth}-${values.birthDay}`,
      )
      formData.append('address', values.address)
      if (simImageFile) {
        formData.append(
          'simImage',
          simImageFile,
          `sim-${dayjs().format(
            'YYYYMMDDHHmmss',
          )}.${frontImageContentType.replace('image/', '')}`,
        )
      }
      formData.append(
        'frontImage',
        frontImageFile,
        `front-${dayjs().format(
          'YYYYMMDDHHmmss',
        )}.${frontImageContentType.replace('image/', '')}`,
      )
      formData.append(
        'personalImage',
        personImageFile,
        `person-${dayjs().format(
          'YYYYMMDDHHmmss',
        )}.${frontImageContentType.replace('image/', '')}`,
      )
      formData.append('contactNumber', fPhone(values.contactNumber, '66'))
      formData.append('phoneNumber', fPhone(phoneNumber, '66'))
      activateService
        .activateSim(formData)
        .then((result) => {
          console.log(result)
          setLoading(false)
          onNext('result')
        })
        .catch((error) => {
          setLoading(false)
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
              message = 'ไม่สามารถลงทะเบียน SIM ได้ กรุณาลองใหม่อีกครั้ง'
            } else if (result?.code === '504') {
              message = 'ไม่สามารถอัพเดทสถานะ SIM ได้ กรุณาลองใหม่อีกครั้ง'
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
    }
  }

  if (onNext) {
    return (
      <>
        <div className="mt-[66px] flex items-center justify-center py-[100px]">
          <div className="grid justify-items-center">
            <h1 className="text-center text-[36px] font-bold text-[#28A745]">
              ลงทะเบียนซิม
            </h1>
            <div className="my-[25px] flex flex-nowrap items-center justify-center gap-[15px] text-left">
              <p className="grid h-[55px] w-[55px] place-content-center place-items-center rounded-full bg-[#227041] text-[24px] font-bold text-white">
                2.
              </p>
              <p className="font-semibold">
                กรอกข้อมูลส่วนตัวเพื่อใช้ในการลงทะเบียน
              </p>
            </div>
            <div className="flex min-h-[503px] w-full items-center justify-center py-[25px] md:py-[50px]">
              <Formik
                initialValues={information}
                onSubmit={(values) => btnNext(values)}
                validationSchema={customerSchema}
              >
                {({ values, setFieldValue, submitForm }) => (
                  <Form
                    autoComplete="off"
                    className="grid justify-items-center md:justify-items-start"
                  >
                    <HandleFormik />

                    <CustomerForm
                      information={values}
                      setInformation={setFieldValue}
                    />

                    <div className="mb-[15px] grid min-w-[425px] items-center justify-items-center gap-[15px] px-[25px]">
                      <label
                        htmlFor="id"
                        className="w-full text-center text-[16px] font-semibold"
                      >
                        ภาพถ่ายเอกสารยืนยันตัวตน
                      </label>

                      <div className="!w-375px mx-auto flex w-full max-w-[520px] items-start justify-center rounded-[10px] border-2 border-black/[0.1] pb-[15px] md:mx-0 md:w-[520px]">
                        <div className="relative w-full max-w-[90%]">
                          <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={currentDocTab}>
                              <Box
                                sx={{ borderBottom: 1, borderColor: 'divider' }}
                              >
                                <TabList
                                  onChange={handleChangeDoc}
                                  className="!flex !justify-between"
                                  centered={true}
                                  TabIndicatorProps={{
                                    style: {
                                      backgroundColor: '#28A745',
                                    },
                                  }}
                                >
                                  {!lgUp && (
                                    <CustomTab label="ถ่ายรูป" value="camera" />
                                  )}
                                  <CustomTab label="อัปโหลด" value="file" />
                                </TabList>
                              </Box>
                              <TabPanel value="camera">
                                <CameraInput
                                  image={frontImageBuffer}
                                  handleImage={setFrontImageBuffer}
                                />
                              </TabPanel>
                              <TabPanel value="file">
                                <FileInput
                                  image={frontImageBuffer}
                                  handleImage={setFrontImageBuffer}
                                />
                              </TabPanel>
                            </TabContext>
                          </Box>
                        </div>
                      </div>
                    </div>

                    <div className="mb-[15px] grid min-w-[425px] items-center justify-items-center gap-[15px] px-[25px]">
                      <label
                        htmlFor="id"
                        className="w-full text-center text-[16px] font-semibold"
                      >
                        ภาพถ่ายหน้าตรง
                      </label>

                      <div className="!w-375px mx-auto flex w-full max-w-[520px] items-start justify-center rounded-[10px] border-2 border-black/[0.1] pb-[15px] md:mx-0 md:w-[520px]">
                        <div className="relative w-full max-w-[90%]">
                          <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={currentPersonalTab}>
                              <Box
                                sx={{ borderBottom: 1, borderColor: 'divider' }}
                              >
                                <TabList
                                  onChange={handleChangePersonal}
                                  className="!flex !justify-between"
                                  centered={true}
                                  TabIndicatorProps={{
                                    style: {
                                      backgroundColor: '#28A745',
                                    },
                                  }}
                                >
                                  {!lgUp && (
                                    <CustomTab label="ถ่ายรูป" value="camera" />
                                  )}
                                  <CustomTab label="อัปโหลด" value="file" />
                                </TabList>
                              </Box>
                              <TabPanel value="camera">
                                <CameraInput
                                  image={personImageBuffer}
                                  handleImage={setPersonImageBuffer}
                                />
                              </TabPanel>
                              <TabPanel value="file">
                                <FileInput
                                  image={personImageBuffer}
                                  handleImage={setPersonImageBuffer}
                                />
                              </TabPanel>
                            </TabContext>
                          </Box>
                        </div>
                      </div>
                    </div>

                    <div className="grid w-full justify-items-center">
                      <LoadingButton
                        startIcon={<MdOutlineChevronRight />}
                        loading={loading}
                        disabled={true}
                        loadingPosition="start"
                        loadingIndicator={
                          <ImSpinner className="loading-icon" />
                        }
                        variant={'outlined'}
                        className={`my-[25px] !mt-[25px] !h-[52px] w-[233px] rounded-[10px] ${'flex items-center'} !border-0 !text-[16px] font-bold`}
                        sx={{}}
                        color={'inherit'}
                        onClick={submitForm}
                      >
                        ขั้นตอนถัดไป
                      </LoadingButton>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={BarCodeRef}
            className="absolute left-[-9999px] top-[-9999px] h-[112px] w-[320px] font-['Kanit'] text-[#5d5d5c]"
          >
            <div className="">
              <div className="absolute left-0 top-[-10px] w-full">
                <p className="text-center font-sans text-[32px] font-bold text-black">
                  {fPhone(phoneNumber, '0')}
                </p>
              </div>
              <div className="relative top-[40px] flex justify-center">
                <Barcode
                  value={fPhone(phoneNumber, '0')}
                  options={{ width: 2.5, height: 28, displayValue: false }}
                />
              </div>
              <div className="absolute left-0 top-[76px] w-full">
                <div className="text-md text-center font-sans text-black">
                  <span className="mr-2">Serial No.</span>
                  <span>{serialNo}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
