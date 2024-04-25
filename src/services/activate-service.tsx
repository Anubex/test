import { axiosInstance } from './axios-instance'
import { ISim } from './number-service'

export interface IOcrSimResult {
  phoneNumber: string
  iccid: string
}

export interface ICheckSim extends IOcrSimResult {}

export interface ICheckSimResult extends ISim {}

export type TPersonalType = 'C' | 'F' | 'P'

export interface IActivateSim {
  personalType: TPersonalType
  personalId: string
  firstName: string
  lastName: string
  birthDate: string
  religion?: string
  address: string
  dateIssue?: string
  dateExpire?: string
  laserCode?: string
  contactNumber: string
  phoneNumber: string
  frontImage: File
  backImage: File
  personalImage: File
  simImage: File
}

export interface IActivateSimResult {
  status: string
}

const ocrSim = async (formData: FormData): Promise<IOcrSimResult> => {
  const instance = await axiosInstance()
  const response = await instance.post<IOcrSimResult>(
    `/${import.meta.env.VITE_API_VERSION}/activate/ocr-sim`,
    formData,
  )
  return response.data
}

const checkSim = async (params: ICheckSim): Promise<ICheckSimResult> => {
  const instance = await axiosInstance()
  const response = await instance.get<ICheckSimResult>(
    `/${import.meta.env.VITE_API_VERSION}/activate/check-sim`,
    {
      params,
    },
  )
  return response.data
}

const activateSim = async (formData: FormData): Promise<IActivateSimResult> => {
  const instance = await axiosInstance()
  const response = await instance.post<IActivateSimResult>(
    `/${import.meta.env.VITE_API_VERSION}/activate/sim`,
    formData,
  )
  return response.data
}

const activateService = {
  ocrSim,
  checkSim,
  activateSim,
}
export default activateService
