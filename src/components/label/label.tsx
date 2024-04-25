import Box, { BoxProps } from '@mui/material/Box'
import { SxProps, Theme, useTheme } from '@mui/material/styles'
import { forwardRef } from 'react'

import { StyledLabel } from './styles'

// ----------------------------------------------------------------------

interface LabelProps extends BoxProps {
  children?: React.ReactNode
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  variant?: 'filled' | 'outlined' | 'ghost' | 'soft'
  startIcon?: React.ReactElement
  endIcon?: React.ReactElement
  sx?: SxProps<Theme>
}

const Label = forwardRef<HTMLSpanElement, LabelProps>(
  (
    {
      children,
      color = 'default',
      variant = 'soft',
      startIcon,
      endIcon,
      sx,
      ...other
    },
    ref,
  ) => {
    const theme = useTheme()

    const iconStyles: SxProps<Theme> = {
      width: 16,
      height: 16,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    }

    return (
      <StyledLabel
        ref={ref}
        component="span"
        ownerstate={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          ...sx,
        }}
        theme={theme}
        {...other}
      >
        {startIcon && <Box sx={{ mr: 0.75, ...iconStyles }}> {startIcon} </Box>}

        {children}

        {endIcon && <Box sx={{ ml: 0.75, ...iconStyles }}> {endIcon} </Box>}
      </StyledLabel>
    )
  },
)

export default Label
