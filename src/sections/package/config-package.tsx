export interface PackageT {
  id: number
  name: string
  price: number
  vat: number
  refCode: string
  data?: {
    volume: string
    speed: string
  }
  voice?: {
    volume: string
  }
  description: string
  remark?: string
}

export const packages: PackageT[] = [
 
  
 
]