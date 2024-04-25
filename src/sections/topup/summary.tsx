import { useResponsive } from '@/hooks/use-responsive'
import orderService, {
  ICreateOrder,
  ICreateOrderResult,
  TOrderChannel,
} from '@/services/order-service'
import { fCustomNumber } from '@/utils/format-number'
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
} from '@mui/material'
import { AxiosError } from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { PageT } from './topup-view'

interface ResultT extends PageT {
  phoneNumber: string
  price: number
  vat: number
  setResult: Dispatch<SetStateAction<ICreateOrderResult | undefined>>
}

export default function Summary({
  phoneNumber,
  price,
  vat,
  payload,
  onNext,
  setResult,
}: ResultT) {
  const { t } = useTranslation()
  const upLg = useResponsive('up', 'lg')
  const [channel, setChannel] = useState<TOrderChannel | false>(false)
  const [loading, setLoading] = useState(false)

  const handleChannel =
    (selected: TOrderChannel) =>
    (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setChannel(newExpanded ? selected : false)
    }

  const btnTopUp = () => {
    if (payload && onNext) {
      if (!channel) {
        toast.error(t('top-up-page.step2.channels-require'), {
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
      setLoading(true)
      const thisPayload: ICreateOrder = {
        ...payload,
        type: 'topUp',
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
          const response = (error as AxiosError).response
          let message: string = t('error.toast-internal-error')
          if (response?.status === 500) {
            const result: ErrorResponseProps =
              response?.data as ErrorResponseProps
            if (result?.code === '501') {
              message = t('top-up-page.step2.cannot-get-order')
            } else if (result?.code === '502') {
              message = t('top-up-page.step2.duplicate-order')
            } else if (result?.code === '503') {
              message = t('top-up-page.step2.cannot-create-order')
            } else if (result?.code === '504') {
              message = t('top-up-page.step2.cannot-generate-qr-code')
            }
          }
          setLoading(false)
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
      <div className="mt-[66px] flex items-center justify-center py-[40px] md:min-h-[80vh] md:py-[100px]">
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
                {t('top-up-page.step2.payment-channels-title')}
              </Typography>
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
                        label={t('top-up-page.step2.selected-label')}
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
                        {t('top-up-page.step2.qr-code-detail-1')}
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
                      <p>{t('top-up-page.step2.qr-code-detail-2')}</p>
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
              <div className="px-6 py-5">
                <div className="mb-6">
                  <div className="text-sm font-medium">
                    {t('top-up-page.step2.your-phone-number')}
                  </div>
                  <em className="block text-xl font-bold not-italic">
                    {phoneNumber}
                  </em>
                </div>
                <div className="mb-4 flex flex-col gap-2 text-[0.9375rem]">
                  <div className="flex justify-between">
                    <dt>{t('top-up-page.step2.service-fee')}</dt>
                    <dd>
                      <span>{fCustomNumber(price, '0,0.00')}</span>
                      <span className="pl-2">
                        <span className="currency_symbol">฿</span>
                      </span>
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>{t('top-up-page.step2.vat')}</dt>
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
                    {t('top-up-page.step2.total')}
                  </h4>
                  <div className="text-2xl font-bold">
                    {fCustomNumber(price + vat, '0,0.00')}
                    <span className="pl-2">
                      <span className="currency_symbol">฿</span>
                    </span>
                  </div>
                </div>
                <LoadingButton
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="h-[52px] w-[233px] rounded-[10px] bg-gradient-to-b from-[#28A745] to-[#227041] text-center text-[16px] font-bold text-white shadow-lg"
                  disabled={loading}
                  loading={loading}
                  onClick={btnTopUp}
                  sx={{
                    '& .MuiLoadingButton-loadingIndicator': {
                      color: 'white',
                    },
                  }}
                >
                  {t('top-up-page.step2.btn-next')}
                </LoadingButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}
