import { ComingSoonView } from '@/sections/coming-soon'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function ComingSoonPage() {
  return (
    <>
      <Helmet>
        <title>K4 Admin | Coming Soon</title>
      </Helmet>

      <ComingSoonView />
    </>
  )
}
