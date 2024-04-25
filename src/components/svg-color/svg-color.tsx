import { Props } from '@/utils/global-interface'
import { SxProps, Theme } from '@mui/material'
import Box from '@mui/material/Box'
import { forwardRef } from 'react'

interface SvgColorProps extends Props {
  src: string
  sx: SxProps<Theme>
}

// ----------------------------------------------------------------------

const SvgColor = forwardRef(({ src, sx, ...other }: SvgColorProps, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
))

export default SvgColor
