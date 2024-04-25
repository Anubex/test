/* eslint-disable @typescript-eslint/no-explicit-any */
import { useResponsive } from '@/hooks/use-responsive'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Scrollbar } from 'swiper/modules'
import { Swiper } from 'swiper/react'

interface SwiperSliderT {
  children: React.ReactNode
  className?: string
}

export default function SwiperSlider({ children, className }: SwiperSliderT) {
  const upLg = useResponsive('up', 'lg')

  return (
    <>
      <Swiper
        navigation
        modules={[Navigation, Scrollbar, A11y]}
        style={{
          cursor: 'pointer',
        }}
        loop={!upLg}
        centeredSlides={false}
        centerInsufficientSlides={true}
        slidesPerView={4}
        spaceBetween={0}
        autoplay={false}
        scrollbar={{ draggable: true, hide: true }}
        className={className}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 25,
            autoplay: true,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 25,
            autoplay: true,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 25,
            autoplay: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
            autoplay: true,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
            autoplay: true,
          },
        }}
      >
        {children}
      </Swiper>
    </>
  )
}
