import SwiperSlider from '@/components/swiper-slider'
import { PackageT } from '@/sections/package'
import { packages } from '@/sections/package/config-package'
import { Box, Button, Paper, Typography } from '@mui/material'
// import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
// import MuiAccordionDetails from '@mui/material/AccordionDetails'
// import MuiAccordionSummary, {
//   AccordionSummaryProps,
// } from '@mui/material/AccordionSummary'
// import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// import { MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

export default function BannerFour() {
  const { t } = useTranslation()
  // const [expanded, setExpanded] = useState<string | false>('panel1')

  // const handleChange =
  //   (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
  //     setExpanded(newExpanded ? panel : false)
  //   }

  // const Accordion = styled((props: AccordionProps) => (
  //   <MuiAccordion disableGutters elevation={0} square {...props} />
  // ))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  //   '&:not(:last-child)': {
  //     borderBottom: 0,
  //   },
  //   '&::before': {
  //     display: 'none',
  //   },
  // }))

  // const AccordionSummary = styled((props: AccordionSummaryProps) => (
  //   <MuiAccordionSummary
  //     expandIcon={<MdArrowForwardIos sx={{ fontSize: '0.9rem' }} />}
  //     {...props}
  //   />
  // ))(({ theme }) => ({
  //   backgroundColor:
  //     theme.palette.mode === 'dark'
  //       ? 'rgba(255, 255, 255, .05)'
  //       : 'rgba(0, 0, 0, .03)',
  //   flexDirection: 'row-reverse',
  //   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
  //     transform: 'rotate(90deg)',
  //   },
  //   '& .MuiAccordionSummary-content': {
  //     marginLeft: theme.spacing(1),
  //   },
  // }))

  // const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  // }))

  const PackageItem = (packages: PackageT[]) => {
    return (
      <>
        {packages.map((packageData: PackageT) => {
          return (
            <SwiperSlide key={packageData.name}>
              <Box sx={{ width: '100%', position: 'relative' }}>
                <Box
                  sx={{
                    mx: 3,
                    mb: 3,
                    height: { lg: '400px', xs: '500px' },
                    boxShadow: 3,
                    borderRadius: 10,
                  }}
                >
                  <Paper
                    elevation={0}
                    square
                    sx={{
                      backgroundColor: '#28A745',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      p: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      height: '81px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        color: 'white',
                      }}
                    >
                      {packageData.name}
                    </Typography>
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{
                        fontWeight: 'extrabold',
                        fontSize: '32px',
                        color: 'white',
                      }}
                    >
                      {packageData.price}.-
                    </Typography>
                  </Paper>
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: 'transparent',
                      backgroundImage:
                        'linear-gradient(to bottom, #fff, #C4F4CF)',
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      p: 2,
                      height: { lg: '325px', xs: '425px' },
                    }}
                    className="mx-auto grid"
                  >
                    <div
                      className="ml-[50%] flex h-[47px] w-full max-w-[166px] -translate-x-[50%] items-center justify-center rounded-[25px] bg-white text-[20px] font-bold text-black"
                      style={{
                        boxShadow:
                          '-1px 1px 13px 0px rgba(19, 36, 29, 0.34) inset',
                      }}
                    >
                      {packageData.data?.speed}
                    </div>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: 'black', textAlign: 'center', mt: 3 }}
                    >
                      {packageData.data?.volume}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'black', textAlign: 'center', mt: 3 }}
                    >
                      {packageData.description}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/package?id=${packageData.id}`}
                      sx={{
                        mt: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        color: 'white',
                        alignItems: 'center',
                        bgcolor: (theme) => theme.palette.primary.main,
                        backgroundImage:
                          'linear-gradient(to bottom, #00781E, #52CF6F)',
                        borderRadius: '43px',
                        height: '40px',
                        width: '100%',
                        boxShadow: 3,
                        textTransform: 'none',
                      }}
                      className="!cursor-pointer"
                    >
                      {t('home-page.four.btn-buy-now')}
                      <Box
                        component="img"
                        src="/assets/images/icon-cart.svg"
                        sx={{ width: '23px' }}
                        alt="cart-icon"
                      />
                    </Button>
                  </Paper>
                </Box>
              </Box>
            </SwiperSlide>
          )
        })}
      </>
    )
  }
  return (
    <>
      <div className="relative w-full bg-gradient-to-b from-[rgba(128,221,149,0.42)] via-white to-[rgba(109,215,133,0.33)]">
        <div className="mx-auto  flex max-w-screen-xl flex-wrap items-center justify-between pb-[50px] md:pb-0">
          {/* <div className="block w-full pt-[25px] md:flex">
            <div className="flex h-auto basis-full items-center justify-center md:basis-6/12">
              <div>
                <p className="text-center text-[16px] font-medium text-[#00781E] md:text-[38px]">
                  {t('home-page.four.title')}
                </p>
                <p className="text-center text-[20px] font-bold text-[#00781E] md:text-[38px]">
                  {t('home-page.four.subtitle')}
                </p>
              </div>
            </div>
            <div className="basis-full md:basis-6/12">
              <img
                src="/assets/images/package-banner.png"
                className="w-full"
                alt="home-package-banner"
              />
            </div>
          </div> */}

          <div className="w-full">
            <h1 className="my-[50px] text-center text-[36px] font-bold text-[#00781E] md:text-[64px]">
              {t('home-page.four.package-title')}
            </h1>

            <div>
              <SwiperSlider children={PackageItem(packages)} />
            </div>
          </div>

          {/* <div className="w-full">
            <h1 className="my-[50px] text-center text-[36px] font-bold text-[#00781E] md:text-[64px]">
              {t('home-page.four.q-and-a-title')}
            </h1>

            <div className="mb-[50px]">
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{t('home-page.four.q-1')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t('home-page.four.a-1')}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>{t('home-page.four.q-2')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t('home-page.four.a-2')}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>{t('home-page.four.q-3')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t('home-page.four.a-3')}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
