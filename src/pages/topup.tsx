import { TopUpView } from '@/sections/topup'
import { Helmet } from 'react-helmet-async'

export default function TopUp() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Top Up</title>
      </Helmet>

      <TopUpView />
    </>
  )
}
