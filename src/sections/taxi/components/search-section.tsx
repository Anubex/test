import { useResponsive } from '@/hooks/use-responsive'
import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
// import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { Box, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa6'

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#28A745',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#28A745',
    },
  },
})

export default function SearchSection() {
  const upLg = useResponsive('up', 'lg')

  return (
    <Box
      className="relative overflow-auto px-1 py-[50px] text-center text-2xl font-bold text-white md:px-8 md:text-3xl"
      sx={{
        backgroundImage: `url(/assets/e-service/taxi/${
          upLg ? 'banner.png' : 'banner-m.png'
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
              className="!mb-[50px] block !font-bold text-[#00713b]"
            >
              เรียกรถ
            </Typography>
            <div className="flex flex-col">
              <Typography
                variant="h5"
                className="!mb-[10px] block !font-bold text-[#00713b]"
              >
                เลือกต้นทางและปลายทาง
              </Typography>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem className="flex h-full items-center">
                  <TimelineSeparator className="flex h-full items-center">
                    <TimelineDot
                      sx={{
                        background: '#50d06f',
                      }}
                    >
                      <FaCircle size={16} />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent className="flex items-center">
                    <CustomTextField
                      id="from-location"
                      label="ต้นทาง"
                      variant="outlined"
                      className="w-full"
                    />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="!min-h-[20px]">
                  <TimelineSeparator>
                    <TimelineConnector className="ml-3" />
                  </TimelineSeparator>
                </TimelineItem>
                <TimelineItem className="flex h-full items-center">
                  <TimelineSeparator className="flex h-full items-center">
                    {/* <TimelineDot
                      sx={{
                        background: 'transparent',
                        boxShadow: 'none',
                      }}
                    > */}
                    <FaMapMarkerAlt size={32} className="text-[#50d06f]" />
                    {/* </TimelineDot> */}
                  </TimelineSeparator>
                  <TimelineContent className="flex w-full items-center">
                    <CustomTextField
                      id="to-location"
                      label="ปลายทาง"
                      variant="outlined"
                      className="w-full"
                    />
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
