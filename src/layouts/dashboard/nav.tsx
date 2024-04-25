/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from '@/components/logo'
import Scrollbar from '@/components/scrollbar'
import { useResponsive } from '@/hooks/use-responsive'
import { RouterLink } from '@/routes/components'
import { usePathname } from '@/routes/hooks'
import { UserInformationProps } from '@/utils/global-interface'
import { Avatar } from '@mui/material'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import ListItemButton from '@mui/material/ListItemButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'

import { NAV } from './config-layout'
import navItems from './config-navigation'

interface NavProps {
  information: UserInformationProps | null
  openNav: boolean
  onCloseNav: () => void
}

interface NavItemProps {
  item: ItemProps
}

export interface ItemProps {
  path: string
  icon: JSX.Element
  title: string
  permission: string
}

// ----------------------------------------------------------------------

export default function Nav({ information, openNav, onCloseNav }: NavProps) {
  const pathname = usePathname()

  const upLg = useResponsive('up', 'lg')

  useEffect(() => {
    if (openNav) {
      onCloseNav()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: 'common.white',
      }}
    >
      <Avatar variant="rounded" sx={{ bgcolor: 'primary.main' }}>
        {information?.firstName.charAt(0).toUpperCase()}
      </Avatar>

      <Box sx={{ ml: 2, color: 'primary.main' }}>
        <Typography variant="subtitle2">
          {information?.firstName.charAt(0).toUpperCase()}
          {information?.firstName.slice(1)}{' '}
          {information?.lastName.charAt(0).toUpperCase()}
          {information?.lastName.slice(1)}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {information?.displayName}
        </Typography>
      </Box>
    </Box>
  )

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navItems.map((item: ItemProps) => {
        if (item.permission === '') {
          return <NavItem key={item.title} item={item} />
        } else {
          if (information && information?.permissions) {
            const matchingKeysValues = Object.keys(information.permissions)
              .filter((key) => key.includes(item.permission))
              .map((key) => (information.permissions as any)[key])
            const allTrue = matchingKeysValues.every((value) => value === true)
            if (allTrue) {
              return <NavItem key={item.title} item={item} />
            } else {
              return null
            }
          }
        }
      })}
    </Stack>
  )

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box display="flex" sx={{ mt: 3 }}>
        <Box component="span">
          <Logo
            sx={{
              my: 'auto',
              ml: 4,
              width: 32,
              height: 45,
            }}
            className="brightness-100 invert"
          />
        </Box>
        <Box component="span" sx={{ my: 'auto', ml: 2 }}>
          <Typography variant="h6" color="common.white">
            Admin Dashboard
          </Typography>
        </Box>
      </Box>

      {renderAccount}

      {renderMenu}
    </Scrollbar>
  )

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
        backgroundColor: 'primary.main',
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
              backgroundColor: 'primary.main',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  )
}

// ----------------------------------------------------------------------

function NavItem({ item }: NavItemProps) {
  const pathname = usePathname()

  const active = item.path === pathname

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'common.white',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightSemiBold',
        '&:hover': {
          bgcolor: (theme) => theme.palette.common.white,
          color: (theme) => theme.palette.primary.main,
        },
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => theme.palette.common.white,
          '&:hover': {
            bgcolor: (theme) => theme.palette.common.white,
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  )
}
