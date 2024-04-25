export interface EServiceT {
  name: string
  image: string
  imageType: 'url' | 'path'
  button: string
  to?: string
  textClassName?: string
  buttonClassName?: string
}

export const services: EServiceT[] = [
  {
    name: `แจ้งลา กิจ ป่วย`,
    image: 'assets/e-service/service-1.png',
    button: 'ดำเนินการ',
    imageType: 'path',
    to: '/leave',
  },  

  {
    name: `ยื่นขอเอกสาร`,
    image: 'assets/e-service/service-2.png',
    button: 'ยื่นคำร้อง',
    imageType: 'path',
    to: '/document',
  },
  {
    name: `ประชาสัมพันธ์`,
    image: 'assets/e-service/service-3.png',
    button: 'อ่านเพิ่มเติม',
    imageType: 'path',
    to: '/announcement',
  },  
  // {
  //   name: `สะดวกง่าย
  //   ไม่ต้องไปถึงขนส่ง`,
  //   image: 'assets/e-service/service-5.png',
  //   button: 'พ.ร.บ.',
  //   imageType: 'path',
  // },
  // {
  //   name: `อยู่บ้านก็จ่ายได้  
  //   ชำระเบี้ยประกันภัย&nbsp;ง่ายๆ`,
  //   image: 'assets/e-service/service-6.png',
  //   button: 'ประกันภัย',
  //   imageType: 'path',
  //   textClassName:
  //     'prose mb-[14px] w-[68%] max-w-full text-center text-xl font-bold md:text-3xl md:leading-[42px] md:w-[68%]',
  //   buttonClassName:
  //     'mt-[36px] flex w-[68%] items-center justify-center gap-4 md:w-[68%] 2xl:gap-10',
  //   to: '/insurance',
  // },
]
