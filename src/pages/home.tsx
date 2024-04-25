import { HomeView } from '@/sections/home'
import { Helmet } from 'react-helmet-async'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Berdee| Home Page</title>
      </Helmet>

      <HomeView />
    </>
  )
}
