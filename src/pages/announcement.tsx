import { AnnouncementView } from '@/sections/announcement'
import { Helmet } from 'react-helmet-async'

export default function AnnouncementPage() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Announcement</title>
      </Helmet>

      <AnnouncementView />
    </>
  )
}
