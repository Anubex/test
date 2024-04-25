export interface TaxiTypeT {
  id: string
  title: string
  subTitle: string
  subTitle2: string
  icon: string
}

export const types: TaxiTypeT[] = [
  {
    id: 'taxi-1',
    icon: '/assets/e-service/taxi/car.png',
    title: 'รถเก๋ง',
    subTitle: 'รับ - ส่ง ถึงที่ไม่ต้องโบกเรียก',
    subTitle2: 'ราคาถูกกว่าปกติ เรียกเลย!',
  },
  {
    id: 'taxi-2',
    icon: '/assets/e-service/taxi/van.png',
    title: 'รถตู้',
    subTitle: 'รถตู้ส่วนบุคคล',
    subTitle2: 'รับส่งต่างจังหวัด',
  },
  // {
  //   id: 'taxi-3',
  //   icon: '/assets/e-service/taxi/ladies.svg',
  //   title: 'Ladies',
  //   subTitle: 'ผู้โดยสารผู้หญิงโดยเฉพาะ',
  //   subTitle2: 'คนขับโดยผู้หญิง',
  // },
  // {
  //   id: 'taxi-4',
  //   icon: '/assets/e-service/taxi/car-plus.svg',
  //   title: 'Car Plus',
  //   subTitle: 'รถพรีเมียนซีดาน',
  //   subTitle2: 'ไม่รวมค่าธรรมเนียมการเรียก 20฿',
  // },
]
