import { InsuranceView } from '@/sections/insurance'
import { Helmet } from 'react-helmet-async'

export default function InsurancePage() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Insurance</title>
      </Helmet>

      <InsuranceView />
    </>
  )
}
