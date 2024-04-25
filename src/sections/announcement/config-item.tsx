export interface Announcement {
  id: string
  title: string
  subTitle: string
  icon: string
}

export const items: Announcement[] = [
  {
    id: 'announcement-1',
    icon: '/assets/e-service/announcement/announcement-1.svg',
    title: 'การอบรมพนักงาน',
    subTitle: '',
  },
  // {
  //   id: 'announcement-2',
  //   icon: '/assets/e-service/announcement/announcement-2.svg',
  //   title: 'ใบรับรองผ่านงาน',
  //   subTitle: '',
  // },
  // {
  //   id: 'announcement-3',
  //   icon: '/assets/e-service/announcement/announcement-3.svg',
  //   title: 'ลาพักร้อน',
  //   subTitle: '',
  // },
]
