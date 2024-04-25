/* eslint-disable @typescript-eslint/no-explicit-any */
import { useScrollToTop } from '@/hooks/use-scroll-to-top'
import Router from '@/routes'
import '@/styles/index.scss'
import ThemeProvider from '@/theme'
import { Box } from '@mui/material'
import * as dayjs from 'dayjs'
import 'dayjs/locale/th'
import utc from 'dayjs/plugin/utc'
import { useTranslation } from 'react-i18next'
import { MdOutlineClose } from 'react-icons/md'
import { ToastContainer } from 'react-toastify'

type CloseButtonProps = {
  closeToast?: () => void
}

// ----------------------------------------------------------------------

const CloseButton: React.FC<CloseButtonProps> = ({ closeToast }) => (
  <Box sx={{ marginY: 'auto', height: '100%' }} onClick={closeToast}>
    <MdOutlineClose />
  </Box>
)

const ToastCloseButton = (props: Omit<CloseButtonProps, 'closeToast'>) => (
  <CloseButton {...(props as any)} />
)

export default function App() {
  const { i18n } = useTranslation()

  useScrollToTop()

  dayjs.extend(utc)
  dayjs.locale(i18n.language)

  return (
    <ThemeProvider>
      <ToastContainer closeButton={<ToastCloseButton />} />
      <Router />
    </ThemeProvider>
  )
}
