/* eslint-disable react-refresh/only-export-components */
import { Props } from '@/utils/global-interface'
import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { forwardRef, memo } from 'react'

import { StyledRootScrollbar, StyledScrollbar } from './styles'

interface ScrollbarProps extends Props {
  children: React.ReactNode
  sx: SxProps<Theme>
}

// ----------------------------------------------------------------------

const Scrollbar = forwardRef(
  ({ children, sx, ...other }: ScrollbarProps, ref) => {
    const userAgent =
      typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

    const mobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      )

    if (mobile) {
      return (
        <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      )
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          sx={sx}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    )
  },
)

export default memo(Scrollbar)
