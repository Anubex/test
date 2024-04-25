/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from '@mui/material/Box'
import { Theme, alpha, styled } from '@mui/material/styles'

// ----------------------------------------------------------------------

export const StyledLabel = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'color',
})<any>(({ theme, ownerstate }) => {
  const lightMode = theme.palette.mode === 'light'

  const { variant, color } = ownerstate

  const filledVariant = variant === 'filled'
  const outlinedVariant = variant === 'outlined'
  const softVariant = variant === 'soft'

  const defaultStyle = {
    ...(color === 'default' && {
      // FILLED
      ...(filledVariant && {
        color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
        backgroundColor: theme.palette.text.primary,
      }),
      // OUTLINED
      ...(outlinedVariant && {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        border: `2px solid ${theme.palette.text.primary}`,
      }),
      // SOFT 
    
      ...(softVariant && {
        color: theme.palette.text.secondary,
        backgroundColor: alpha(theme.palette.grey[500], 0.16),
      }),
    }),
  }

  const getColorStyles = (colorKey: keyof Theme['palette']) => ({
    // FILLED
    ...(filledVariant && {
      color: (theme.palette[colorKey] as any)?.contrastText,
      backgroundColor: (theme.palette[colorKey] as any)?.main,
    }),
    // OUTLINED
    
    ...(outlinedVariant && {
      backgroundColor: 'transparent',
      color: (theme.palette[colorKey] as any)?.main,
      border: `2px solid ${(theme.palette[colorKey] as any)?.main}`,
    }),
    // SOFT
    ...(softVariant && {
      color: (theme.palette[colorKey] as any)?.[lightMode ? 'dark' : 'light'],
      backgroundColor: alpha((theme.palette[colorKey] as any)?.main, 0.16),
    }),
  })

  const colorStyle =
    color !== 'default' ? getColorStyles(color as keyof Theme['palette']) : {}

  return {
    height: 24,
    minWidth: 24,
    lineHeight: 0,
    borderRadius: 6,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    textTransform: 'capitalize',
    padding: theme.spacing(0, 0.75),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shorter,
    }),
    ...defaultStyle,
    ...colorStyle,
  }
})
