/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useResponsive } from '@/hooks/use-responsive'
import numberService from '@/services/number-service'
import orderService, {
  ICreateOrder,
  ICreateOrderResult,
  TOrderChannel,
} from '@/services/order-service'
import { fCustomNumber } from '@/utils/format-number'
import { fPhone } from '@/utils/format-phone'
import { ErrorResponseProps } from '@/utils/global-interface'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Chip,
  Divider,
  Grid,
  Typography,
  styled,
} from '@mui/material'
import { AxiosError } from 'axios'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-mui'
import { Dispatch, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaSimCard } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { PageT } from './package-view'

interface initialValuesType {
  phoneNumber: string
}

const initialValues: initialValuesType = {
  phoneNumber: '',
}

interface SummaryT extends PageT {
  price: number
  vat: number
  refCode: string
  setResult: Dispatch<SetStateAction<ICreateOrderResult | undefined>>
}

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#28A745',
    },
  },
})

export default function Summary({
  onNext,
  price,
  vat,
  refCode,
  setResult,
}: SummaryT) {
  const { t } = useTranslation()
  const upLg = useResponsive('up', 'lg')
  const [channel, setChannel] = useState<TOrderChannel | false>(false)
  const [loading, setLoading] = useState(false)

  const subscribeSchema = Yup.object().shape({
    phoneNumber: Yup.string()
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
  })

  const handleChannel =
    (selected: TOrderChannel) =>
    (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setChannel(newExpanded ? selected : false)
    }

  const btnSubscribe = (values: initialValuesType) => {
    if (onNext) {
      if (!loading) {
        setLoading(true)
        if (!channel) {
          toast.error(t('package-page.step2.channels-require'), {
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
        setLoading(true)
        numberService
          .getNumberState(fPhone(values.phoneNumber, '66'))
          .then((result) => {
            if (
              !['valid', 'active', 'inactive1', 'inactive2'].includes(
                result.sim.simState,
              ) ||
              !['ACTIVE'].includes(result.ossSimState)
            ) {
              setTimeout(() => setLoading(false), 1000)
              toast.error(t('package-page.step2.not-available-phone-number'), {
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
            const thisPayload: ICreateOrder = {
              simId: result.sim.id,
              refCode,
              type: 'package',
              channel,
            }
            orderService
              .createOrder(thisPayload)
              .then((result) => {
                setLoading(false)
                setResult(result)
                onNext('result')
              })
              .catch((error) => {
                setTimeout(() => setLoading(false), 100)
                const response = (error as AxiosError).response
                console.log(response)
                let message: string = t('error.toast-internal-error')
                if (response?.status === 500) {
                  const result: ErrorResponseProps =
                    response?.data as ErrorResponseProps
                  if (result?.code === '501') {
                    message = t('package-page.step2.cannot-get-order')
                  } else if (result?.code === '502') {
                    message = t('package-page.step2.duplicate-order')
                  } else if (result?.code === '503') {
                    message = t('package-page.step2.cannot-create-order')
                  } else if (result?.code === '504') {
                    message = t('package-page.step2.order-type-not-support')
                  } else if (result?.code === '505') {
                    message = t('package-page.step2.cannot-get-sim-balance')
                  } else if (result?.code === '506') {
                    message = t('package-page.step2.insufficient-sim-balance')
                  } else if (result?.code === '507') {
                    message = t('package-page.step2.cannot-adjust-sim-balance')
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
                message = t('package-page.step2.cannot-get-phone-number')
              } else if (result?.code === '502') {
                message = t('package-page.step2.not-found-phone-number')
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
  }

  if (onNext) {
    return (
      <div className="mt-[66px] flex min-h-[80vh] items-center justify-center py-[100px]">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: '1040px', mx: 'auto', boxShadow: 'lg' }}
        >
          <Grid
            item
            xs={12}
            lg={7}
            className={!upLg ? '!mx-[15px] !px-0' : undefined}
          >
            <Card>
              <Typography
                variant="h2"
                sx={{
                  p: 2,
                  textAlign: 'center',
                  bgcolor: '#00781E',
                  color: 'white',
                }}
              >
                {t('package-page.step2.payment-channels-title')}
              </Typography>

              {/* Accordion for Credit/Debit card payment */}
              <Accordion
                expanded={channel === 'qrCode'}
                onChange={handleChannel('qrCode')}
              >
                <AccordionSummary
                  aria-controls="qr-code-content"
                  id="qr-code-header"
                  className="p-6 pt-0 md:p-8 md:pt-0 2xl:px-11"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center justify-evenly p-6 py-4 md:p-8 md:py-4 2xl:px-11">
                      <img src="/assets/images/gg_qr.svg" alt="qr-code-icon" />
                      <Typography className="!ml-5">QR Code</Typography>
                    </div>
                    {channel !== 'qrCode' && (
                      <Chip
                        label={t('package-page.step2.selected-label')}
                        sx={{
                          color: 'white',
                          backgroundColor: '#00781E',
                        }}
                      />
                    )}
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="payment-accordian-body p-6 pt-0 md:p-8 md:pt-0 2xl:px-11">
                    <div className="mb-3 border-b pb-3 font-medium">
                      <p className="mb-3">
                        {t('package-page.step2.qr-code-detail-1')}
                      </p>
                      {/* <button
                      data-payment-modal-id-param="modal-qr-how-to-pay"
                      data-action="payment#showModal"
                      className="font-medium text-primary-green"
                    >
                      วิธีจ่ายเงิน
                    </button> */}
                    </div>
                    <div className="recurring font-medium">
                      <p>{t('package-page.step2.qr-code-detail-2')}</p>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={channel === 'simBalance'}
                onChange={handleChannel('simBalance')}
              >
                <AccordionSummary
                  aria-controls="sim-balance-content"
                  id="sim-balance-header"
                  className="p-6 pt-0 md:p-8 md:pt-0 2xl:px-11"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center justify-evenly p-6 py-4 md:p-8 md:py-4 2xl:px-11">
                      <FaSimCard size={28} />
                      <Typography className="!ml-5">
                        {t('package-page.step2.sim-balance')}
                      </Typography>
                    </div>
                    {channel !== 'simBalance' && (
                      <Chip
                        label={t('package-page.step2.selected-label')}
                        sx={{
                          color: 'white',
                          backgroundColor: '#00781E',
                        }}
                      />
                    )}
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="payment-accordian-body p-6 pt-0 md:p-8 md:pt-0 2xl:px-11">
                    <div className="mb-3 border-b pb-3 font-medium">
                      <p className="mb-3">
                        {t('package-page.step2.sim-balance-detail-1')}
                      </p>
                      {/* <button
                      data-payment-modal-id-param="modal-qr-how-to-pay"
                      data-action="payment#showModal"
                      className="font-medium text-primary-green"
                    >
                      วิธีจ่ายเงิน
                    </button> */}
                    </div>
                    <div className="recurring font-medium">
                      <p>{t('package-page.step2.sim-balance-detail-2')}</p>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            lg={5}
            className={!upLg ? '!mx-[15px] !px-0' : undefined}
          >
            <div
              className="bg-white-1 sticky bottom-0 w-full overflow-y-hidden rounded-lg bg-white drop-shadow-lg lg:static lg:col-start-2 lg:col-end-3 lg:h-fit lg:w-full lg:rounded-lg"
              data-controller="order-summary"
              data-order-summary-offer-time-value
            >
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => btnSubscribe(values)}
                validationSchema={subscribeSchema}
              >
                {({ values, submitForm }) => (
                  <Form autoComplete="off">
                    <div className="px-6 py-5">
                      <div className="mb-6">
                        <p className="text-center text-[14px] font-semibold">
                          {t('package-page.step2.phone-number-label')}
                        </p>
                        <Field
                          component={CustomTextField}
                          name="phoneNumber"
                          inputMode="tel"
                          fullWidth
                          variant="outlined"
                          placeholder={t(
                            'package-page.step2.phone-number-label',
                          )}
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
                          className="!my-[25px] !w-full !px-[25px] md:!px-0"
                        />
                      </div>
                      <div className="mb-4 flex flex-col gap-2 text-[0.9375rem]">
                        <div className="flex justify-between">
                          <dt>{t('package-page.step2.service-fee')}</dt>
                          <dd>
                            <span>{fCustomNumber(price, '0,0.00')}</span>
                            <span className="pl-2">
                              <span className="currency_symbol">฿</span>
                            </span>
                          </dd>
                        </div>
                        <div className="flex justify-between">
                          <dt>{t('package-page.step2.vat')}</dt>
                          <dd>
                            <span>{fCustomNumber(vat, '0,0.00')}</span>
                            <span className="pl-2">
                              <span className="currency_symbol">฿</span>
                            </span>
                          </dd>
                        </div>
                      </div>
                      <Divider />
                      <div className="my-4 flex items-baseline justify-between">
                        <h4 className="text-xl font-semibold">
                          {t('package-page.step2.total')}
                        </h4>
                        <div className="text-2xl font-bold">
                          {fCustomNumber(price + vat, '0,0.00')}
                        </div>
                      </div>
                      <LoadingButton
                        type="submit"
                        fullWidth
                        variant={
                          !channel || channel === 'simBalance'
                            ? 'outlined'
                            : 'contained'
                        }
                        color={
                          !channel || channel === 'simBalance'
                            ? 'inherit'
                            : 'primary'
                        }
                        className={`h-[52px] w-[233px] rounded-[10px] ${
                          !channel || channel === 'simBalance'
                            ? '!border-0 !bg-transparent'
                            : '!bg-transparent !bg-gradient-to-b from-[#28A745] to-[#227041] text-white !shadow-lg'
                        } text-center text-[16px] font-bold`}
                        disabled={!channel || channel === 'simBalance'}
                        loading={loading}
                        onClick={submitForm}
                        sx={{
                          '& .MuiLoadingButton-loadingIndicator': {
                            color: 'white',
                          },
                        }}
                      >
                        {t('package-page.step2.btn-next')}
                      </LoadingButton>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}
