/* eslint-disable @typescript-eslint/no-explicit-any */
import numberService from '@/services/number-service'
import { fPhone } from '@/utils/format-phone'
import { ErrorResponseProps } from '@/utils/global-interface'
import LoadingButton from '@mui/lab/LoadingButton'
import { styled } from '@mui/material'
import { AxiosError } from 'axios'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-mui'
import { Dispatch, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { InitTopUpProfiles } from './config-topup'
import { PageT } from './topup-view'

interface initialValuesType {
  phoneNumber: string
}

const initialValues: initialValuesType = {
  phoneNumber: '',
}

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#28A745',
    },
  },
})

interface IntroT extends PageT {
  setPhoneNumber: Dispatch<SetStateAction<string>>
  setPrice: Dispatch<SetStateAction<number>>
  setVat: Dispatch<SetStateAction<number>>
}

export default function Intro({
  onNext,
  setPayload,
  setPhoneNumber,
  setPrice,
  setVat,
}: IntroT) {
  const { t } = useTranslation()
  const [topUpAmount, setTopUpAmount] = useState('')
  const [loading, setLoading] = useState(false)

  const topUpSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required(t('top-up-page.step1.phone-require-input'))
      .test('is-phone-number', t('top-up-page.step1.phone-format'), (value) => {
        if (value == null) return false
        const lengthValid = value.length === 10
        if (!lengthValid) return false
        if (value.charAt(0) !== '0') return false
        return true
      }),
  })

  const btnTopUp = (values: initialValuesType) => {
    if (onNext && setPayload) {
      if (!loading) {
        setLoading(true)
        if (topUpAmount === '') {
          toast.error(t('top-up-page.step1.top-up-amount-require'), {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          setTimeout(() => setLoading(false), 100)
          return
        }
        numberService
          .getNumberState(fPhone(values.phoneNumber, '66'))
          .then((result) => {
            if (
              !['valid', 'active', 'inactive1', 'inactive2'].includes(
                result.sim.simState,
              )
            ) {
              toast.error(t('top-up-page.step1.not-available-phone-number'), {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              setTimeout(() => setLoading(false), 100)
              return
            }
            setLoading(false)
            const selectedItem = InitTopUpProfiles.find(
              (item) => item.amount === +topUpAmount,
            )
            setPhoneNumber(values.phoneNumber)
            setPrice(selectedItem?.amount ?? 0)
            setVat(selectedItem?.vat ?? 0)
            setPayload({
              simId: result.sim.id,
              refCode: selectedItem?.refCode,
            })
            onNext('summary')
          })
          .catch((error) => {
            const response = (error as AxiosError).response
            let message: string = t('error.toast-internal-error')
            if (response?.status === 500) {
              const result: ErrorResponseProps =
                response?.data as ErrorResponseProps
              if (result?.code === '501') {
                message = t('top-up-page.step1.cannot-get-phone-number')
              } else if (result?.code === '502') {
                message = t('top-up-page.step1.not-found-phone-number')
              }
            }
            setTimeout(() => setLoading(false), 100)
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
  }

  if (onNext) {
    return (
      <div className="mt-[66px] flex items-center justify-center py-[100px]">
        <div className="grid w-full justify-items-center md:w-[700px]">
          <h1 className="text-center text-[36px] font-bold text-[#28A745]">
            {t('top-up-page.step1.title')}
          </h1>
          <p className="text-center text-[24px] font-bold">
            {t('top-up-page.step1.subtitle')}
          </p>
          <div className="my-[25px] flex h-[52px] w-full max-w-[224px] items-center justify-evenly rounded-[4px] bg-[#C4F4CF]">
            <img src="/assets/images/gg_qr.svg" alt="qr-code-icon" />
            <p className="text-sm font-semibold">
              {t('top-up-page.step1.payment-label')}
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => btnTopUp(values)}
            validationSchema={topUpSchema}
          >
            {({ values, submitForm, errors, touched }) => {
              console.log(errors)
              return (
                <Form
                  className="grid w-full justify-items-center"
                  autoComplete="off"
                >
                  <p className="text-center text-[14px] font-semibold">
                    {t('top-up-page.step1.phone-label')}
                  </p>
                  <Field
                    component={CustomTextField}
                    name="phoneNumber"
                    inputMode="tel"
                    fullWidth
                    variant="outlined"
                    placeholder={t('top-up-page.step1.phone-placeholder')}
                    inputProps={{ maxLength: 10 }}
                    disabled={false}
                    onKeyPress={(event: any) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault()
                      } else {
                        if (
                          values.phoneNumber.length >= 10 &&
                          event.target.selectionStart ===
                            event.target.selectionEnd
                        ) {
                          event.preventDefault()
                        }
                      }
                    }}
                    className="!my-[25px] !w-full !max-w-[452px] !px-[25px] md:!w-[452px] md:!px-0"
                  />
                  <p className="text-center text-[16px] font-semibold">
                    {t('top-up-page.step1.top-up-amount-label')}
                  </p>
                  <ul className="my-[50px] grid w-full grid-cols-2 justify-items-center gap-6 px-[25px] md:grid-cols-4 md:px-0">
                    {InitTopUpProfiles.map((profile, index) => (
                      <li
                        key={index}
                        className="w-full rounded-[8px] shadow-lg"
                      >
                        <input
                          type="radio"
                          id={`top-up-${profile.amount}`}
                          name="top-up-amount"
                          value={profile.amount}
                          onChange={(event) =>
                            setTopUpAmount(event.target.value)
                          }
                          className="peer hidden"
                        />
                        <label
                          htmlFor={`top-up-${profile.amount}`}
                          className="md:min-w-xl inline-flex w-full min-w-[100%] cursor-pointer items-center justify-center rounded-[8px] border border-gray-200 bg-white p-5 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-[#57D173]"
                        >
                          <div className="text-center">
                            <div className="text-[20px] font-bold">
                              ฿{profile.amount}
                            </div>
                            <div className="text-[14px] text-[#227041]">
                              {t('top-up-page.step1.top-up-duration', {
                                duration: profile.duration,
                              })}
                            </div>
                          </div>
                        </label>
                      </li>
                    ))}
                  </ul>
                  <p className="text-center text-[12px] text-[#626262]">
                    {t('top-up-page.step1.remark-1')}
                  </p>
                  <p className="text-center text-[12px] text-red-600">
                    **{t('top-up-page.step1.remark-2')}
                  </p>
                  <LoadingButton
                    type="submit"
                    variant={
                      errors.phoneNumber ===
                        t('top-up-page.step1.phone-require-input') ||
                      (errors.phoneNumber ===
                        t('top-up-page.step1.phone-format') &&
                        touched.phoneNumber) ||
                      values.phoneNumber === '' ||
                      topUpAmount === ''
                        ? 'outlined'
                        : 'contained'
                    }
                    color={
                      errors.phoneNumber ===
                        t('top-up-page.step1.phone-require-input') ||
                      (errors.phoneNumber ===
                        t('top-up-page.step1.phone-format') &&
                        touched.phoneNumber) ||
                      values.phoneNumber === '' ||
                      topUpAmount === ''
                        ? 'inherit'
                        : 'primary'
                    }
                    className={`my-[25px] !mt-[125px] h-[52px] w-[233px] rounded-[10px] ${
                      errors.phoneNumber ===
                        t('top-up-page.step1.phone-require-input') ||
                      (errors.phoneNumber ===
                        t('top-up-page.step1.phone-format') &&
                        touched.phoneNumber) ||
                      values.phoneNumber === '' ||
                      topUpAmount === ''
                        ? '!border-0 !bg-transparent'
                        : '!bg-transparent !bg-gradient-to-b from-[#28A745] to-[#227041] text-white !shadow-lg'
                    } text-center text-[16px] font-bold`}
                    disabled={
                      errors.phoneNumber ===
                        t('top-up-page.step1.phone-require-input') ||
                      (errors.phoneNumber ===
                        t('top-up-page.step1.phone-format') &&
                        touched.phoneNumber) ||
                      values.phoneNumber === '' ||
                      topUpAmount === ''
                    }
                    loading={loading}
                    onClick={submitForm}
                  >
                    {t('top-up-page.step1.btn-next')}
                  </LoadingButton>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    )
  }
}
