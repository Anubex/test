import { Props } from '@/utils/global-interface'
import { Icon, IconifyIcon } from '@iconify/react'
import { SxProps, Theme } from '@mui/material'
import Box from '@mui/material/Box'
import { forwardRef } from 'react'

interface IconifyProps extends Props {
  icon: IconifyIcon | string
  width?: number
  sx?: SxProps<Theme>
}

// ----------------------------------------------------------------------

const Iconify = forwardRef(
  ({ icon, width = 20, sx, ...other }: IconifyProps, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={typeof icon === 'string' ? (icon as string) : (icon as IconifyIcon)}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  ),
)

export default Iconify
