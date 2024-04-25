import { RouterLink } from '@/routes/components'
import { Avatar, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Result() {
  return (
    <>
      <div className="mt-[66px] flex items-center justify-center py-[100px]">
        <div className="grid justify-items-center">
          <h1 className="text-center text-[36px] font-bold text-[#28A745]">
            ลงทะเบียนซิมสำเร็จ!
          </h1>
          <Avatar sx={{ bgcolor: '#97eab5', width: 261, height: 261 }}>
            <img
              src="/assets/images/success-bird.png"
              className="mt-[25px] w-full max-w-[261px]"
              alt="feels-mascot"
            />
          </Avatar>
          <p className="my-[25px] text-center text-[14px] font-medium text-black">
            ลงทะเบียนข้อมูลของคุณเสร็จสิ้น ขอบคุณที่ใช้ผลิตภัณฑ์ของเรา <br />
            หากมีปัญหาเกี่ยวกับการใช้งาน ติดต่อเราได้ที่{' '}
            <Link to="tel:0976980279" className="hover:text-[#28A745]">
              097-698-0279
            </Link>
          </p>
          <div className="flex w-full items-center justify-center py-[25px] md:py-[50px]">
            <Button
              component={RouterLink}
              href="/"
              variant="contained"
              className={`my-[25px] flex !h-[52px] w-[233px] items-center rounded-[10px] !border-0 !bg-gradient-to-b !from-[#28A745] !to-[#227041] !text-[16px] font-bold !text-white shadow-lg`}
            >
              ตกลง
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
