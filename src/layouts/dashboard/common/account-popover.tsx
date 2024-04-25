import { logout } from '@/stores/slices/authSlice'
import { UserInformationProps } from '@/utils/global-interface'
import { Avatar } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

// ----------------------------------------------------------------------

interface AccountPopoverProps {
  information: UserInformationProps | null
}

interface MenuOption {
  label: string
  icon: string
}

const MENU_OPTIONS: MenuOption[] = []

// ----------------------------------------------------------------------

export default function AccountPopover({ information }: AccountPopoverProps) {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const [open, setOpen] = useState<HTMLElement | null>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const btnLogout = () => {
    setOpen(null)
    dispatch(logout())
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.primary.main, 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar variant="rounded" sx={{ bgcolor: 'primary.main' }}>
          {information?.firstName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {information?.firstName.charAt(0).toUpperCase()}
            {information?.firstName.slice(1)}{' '}
            {information?.lastName.charAt(0).toUpperCase()}
            {information?.lastName.slice(1)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {information?.displayName}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={handleClose}>
            {option.label}
          </MenuItem>
        ))}

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={btnLogout}
          sx={{ typography: 'subtitle2', color: 'primary.main', py: 1.5 }}
        >
          {t('menu.logout')}
        </MenuItem>
      </Popover>
    </>
  )
}
