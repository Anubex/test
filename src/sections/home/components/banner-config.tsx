// import { useMemo, useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import { Link } from 'react-router-dom'
// import groupMenuItem from './banner-six'


// export interface ItemT {
//     path: string
//     title: string
//   }
// export function BannerConfig() {
//     const groupMenu = groupMenuItem ()
 


//     const handleClick = (path: string) => {
//         setOpenMenu(false)
//         const currentPath = window.location.pathname
//         if (currentPath === path) {
//           window.location.reload()
//         }
//       }
//       return (

//         <nav className="fixed start-0 left-0 z-20 h-full w-[256px] bg-gradient-to-b from-[#003B34] to-[#00A18E] shadow-lg shadow-[#00000036] md:shadow-transparent">
//         <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
//                       <Link to ='/' className="flex items-center space-x-3 rtl:space-x-reverse" >
//                       </Link>
//                       <ul className='mt-4 flex flex-col text-left rounded-lg bg-transparent p-4 font-bold md:mt-0 md:flex-col md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse'>
//                           {menuItems.map((item : ItemT)=>{
//                               return(
//                                   <li key={item.title}>
//                                   <Link
//                                     to={item.path}
//                                     className="block px-3 py-2 text-[18px] font-[700] text-white md:p-0 "
//                                     aria-current="page"
//                                     onClick={() => handleClick(item.path)}
//                                   >
//                                     {item.title}
//                                   </Link>
                                  
//                                 </li>
  
                                
//                               )
//                           }
//                           )}
//                       </ul>
//                   </div>
//         </nav> 


//       )
    
// }