import { Theme, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

type QueryType = 'up' | 'down' | 'between' | 'only'

type Breakpoint = keyof Theme['breakpoints']['values']

// ----------------------------------------------------------------------

export function useResponsive(
  query: QueryType,
  start: Breakpoint,
  end?: Breakpoint,
): boolean {
  const theme = useTheme()

  const mediaUp = useMediaQuery(theme.breakpoints.up(start))

  const mediaDown = useMediaQuery(theme.breakpoints.down(start))

  const mediaBetween = end
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useMediaQuery(theme.breakpoints.between(start, end))
    : false

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start))

  if (query === 'up') {
    return mediaUp
  }

  if (query === 'down') {
    return mediaDown
  }

  if (query === 'between') {
    return mediaBetween
  }

  return mediaOnly
}

// ----------------------------------------------------------------------

export function useWidth(): Breakpoint {
  const theme = useTheme()

  const keys = [...theme.breakpoints.keys].reverse() as Breakpoint[]

  return (
    keys.reduce((output: Breakpoint | null, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))

      return !output && matches ? key : output
    }, null) || 'xs'
  )
}
