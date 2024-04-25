import { Button, Link, Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'

import { EServiceT, services } from './config-service'

export default function EServiceView() {
  return (
    <>
      <div className="bg-white" id="e-service">
        <div className="relative">
          <img
            className="hidden w-full md:block"
            src="/assets/banners/e-service-banner.png"
            alt="activate-sim-banner"
          />
          <img
            className="block w-full md:hidden"
            src="/assets/banners/e-service-banner-m.png"
            alt="activate-sim-banner-mobile"
          />
          <div className="absolute left-[50%] top-[50%] hidden -translate-x-[50%] -translate-y-[50%] md:left-[150px] md:block lg:left-[350px]">
            <Typography
              variant="h3"
              className="font-blod text-center text-[52px] text-white"
              letterSpacing={3}
              sx={{
                textShadow:
                  '-.5px -.5px 0 #fff, .5px -.5px 0 #fff, -.5px .5px 0 #fff, .5px .5px 0 #fff;',
              }}
            >
              E-Service
            </Typography>
            <Typography
              variant="h5"
              className="text-center text-[16px] text-white"
            >
              บริการครบครันทันใจ
            </Typography>
            <Typography
              variant="h5"
              className="text-center text-[16px] text-white"
            >
              สะดวกง่ายแค่ปลายนิ้ว
            </Typography>
          </div>
          <div className="absolute left-[50%] top-[50px] block -translate-x-[50%] md:hidden">
            <Typography
              variant="h3"
              className="font-blod text-center text-[32px] text-white"
              letterSpacing={3}
              sx={{
                textShadow:
                  '-.5px -.5px 0 #fff, .5px -.5px 0 #fff, -.5px .5px 0 #fff, .5px .5px 0 #fff;',
              }}
            >
              E-Service
            </Typography>
            <Typography
              variant="h5"
              className="text-center text-[16px] text-white"
            >
              บริการครบครันทันใจ
            </Typography>
            <Typography
              variant="h5"
              className="text-center text-[16px] text-white"
            >
              สะดวกง่ายแค่ปลายนิ้ว
            </Typography>
          </div>
        </div>
        <div className="grid justify-items-center py-[30px]">
          <Typography
            variant="h3"
            className="text-[36px] font-bold text-[#00713b] "
            letterSpacing={3}
            sx={{
              textShadow:
                '-.5px -.5px 0 #00713b, .5px -.5px 0 #00713b, -.5px .5px 0 #00713b, .5px .5px 0 #00713b;',
            }}
          >
            E-Service
          </Typography>
          <Typography variant="body1">
            บริการครบครันทันใจ สะดวกง่ายแค่ปลายนิ้ว
          </Typography>
        </div>
        <div className="container mx-auto pb-[30px]">
          <div className="flex gap-8 overflow-x-auto p-4 md:grid md:grid-cols-2 md:gap-8 md:whitespace-normal md:p-0">
            {services.map((serviceData: EServiceT) => (
              <div
                className="e-service-card flex flex-shrink-0 flex-col rounded-md"
                key={`${serviceData.name}-key`}
              >
                <div className="hide-with-banner relative">
                  <div className="flex h-full w-full flex-col px-[30px] py-[30px] md:px-[64px] md:py-[64px]">
                    <div className="z-10 flex-col items-start justify-center px-6">
                      <div className="z-9 absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-b from-white to-[#c6f8d8]" />{' '}
                      <div className="relative z-10">
                        <ReactMarkdown
                          className={
                            serviceData?.textClassName ??
                            'prose mb-[14px] w-[64%] max-w-full text-center text-xl font-bold md:w-[56%] md:text-3xl md:leading-[42px]'
                          }
                        >
                          {serviceData.name}
                        </ReactMarkdown>
                        <div
                          className={
                            serviceData?.buttonClassName ??
                            'mt-[36px] flex w-[64%] items-center justify-center gap-4 md:w-[56%] 2xl:gap-10'
                          }
                        >
                          <Link
                            href={serviceData?.to}
                            component={Button}
                            underline="none"
                            className="flex h-[52px] w-[233px] max-w-[233px] items-center justify-center gap-[5px] rounded-[10px] bg-gradient-to-b from-[#28A745] to-[#227041] text-[20px] font-medium !text-white shadow-lg hover:!from-[#28A745]/90 hover:!to-[#227041]/90"
                          >
                            {serviceData.button}
                          </Link>
                        </div>
                      </div>
                      <img
                        src={serviceData.image}
                        className="absolute bottom-0 left-0 h-full w-full overflow-hidden rounded-md object-cover opacity-70"
                        alt={`${serviceData.name}-image-transparent`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              // <div
              //   className="e-service-card flex flex-shrink-0 flex-col rounded-md bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
              //   style={{
              //     backgroundImage: `url(${serviceData.image})`,
              //   }}
              // >
              //   <div className="w-full text-center">
              //     <ReactMarkdown className="prose mb-[14px] w-[64%] max-w-full text-xl font-bold md:text-3xl md:leading-[42px] lg:w-[46%]">
              //       {serviceData.name}
              //     </ReactMarkdown>
              //     <div className="mt-[36px] flex w-[64%] items-center justify-center gap-4 lg:w-[46%] 2xl:gap-10">
              //       <button className="flex h-[52px] w-[233px] max-w-[233px] items-center justify-center gap-[5px] rounded-[10px] bg-gradient-to-b from-[#28A745] to-[#227041] text-[20px] font-medium !text-white shadow-lg hover:!from-[#28A745]/90 hover:!to-[#227041]/90">
              //         {serviceData.button}
              //       </button>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
