import { useResponsive } from '@/hooks/use-responsive'
import { Container, Grid, Typography } from '@mui/material'
import { ReactSVG } from 'react-svg'

import { items } from '../config-item'

export default function MainSection() {
  const upLg = useResponsive('up', 'lg')

  return (
    <Container
      className="flex min-h-[600px] items-center justify-center align-middle"
      disableGutters={true}
    >
      <div className="py-[60px] md:py-[100px]">
        <Typography
          className="text-center !font-black text-[#00713b]"
          variant="h4"
          // letterSpacing={1}
          // sx={{
          //   textShadow:
          //     '-.5px -.5px 0 #00713b, .5px -.5px 0 #00713b, -.5px .5px 0 #00713b, .5px .5px 0 #00713b;',
          // }}
        >
          เลือกประเภทประกันออนไลน์
        </Typography>

        <Grid container spacing={2} className="!mt-[10px] justify-center">
          {items.map((item) => {
            return (
              <Grid item xs={12} md={3} key={item.id}>
                <div className="relative hidden flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md md:flex">
                  <div className="relative mx-auto my-auto mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <ReactSVG
                      src={item.icon}
                      className="h-full w-full object-cover"
                      beforeInjection={(svg) => {
                        svg.setAttribute('style', 'min-height: 200px')
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-center">
                      <Typography
                        variant="h5"
                        className="block font-extrabold"
                        // letterSpacing={2}
                        // sx={{
                        //   textShadow:
                        //     '-.25px -.25px 0 #000, .25px -.25px 0 #000, -.25px .25px 0 #000, .25px .25px 0 #000;',
                        // }}
                      >
                        {item.title}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col items-center overflow-hidden border bg-white bg-clip-border shadow-md md:hidden">
                  <Grid container className="flex h-32 items-center">
                    <Grid item xs={4} className="flex justify-center">
                      <ReactSVG
                        src={item.icon}
                        className="object-cover"
                        beforeInjection={(svg) => {
                          svg.setAttribute('style', 'height: 6rem')
                        }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <div className="px-4 text-gray-700">
                        <p className="text-xl !font-bold">{item.title}</p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            )
          })}
          <Grid item xs={12} className="hidden md:block">
            <div className="flex overflow-x-auto">
              <div className="flex w-full flex-shrink-0 flex-col rounded-md">
                <div className="hide-with-banner relative">
                  <div className="flex h-full w-full flex-col px-[30px] py-[30px] md:px-[64px] md:py-[64px]">
                    <div className="z-10 flex-col items-start justify-center px-6">
                      <div className="z-9 absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-b from-white to-[#c6f8d8]" />{' '}
                      <img
                        src={`/assets/e-service/insurance/${
                          upLg ? 'test.png' : 'test-m.png'
                        }`}
                        className="absolute bottom-0 left-0 h-full w-full overflow-hidden rounded-md object-cover"
                        alt="insurance-1-image-transparent"
                      />
                      <div className="relative z-10 flex h-[180px] justify-end">
                        {/* <div>
                          <Typography className="mb-[14px] w-[85%] max-w-full text-center text-xl font-bold md:w-[85%] md:text-3xl md:leading-[42px]">
                            ทำประกันกับเราเราวันนี้
                          </Typography>
                        </div> */}
                        <div className="mt-[150px] flex w-[64%] items-center justify-center gap-4 md:w-[40%] 2xl:gap-10">
                          <button className="flex h-[52px] w-[233px] max-w-[233px] items-center justify-center gap-[5px] rounded-[10px] bg-gradient-to-b from-[#28A745] to-[#227041] text-[20px] font-medium !text-white shadow-lg hover:!from-[#28A745]/90 hover:!to-[#227041]/90">
                            คลิกเลย
                          </button>
                        </div>
                      </div>
                      {/* <img
                      src={serviceData.image}
                      className="absolute bottom-0 left-0 h-full w-full overflow-hidden rounded-md object-cover opacity-70"
                      alt={`${serviceData.name}-image-transparent`}
                    /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            className="!mb-[50px] !mt-[150px] !pl-8 !pr-4 md:!mb-0 md:!mt-0 md:!pl-4 md:!pr-0"
          >
            <img
              className="mt-2 w-full rounded-2xl border-[.75px] border-gray-400 shadow-xl"
              src="/assets/e-service/insurance/sub-banner-2.png"
              alt="insurance-1-image-transparent"
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
