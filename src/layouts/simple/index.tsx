import { FaArrowUpLong } from 'react-icons/fa6'
import ScrollToTop from 'react-scroll-to-top'

import Footer from './footer'
import Header from './header'

interface SimpleLayoutT {
  children: React.ReactNode
}

export default function SimpleLayout({ children }: SimpleLayoutT) {
  const Arrow = (
    <>
      <div className="grid justify-items-center">
        <FaArrowUpLong
          size={24}
          style={{
            color: 'white',
          }}
        />
      </div>
    </>
  )

  return (
    <>
      <Header />

      <div className="mt-[66px] w-full">
        {children}
        <Footer />
      </div>
      <ScrollToTop
        smooth
        component={Arrow}
        style={{
          width: '48px',
          height: '48px',
          right: '20px',
          bottom: '20px',
          borderRadius: '100%',
          backgroundColor: '#28A745',
        }}
      />
    </>
  )
}
