// import Carousel from '@/components/carousel'
import SwiperSlider from '@/components/swiper-slider/swiper-slider'
import { Box, Paper, Typography } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'

// import { BannerItems as items } from './config-banner'
import { PackageT, packages } from './config-package'
import { PageT } from './package-view'

interface TIntro extends PageT {
  setPrice: Dispatch<SetStateAction<number>>
  setVat: Dispatch<SetStateAction<number>>
  setRefCode: Dispatch<SetStateAction<string>>
}

export default function Intro({
  onNext,
  setPrice,
  setVat,
  setRefCode,
}: TIntro) {
  const { t } = useTranslation()

  const btnNext = (selected: PackageT) => {
    if (onNext) {
      setPrice(selected.price)
      setVat(selected.vat)
      setRefCode(selected.refCode)
      onNext('summary')
    }
  }

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
                    height: { lg: '500px', xs: '500px' },
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
                      height: { lg: '425px', xs: '425px' },
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
                    <Box
                      component={Link}
                      className="mt-[25px] flex h-[40px] w-full items-center justify-center gap-[5px] rounded-[43px] bg-gradient-to-b from-[#00781E] to-[#52CF6F] text-[18px] font-bold text-white shadow-lg"
                      onClick={() => btnNext(packageData)}
                    >
                      {t('package-page.step1.btn-buy-now')}
                      <img
                        src="/assets/images/icon-cart.svg"
                        className="w-[23px]"
                        alt="cart-icon"
                      />
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </SwiperSlide>
          )
        })}
      </>
    )
  }

  if (onNext) {
    return (
      <>
        {/* <Carousel items={items} /> */}
        <div className="flex items-center justify-center pt-[25px]">
          <div>
            <h1 className="text-center text-[36px] font-bold text-[#28A745]">
              {t('package-page.step1.title')}
            </h1>
            {/* <div className="my-[50px]">
            <p className="text-[20px] font-bold text-center text-[#28A745]">
              แพ็กเกจรูปแบบที่ 1
            </p>
          </div> */}
          </div>
        </div>
        <div className="mb-[250px] mt-[50px]">
          <SwiperSlider
            children={PackageItem(packages)}
            className="md:max-w-[1500px]"
          />
        </div>
      </>
    )
  }
}
