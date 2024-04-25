import { ICreateOrder, ICreateOrderResult } from '@/services/order-service'
import { Dispatch, SetStateAction, useState } from 'react'

import Intro from './intro'
import Result from './result'
import Summary from './summary'

type StepT = 'intro' | 'summary' | 'result'

export interface PageT {
  onNext?: Dispatch<SetStateAction<StepT>>
  payload?: ICreateOrder | undefined
  setPayload?: Dispatch<SetStateAction<ICreateOrder | undefined>>
}

export default function TopUpView() {
  const [step, setStep] = useState<StepT>('intro')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [price, setPrice] = useState(0)
  const [vat, setVat] = useState(0)
  const [payload, setPayload] = useState<ICreateOrder | undefined>(undefined)
  const [result, setResult] = useState<ICreateOrderResult | undefined>(
    undefined,
  )

  const renderStepContent = () => {
    switch (step) {
      case 'intro':
        return (
          <Intro
            onNext={setStep}
            setPayload={setPayload}
            setPhoneNumber={setPhoneNumber}
            setPrice={setPrice}
            setVat={setVat}
          />
        )
      case 'summary':
        return (
          <Summary
            onNext={setStep}
            payload={payload}
            phoneNumber={phoneNumber}
            price={price}
            vat={vat}
            setResult={setResult}
          />
        )
      case 'result':
        return <Result result={result} price={price} vat={vat} />
      default:
        return (
          <Intro
            onNext={setStep}
            setPayload={setPayload}
            setPhoneNumber={setPhoneNumber}
            setPrice={setPrice}
            setVat={setVat}
          />
        )
    }
  }

  return <>{renderStepContent()}</>
}
