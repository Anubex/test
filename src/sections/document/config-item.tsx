export interface DocumentItemT {
  id: string
  title: string
  subTitle: string
  icon: string
}

export const items: DocumentItemT[] = [
  {
    id: 'document-1',
    icon: '/assets/e-service/document/document-1.svg',
    title: 'สลิปเงินเดือน',
    subTitle: '',
  },
  {
    id: 'document-2',
    icon: '/assets/e-service/document/document-2.svg',
    title: 'ใบรับรองผ่านงาน',
    subTitle: '',
  },
  // {
  //   id: 'document-3',
  //   icon: '/assets/e-service/document/document-3.svg',
  //   title: 'ลาพักร้อน',
  //   subTitle: '',
  // },
]
