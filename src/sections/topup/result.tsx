/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICreateOrderResult } from '@/services/order-service'
import { fCustomNumber } from '@/utils/format-number'
import { Button } from '@mui/material'
import dayjs from 'dayjs'
import html2canvas from 'html2canvas'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { QRCode } from 'react-qrcode-logo'

interface IResult {
  result: ICreateOrderResult | undefined
  price: number
  vat: number
}

export default function Result({ result, price, vat }: IResult) {
  const { t } = useTranslation()
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
      <h1 className="mb-4 text-center text-2xl font-semibold md:mb-8 lg:block">
        {t('top-up-page.result.title')}
      </h1>
      <div className="grid justify-center text-center lg:flex lg:gap-x-20">
        <div className="qr-infos mb-4 rounded-[16px] bg-white p-4 md:mb-0 md:p-8 lg:w-1/3 lg:shrink-0">
          <p>{t('top-up-page.result.info')}</p>
          <div
            ref={qrCodeRef}
            className="mx-auto my-4 h-[250px] w-[250px] bg-white [&>canvas]:!h-full [&>canvas]:!w-full"
          >
            <QRCode value={result?.qrCode} size={250} />
          </div>
          <hr className="mb-4 mt-6" />
          <div className="mb-4 flex items-center justify-between text-sm">
            <div className="text-start">
              {t('top-up-page.result.reference-no')}
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
                {t('top-up-page.result.btn-save')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
