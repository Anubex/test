export interface DoctorItemT {
  id: string
  title: string
  subTitle: string
  icon: string
}

export const items: DoctorItemT[] = [
  {
    id: 'doctor-appointment-1',
    icon: '/assets/e-service/doctor-appointment/Frame.svg',
    title: 'ปรึกษาแพทย์แบบสด',
    subTitle: 'โทรปรึกษาเบื้องต้น',
  },
  {
    id: 'doctor-appointment-2',
    icon: '/assets/e-service/doctor-appointment/Frame-2.svg',
    title: 'สั่งยา',
    subTitle: 'สั่งยากับร้านขายยาใกล้คุณ',
  },
  {
    id: 'doctor-appointment-3',
    icon: '/assets/e-service/doctor-appointment/gridicons_chat.svg',
    title: 'แชทปรึกษาออนไลน์',
    subTitle: 'ปรึกษาออนไลน์ผ่านแชท',
  },
  {
    id: 'doctor-appointment-4',
    icon: '/assets/e-service/doctor-appointment/Frame-3.svg',
    title: 'นัดหมายกับโรงพยาบาล',
    subTitle: 'ทำนัดล่วงหน้าก่อนทำการรักษา',
  },
  {
    id: 'doctor-appointment-5',
    icon: '/assets/e-service/doctor-appointment/Frame-4.svg',
    title: 'ตรวจสอบสิทธิ์',
    subTitle: 'ตรวจสอบสิทธิ์ประกันสังคม,บัตรทอง',
  },
  {
    id: 'doctor-appointment-6',
    icon: '/assets/e-service/doctor-appointment/Frame-5.svg',
    title: 'รถพยาบาลฉุกเฉิน',
    subTitle: 'เรียกรถพยาบาล',
  },
  {
    id: 'doctor-appointment-7',
    icon: '/assets/e-service/doctor-appointment/Frame-6.svg',
    title: 'บริจาคให้องค์กร',
    subTitle: 'เพื่อการกุศล',
  },
]
