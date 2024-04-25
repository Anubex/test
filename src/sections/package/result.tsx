/* eslint-disable @typescript-eslint/no-explicit-any */
import { useResponsive } from '@/hooks/use-responsive'
import * as resultData from '@/lottie/sim-balance-result.json'
import { ICreateOrderResult } from '@/services/order-service'
import { fCustomNumber } from '@/utils/format-number'
import { Button } from '@mui/material'
import dayjs from 'dayjs'
import html2canvas from 'html2canvas'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Lottie from 'react-lottie-player'
import { QRCode } from 'react-qrcode-logo'

interface IResult {
  result: ICreateOrderResult | undefined
  price: number
  vat: number
}

export default function Result({ result, price, vat }: IResult) {
  const { t } = useTranslation()
  const upLg = useResponsive('up', 'lg')
  const qrCodeRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDownloadQR = () => {
    if (!qrCodeRef.current) return
    html2canvas(qrCodeRef.current).then(function (canvas: any) {
      const link = document.createElement('a')
      link.download = `payment-${dayjs().format('YYYYMMDDhhmmss')}.png`
      link.href = canvas.toDataURL()
      link.click()
    })
  }

  return (
    <div className="mx-auto min-h-[80vh] w-full p-4 md:p-8 lg:max-w-[1040px]  xl:px-0">
      {result?.qrCode ? (
        <>
          <h1 className="mb-4 text-center text-2xl font-semibold md:mb-8 lg:block">
            {t('package-page.result.qr-code.title')}
          </h1>
          <div className="grid justify-center text-center lg:flex lg:gap-x-20">
            <div className="qr-infos mb-4 rounded-[16px] bg-white p-4 md:mb-0 md:p-8 lg:w-1/3 lg:shrink-0">
              <p>{t('package-page.result.qr-code.info')}</p>
              <div
                ref={qrCodeRef}
                className="mx-auto my-4 h-[250px] w-[250px] bg-white [&>canvas]:!h-full [&>canvas]:!w-full"
              >
                <QRCode value={result?.qrCode} size={250} />
              </div>
              <hr className="mb-4 mt-6" />
              <div className="mb-4 flex items-center justify-between text-sm">
                <div className="text-start">
                  {t('package-page.result.qr-code.reference-no')}
                  <p className="font-semibold">{result?.referenceNo}</p>
                </div>
                <div className="text-2xl font-semibold">
                  {fCustomNumber(price + vat, '0,0.00')}
                  <span className="pl-2">
                    <span className="text-base">฿</span>
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="!h-[52px] !w-[233px] rounded-[10px] bg-gradient-to-b from-[#28A745] to-[#227041] text-center text-[16px] font-bold text-white shadow-lg"
                    onClick={handleDownloadQR}
                  >
                    {t('package-page.result.qr-code.btn-save')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="mb-4 text-center text-2xl font-semibold md:mb-8 lg:block">
            {t('package-page.result.sim-balance.title')}
          </h1>
          <div className="grid justify-center text-center lg:flex lg:gap-x-20">
            <div className="qr-infos mb-4 min-w-[300px] rounded-[16px] bg-white p-4 md:mb-0 md:min-w-[450px] md:p-8 lg:w-1/3 lg:shrink-0">
              <p>{t('package-page.result.sim-balance.detail')}</p>
              <div className="mx-auto my-4 bg-white">
                <Lottie
                  animationData={resultData}
                  loop
                  play
                  style={{
                    width: upLg ? 400 : 300,
                    height: upLg ? 400 : 300,
                    margin: '0 auto',
                  }}
                />
              </div>
              <hr className="mb-4 mt-6" />
              <div className="mb-4 flex items-center justify-between text-sm">
                <div className="text-start">
                  {t('package-page.result.sim-balance.reference-no')}
                  <p className="font-semibold">{result?.referenceNo}</p>
                </div>
                <div className="text-2xl font-semibold">
                  {fCustomNumber(price + vat, '0,0.00')}
                  <span className="pl-2">
                    <span className="text-base">฿</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
