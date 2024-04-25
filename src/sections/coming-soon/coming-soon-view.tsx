import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

// ----------------------------------------------------------------------

export default function ComingSoonView() {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <Box
          sx={{
            py: 6,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            {t('coming-soon.title')}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {t('coming-soon.sub-title')}
          </Typography>
          <Box
            component="img"
            src="/assets/illustrations/coming-soon.svg"
            sx={{
              mx: 'auto',
              height: 450,
              my: { xs: 1, sm: 5 },
            }}
          />
        </Box>
      </Container>
    </>
  )
}
