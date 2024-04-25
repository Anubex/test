import { Container, Grid, Typography } from '@mui/material'
import { ReactSVG } from 'react-svg'

import { items } from '../config-item'

export default function MainSection() {
  return (
    <Container
      className="flex min-h-[600px] items-center justify-center align-middle"
      disableGutters={true}
    >
      <div className="py-[60px] md:py-[100px]">
        <Typography
          className="text-center !font-black text-[#00713b]"
          variant="h4"
        >
          ข่าวสาร
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
                      >
                        {item.title}
                      </Typography>
                    </div>
                    <p className="block text-center text-sm font-semibold text-gray-500">
                      {item.subTitle}
                    </p>
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
                        <p className="!font-medium text-gray-500">
                          {item.subTitle}
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </Container>
  )
}
