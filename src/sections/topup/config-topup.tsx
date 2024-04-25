export interface TopUpProfileT {
  amount: number
  vat: number
  duration: number
  refCode: string
}

export const InitTopUpProfiles: TopUpProfileT[] = [
  { amount: 10, vat: 0, duration: 30, refCode: 'FeelsOnline10' },
  { amount: 100, vat: 0, duration: 30, refCode: 'FeelsOnline100' },
  { amount: 200, vat: 0, duration: 30, refCode: 'FeelsOnline200' },
  { amount: 300, vat: 0, duration: 60, refCode: 'FeelsOnline300' },
]
