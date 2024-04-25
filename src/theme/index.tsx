/* eslint-disable @typescript-eslint/no-explicit-any */
import CssBaseline from '@mui/material/CssBaseline'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from '@mui/material/styles'
import * as React from 'react'

import { customShadows } from './custom-shadows'
import { overrides } from './overrides'
import { palette } from './palette'
import { shadows } from './shadows'
import { typography } from './typography'

interface ThemeProviderProps {
  children: React.ReactNode
}

// ----------------------------------------------------------------------

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const memoizedValue: any = React.useMemo(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    [],
  )

  const theme: any = createTheme(memoizedValue)
  theme.components = overrides(theme)

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}

export default ThemeProvider
