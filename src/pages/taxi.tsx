import { TaxiView } from '@/sections/taxi'
import { Helmet } from 'react-helmet-async'

export default function TaxiPage() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Taxi</title>
      </Helmet>

      <TaxiView />
    </>
  )
}
