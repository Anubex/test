export interface LeaveItemT {
  id: string
  title: string
  subTitle: string
  icon: string
}

export const items: LeaveItemT[] = [
  {
    id: 'leave-1',
    icon: '/assets/e-service/leave/leave-1.svg',
    title: 'ลาป่วย',
    subTitle: '',
  },
  {
    id: 'leave-2',
    icon: '/assets/e-service/leave/leave-2.svg',
    title: 'ลากิจ',
    subTitle: '',
  },
  {
    id: 'leave-3',
    icon: '/assets/e-service/leave/leave-3.svg',
    title: 'ลาพักร้อน',
    subTitle: '',
  },
  // {
  //   id: 'leave-4',
  //   icon: '/assets/e-service/leave/Frame-3.svg',
  //   title: 'นัดหมายกับโรงพยาบาล',
  //   subTitle: 'ทำนัดล่วงหน้าก่อนทำการรักษา',
  // },
  // {
  //   id: 'leave-5',
  //   icon: '/assets/e-service/leave/Frame-4.svg',
  //   title: 'ตรวจสอบสิทธิ์',
  //   subTitle: 'ตรวจสอบสิทธิ์ประกันสังคม,บัตรทอง',
  // },
]
