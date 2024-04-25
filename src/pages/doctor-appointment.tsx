import { DoctorAppointmentView } from '@/sections/doctor-appointment'
import { Helmet } from 'react-helmet-async'

export default function DoctorAppointmentPage() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Doctor's appointment</title>
      </Helmet>

      <DoctorAppointmentView />
    </>
  )
}
