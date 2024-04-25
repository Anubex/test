import { DocumentView } from '@/sections/document'
import { Helmet } from 'react-helmet-async'

export default function DocumentPage() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Document application</title>
      </Helmet>

      <DocumentView />
    </>
  )
}
