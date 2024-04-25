import { axiosInstance } from './axios-instance'

export type TSimState =
  | 'pair'
  | 'pending'
  | 'valid'
  | 'active'
  | 'inactive1'
  | 'inactive2'
  | 'deactive'
  | 'disconnect'

export interface ISim {
  createdAt: string
  iccid: string
  id: number
  imsi: string
  numberId: number | null
  ownerId: number | null
  pin1: string | null
  pin2: string | null
  puk1: string | null
  puk2: string | null
  simState: TSimState
  updatedAt: string
}

export interface IGetNumberState {
  id: number
  msisdn: string
  sim: ISim
  createdAt: string
  updatedAt: string
  ossSimState: string
}

const getNumberState = async (
  phoneNumber: string,
): Promise<IGetNumberState> => {
  const instance = await axiosInstance()
  const response = await instance.get<IGetNumberState>(
    `/${import.meta.env.VITE_API_VERSION}/number/${phoneNumber}`,
  )
  return response.data
}

const numberService = { getNumberState }
export default numberService
