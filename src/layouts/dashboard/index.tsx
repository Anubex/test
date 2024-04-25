import { UserInformationProps } from '@/utils/global-interface'
import Box from '@mui/material/Box'
import { useState } from 'react'

import Header from './header'
import Main from './main'
import Nav from './nav'

interface DashboardLayoutProps {
  information: UserInformationProps | null
  children: React.ReactNode
}

// ----------------------------------------------------------------------

export default function DashboardLayout({
  information,
  children,
}: DashboardLayoutProps) {
  const [openNav, setOpenNav] = useState(false)

  return (
    <>
      <Header information={information} onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav
          information={information}
          openNav={openNav}
          onCloseNav={() => setOpenNav(false)}
        />

        <Main>{children}</Main>
      </Box>
    </>
  )
}
