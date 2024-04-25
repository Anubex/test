import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Popover from '@mui/material/Popover'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// ----------------------------------------------------------------------

interface Lang {
  value: string
  label: string
  icon: string
}

// ----------------------------------------------------------------------

export default function LanguagePopover(): JSX.Element {
  const { t, i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const LANGS: Lang[] = [
    {
      value: 'th',
      label: t('language.thai'),
      icon: '/assets/icons/thailand.png',
    },
    {
      value: 'en',
      label: t('language.english'),
      icon: '/assets/icons/united-kingdom.png',
    },
  ]

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (language: string) => {
    setAnchorEl(null)
    i18n.changeLanguage(language)
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(anchorEl && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <img
          src={LANGS.filter((lang) => lang.value === i18n.language)?.[0].icon}
          alt={LANGS.filter((lang) => lang.value === i18n.language)?.[0].label}
        />
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={
              option.value ===
              LANGS.filter((lang) => lang.value === i18n.language)?.[0].value
            }
            onClick={() => handleClose(option.value)}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box
              component="img"
              alt={option.label}
              src={option.icon}
              sx={{ width: 28, mr: 2 }}
            />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  )
}
