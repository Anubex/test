import { useResponsive } from '@/hooks/use-responsive'
import { Box, Typography } from '@mui/material'
import { ReactSVG } from 'react-svg'

export default function ChatSection() {
  const upLg = useResponsive('up', 'lg')

  return (
    <Box
      className="relative overflow-auto px-1 py-[50px] text-center text-2xl font-bold text-white md:px-8 md:text-3xl"
      sx={{
        backgroundImage: `url(/assets/e-service/document/${
          upLg ? 'banner.jpeg' : 'banner-m.png'
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="m-auto w-11/12 md:w-3/4 lg:max-w-3xl">
        <div className="w-92 relative mx-auto flex flex-col rounded-3xl bg-white bg-clip-border text-gray-700 shadow-md md:w-[450px]">
          <div className="p-6">
            <Typography
              variant="h3"
              className="!mb-[10px] block !font-bold text-[#00713b]"
            >
              ยื่นขอเอกสาร
            </Typography>
            {/* <div className="!my-[20px] flex w-full justify-center">
              <ReactSVG src="/assets/e-service/doctor-appointment/maki_doctor.svg" />
            </div> */}
          </div>
          {/* <div className="flex w-full justify-center p-6 pt-0">
            <button className="flex h-[52px] w-[233px] max-w-[233px] items-center justify-center gap-[5px] rounded-[10px] bg-gradient-to-b from-[#28A745] to-[#227041] text-[20px] font-medium !text-white shadow-lg hover:!from-[#28A745]/90 hover:!to-[#227041]/90">
              แชทปรึกษา
            </button>
          </div> */}
        </div>
      </div>
    </Box>
  )
}
