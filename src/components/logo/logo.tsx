import { RouterLink } from '@/routes/components'
import { Props } from '@/utils/global-interface'
import { Theme } from '@emotion/react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { SxProps } from '@mui/material/styles'
import { forwardRef } from 'react'

interface LogoProps extends Props {
  disabledLink?: boolean
  className?: string
  sx: SxProps<Theme>
}

// ----------------------------------------------------------------------

const Logo = forwardRef(
  ({ disabledLink = false, className = '', sx }: LogoProps, ref) => {
    // -------------------------------------------------------
    const logo = (
      <Box
        ref={ref}
        component="img"
        src="/assets/k4-logo.png"
        sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
        className={className}
      />
    )

    if (disabledLink) {
      return logo
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    )
  },
)

export default Logo
