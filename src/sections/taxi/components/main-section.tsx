import { Container, Grid, Typography } from '@mui/material'

import { types } from '../config-type'

export default function MainSection() {
  return (
    <Container
      className="flex h-full items-center justify-center align-middle md:min-h-[600px]"
      disableGutters={true}
    >
      <div className="pb-[20px] pt-0 md:pb-[150px]">
        <iframe
          className="google-iframe"
          title="demo-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.488286499138!2d100.5748902752039!3d13.749401786642201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f94ff5d3c9b%3A0x2d5cc1514cdb5f97!2sFeels%20Telecom%20Corporation%20..!5e0!3m2!1sth!2sth!4v1706806825520!5m2!1sth!2sth"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          style={{
            border: 0,
            width: '100%',
            height: '500px',
          }}
        />
        <Typography
          className="hidden py-5 text-center !font-bold text-[#00713b] md:block"
          variant="h4"
        >
          เลือกรูปแบบรถ
        </Typography>
        <Grid
          container
          spacing={2}
          className="mt-0 justify-center md:!mt-[10px]"
        >
          {types.map((item) => {
            return (
              <Grid item xs={12} md={3} key={item.id}>
                <div className="relative hidden flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md md:flex">
                  <div className="relative mx-auto my-auto mt-4 flex h-[250px] w-[250px] items-center justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img src={item.icon} alt="" className="object-cover" />
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
                    <p className="block text-center text-sm font-semibold text-gray-500">
                      {item.subTitle}
                    </p>
                    <p className="block text-center text-sm font-normal text-[#00713b]">
                      {item.subTitle2}
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col items-center overflow-hidden border bg-white bg-clip-border shadow-md md:hidden">
                  <Grid container className="flex h-32 items-center">
                    <Grid item xs={6} className="flex justify-center">
                      <img src={item.icon} alt="" className="object-cover" />
                    </Grid>
                    <Grid item xs={6}>
                      <div className="px-4 text-gray-700">
                        <p className="text-xl !font-bold">{item.title}</p>
                        <p className="!font-medium text-gray-500">
                          {item.subTitle}
                        </p>
                        <p className="block text-sm font-normal text-[#00713b]">
                          {item.subTitle2}
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
