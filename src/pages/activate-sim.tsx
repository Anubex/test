import { ActivateSimView } from '@/sections/activate-sim'
import { Helmet } from 'react-helmet-async'

export default function ActivateSimPage() {
  return (
    <>
      <Helmet>
        <title>Feels Dealer SIM | Active New SIM</title>
      </Helmet>

      <ActivateSimView />
    </>
  )
}
