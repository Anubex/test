import { axiosInstance } from './axios-instance'

export type TOrderType = 'package' | 'topUp'

export type TOrderChannel = 'qrCode' | 'simBalance'

export interface ICreateOrder {
  simId: number
  type?: TOrderType
  refCode: string | undefined
  channel?: TOrderChannel
}

export interface ICreateOrderResult {
  referenceNo: string
  qrCode?: string
}

const createOrder = async (
  payload: ICreateOrder,
): Promise<ICreateOrderResult> => {
  const instance = await axiosInstance()
  const response = await instance.post<ICreateOrderResult>(
    `/${import.meta.env.VITE_API_VERSION}/order/create`,
    payload,
  )
  return response.data
}

const orderService = { createOrder }
export default orderService
