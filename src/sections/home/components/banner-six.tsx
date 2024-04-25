import { EServiceT, services } from '@/sections/e-service/config-service'
import { Button, Container, Grid, Link, MenuList, Typography } from '@mui/material'
import { validate } from 'numeral'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { MdLocalLaundryService } from 'react-icons/md'
import { t } from 'i18next'
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { SideBar } from './sidebar'
import useSideItem from './sidebar-config'

export interface MenuItem {
  title: string
  path: string
}

export default function BannerSix() {
  return (
    <>
      <div className="grid justify-items-center py-[30px]">
        <Typography
          variant="h3"
          className= "text-[36px] font-bold text-[#00713b] "
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
    
      <Container maxWidth='xl' >
        <Grid container spacing={0}>
          <Grid item  xs={3}  className='bg-teal-600'>
      
     <SideBar>

     </SideBar>
        
   
          </Grid>
          <Grid item  xs={9} className='bg-blue-500'>
            <item>Test 9 </item>
          </Grid>
        </Grid>


      </Container>
           
   
    </>
  )
}

  
