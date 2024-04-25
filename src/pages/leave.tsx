import { LeaveView } from '@/sections/leave'
import { Helmet } from 'react-helmet-async'

export default function LeavePage() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Leave application</title>
      </Helmet>

      <LeaveView />
    </>
  )
}
