import { Button, Link, Typography } from '@mui/material'
export default function IntroBanner() {
  return (
    <>
      <div className="relative">
        <img
          className="hidden w-full md:block"
          src="/assets/banners/menu.png"
          alt="activate-sim-banner"
        />
        <img
          className="block w-full md:hidden"
          src="/assets/banners/menu-m.png.jpg"
          alt="activate-sim-banner-mobile"
        />
        
       
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
        </Typography>
        
        <Typography variant="body1">
          
          <marquee>
          ยินดีต้อนรับสู่เว็บไซต์เบอร์ดี เบอร์สวย เบอร์มงคล ซิมเบอร์สวย ซิมเบอร์มงคล ทำนายเบอร์โทรศัพท์ ซิมการ์ดเบอร์โทรศัพท์มือถือ
          </marquee>
        </Typography>
        
      </div> 
        
      <div className=' h-screen bg-blue-200
              flex justify-center items-center w-3/4 h-1/4 absolute top-50 right-0'>
                
              <label className='font-bold text-3xl'>
                ค้นหาเบอร์
                
                <input type='text' maxLength='1' className='h-12 w-10 ml-8 drop-shadow-lg text-center '/> 
                <input type='text' maxLength='1' className='h-12 w-10 ml-3 drop-shadow-lg text-center'/>
                <input type='text' maxLength='1' className='h-12 w-10 ml-3 drop-shadow-lg text-center'/>
                <input type='text' maxLength='1' className='h-12 w-10 ml-6 drop-shadow-lg text-center '/>
                <input type='text' maxLength='1' className='h-12 w-10 ml-3 drop-shadow-lg text-center'/>
                <input type='text' maxLength='1' className='h-12 w-10 ml-3 drop-shadow-lg text-center'/>
                <input type='text' maxLength='1' className='h-12 w-10 ml-3 drop-shadow-lg text-center'/>
                <input type='text' maxLength='1' className='h-12 w-10 ml-3 drop-shadow-lg text-center'/>
                <input type='text' maxLength='1' className='h-12 w-10 ml-3 drop-shadow-lg text-center'/>
                <input type='text' maxLength='1' className='h-12 w-10 ml-3 mr-5 drop-shadow-lg text-center'/>

                <button class="bg-red-500 px-3 text-3xl py-3 uppercase rounded-xl text-white drop-shadow-lg  button">ค้นหา</button>
                <br/><br/>
                <label className='text-3xl font-normal ml-80'>เลือกเลขที่ต้องการ</label>
              </label>
                
           </div>
           <div className=' h-screen bg-teal-600
               w-1/6 h-100 absolute insert-y-0 left-0'>

                <br/>
                
<button class="font-bold text-2xl button">หมวดหมู่เบอร์มงคล</button> <br/><br/>
<button class="text-white text-xl drop-shadow-lg button">เบอร์เลข 3 คู่</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">เบอร์เลข 4 คู่</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">เบอร์ตอง</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">เบอร์โฟว์</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">เบอร์ไฟร์</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">เบอร์เรียง</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">เบอร์รับโชค 789</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">เบอร์เลขศาสตร์จีน 168</button> <br/> <br/> 

<br/>
<div className=' h-screen bg-white
              flex justify-center w-128 h-7'>
                </div>  
                <br/>
<button class="font-bold text-2xl button">หมวดหมู่ตามอาชีพ</button> <br/> <br/>
<button class="text-white text-xl drop-shadow-lg button">ธุรกิจส่วนตัว</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">ค้าขาย</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">ข้าราชการ</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">นักเรียน นักศึกษา</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">สุขภาพ</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">อำนาจ บารมี</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">ความสำเร็จ</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">นักลงทุน</button> <br/>
<button class="text-white text-xl drop-shadow-lg button">เซลล์ นักขาย</button> <br/>







              </div>
          
       
           <div className=' h-screen bg-white'>
               
                          
           </div>
           
    </>
    
  )
}

