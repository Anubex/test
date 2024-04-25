import { PackageView } from '@/sections/package'
import { Helmet } from 'react-helmet-async'

export default function Package() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Package</title>
      </Helmet>

      <PackageView />
    </>
  )
}
