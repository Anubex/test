import * as notFoundData from '@/lottie/404.json'
import { RouterLink } from '@/routes/components'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import Lottie from 'react-lottie-player'

// ----------------------------------------------------------------------

export default function NotFoundView() {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '80vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            {t('page-not-found.title')}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {t('page-not-found.subtitle')}
          </Typography>
          {/* <Box
            component="img"
            src="/assets/illustrations/404.gif"
            sx={{
              mx: 'auto',
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          /> */}
          <Lottie
            loop
            animationData={notFoundData}
            play
            style={{ width: 400, height: 400 }}
          />
          <Button
            href="/"
            size="large"
            variant="contained"
            component={RouterLink}
            className="hover:from-[rgb(40, 167, 69)] hover:to-[rgb(34, 112, 65)] bg-gradient-to-b from-[#28A745] to-[#227041]"
          >
            {t('page-not-found.btn-home')}
          </Button>
        </Box>
      </Container>
    </>
  )
}
