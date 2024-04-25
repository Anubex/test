export interface InsuranceItemT {
  id: string
  title: string
  icon: string
}

export const items: InsuranceItemT[] = [
  {
    id: 'insurance-1',
    icon: '/assets/e-service/insurance/insurance-1.svg',
    title: 'ประกันโรคร้ายแรง',
  },
  {
    id: 'insurance-2',
    icon: '/assets/e-service/insurance/insurance-2.svg',
    title: 'ประกันอุบัติเหตุ',
  },
  {
    id: 'insurance-3',
    icon: '/assets/e-service/insurance/insurance-3.svg',
    title: 'ประกันสุขภาพเหมาจ่าย',
  },
  {
    id: 'insurance-4',
    icon: '/assets/e-service/insurance/insurance-4.svg',
    title: 'ประกันคุ้มครองการเดินทาง',
  },
]
