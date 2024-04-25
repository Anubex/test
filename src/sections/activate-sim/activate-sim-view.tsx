/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, SetStateAction, useState } from 'react'

import Intro from './intro'
import Result from './result'
import Step1 from './step1'
import Step2 from './step2'

type StepT = 'intro' | 'first' | 'second' | 'result'

export interface initialCustomerValuesType {
  firstName: string
  lastName: string
  personalId: string
  birthYear: string
  birthMonth: string
  birthDay: string
  address: string
  contactNumber: string
}

const initialCustomerValues: initialCustomerValuesType = {
  firstName: '',
  lastName: '',
  personalId: '',
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  address: '',
  contactNumber: '',
}

export interface PageT {
  onNext?: Dispatch<SetStateAction<StepT>>
}

export default function ActivateSimView() {
  const [step, setStep] = useState<StepT>('intro')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [serialNo, setSerialNo] = useState('')
  const [simImage, setSimImage] = useState(undefined)
  const [information, setInformation] = useState<initialCustomerValuesType>(
    initialCustomerValues,
  )
  const [frontImage, setFrontImage] = useState(undefined)
  const [personImage, setPersonImage] = useState(undefined)

  const renderStepContent = () => {
    switch (step) {
      case 'intro':
        return <Intro onNext={setStep} />
      case 'first':
        return (
          <Step1
            onNext={setStep}
            setPhoneNumber={setPhoneNumber}
            setSerialNo={setSerialNo}
            imageBuffer={simImage}
            setImageBuffer={setSimImage}
          />
        )
      case 'second':
        return (
          <Step2
            onNext={setStep}
            phoneNumber={phoneNumber}
            serialNo={serialNo}
            information={information}
            simImageBuffer={simImage}
            frontImageBuffer={frontImage}
            setFrontImageBuffer={setFrontImage}
            personImageBuffer={personImage}
            setPersonImageBuffer={setPersonImage}
          />
        )
      case 'result':
        return <Result />
      default:
        return <Intro onNext={setStep} />
    }
  }

  return <>{renderStepContent()}</>
}
