import { NotFoundView } from '@/sections/error'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Page Not Found</title>
      </Helmet>

      <NotFoundView />
    </>
  )
}
