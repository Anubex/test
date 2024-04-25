import { EServiceView } from '@/sections/e-service'
import { Helmet } from 'react-helmet-async'

export default function EServicePage() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | E-Service</title>
      </Helmet>

      <EServiceView />
    </>
  )
}
