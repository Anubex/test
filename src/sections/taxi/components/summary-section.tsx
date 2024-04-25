import { Box, Grid, Typography } from '@mui/material'

export default function SummarySection() {
  return (
    <Box
      className="bottom-0 flex h-[300px] items-center justify-center bg-[#57d173]"
      sx={{
        borderTopRightRadius: '24px',
        borderTopLeftRadius: '24px',
      }}
    >
      <Grid container>
        <Grid item xs={12} className="flex justify-center">
          <Typography variant="h6" className="!font-medium">
            ค่าโดยสารของคุณ
          </Typography>
        </Grid>
        <Grid item xs={12} className="flex justify-center">
          <Typography variant="h3" className="!font-bold">
            150 บาท
          </Typography>
        </Grid>
        <Grid item xs={12} className="hidden justify-center md:flex">
          <button className="mx-2 flex h-[52px] w-[233px] max-w-[233px] items-center justify-center gap-[5px] rounded-[10px] bg-gradient-to-b from-[#f2f2f2] to-[#bcc2be] text-[20px] font-semibold !text-[#00713b] shadow-lg hover:!from-[#f2f2f2]/90 hover:!to-[#bcc2be]/90">
            จองรถล่วงหน้า
          </button>
          <button className="mx-2 flex h-[52px] w-[233px] max-w-[233px] items-center justify-center gap-[5px] rounded-[10px] bg-gradient-to-b from-[#28A745] to-[#227041] text-[20px] font-semibold !text-white shadow-lg hover:!from-[#28A745]/90 hover:!to-[#227041]/90">
            เรียกทันที
          </button>
        </Grid>
        <Grid item xs={12} className="flex justify-center md:hidden">
          <button className="my-2 flex h-[52px] w-[233px] max-w-[233px] items-center justify-center gap-[5px] rounded-[10px] bg-gradient-to-b from-[#f2f2f2] to-[#bcc2be] text-[20px] font-semibold !text-[#00713b] shadow-lg hover:!from-[#f2f2f2]/90 hover:!to-[#bcc2be]/90">
            จองรถล่วงหน้า
          </button>
        </Grid>
        <Grid item xs={12} className="flex justify-center md:hidden">
          <button className="my-2 flex h-[52px] w-[233px] max-w-[233px] items-center justify-center gap-[5px] rounded-[10px] bg-gradient-to-b from-[#28A745] to-[#227041] text-[20px] font-semibold !text-white shadow-lg hover:!from-[#28A745]/90 hover:!to-[#227041]/90">
            เรียกทันที
          </button>
        </Grid>
      </Grid>
    </Box>
  )
}
