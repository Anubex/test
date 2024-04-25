import { Card, CardMedia, Paper, SxProps, Theme } from '@mui/material'
import React, { FC } from 'react'
import { MdOutlineRollerSkating } from 'react-icons/md'
import Carousel from 'react-material-ui-carousel'

export type CarouselItem = {
  Name: string
  Image: string
  sx?: SxProps<Theme>
}

interface BannerProps {
  item: CarouselItem
}

const Banner: FC<BannerProps> = React.memo(({ item }) => (
  <Paper
    sx={{
      height: 500,
    }}
  >
    <Card
      sx={{
        height: '100%',
        borderRadius: 0,
      }}
    >
      <CardMedia
        component="img"
        title={item.Name}
        image={item.Image}
        sx={{
          ...item?.sx,
          height: '100%',
        }}
      />
    </Card>
  </Paper>
))

interface CarouselSettingsT {
  autoPlay?: boolean
  animation?: 'fade' | 'slide'
  indicators?: boolean
  duration?: number
  navButtonsAlwaysVisible?: boolean
  navButtonsAlwaysInvisible?: boolean
  fullHeightHover?: boolean
  cycleNavigation?: boolean
  swipe?: boolean
}

interface CarouselProps {
  settings?: CarouselSettingsT
  items: CarouselItem[]
}

const defaultSettings: CarouselSettingsT = {
  autoPlay: true,
  animation: 'slide',
  indicators: true,
  duration: 500,
  navButtonsAlwaysVisible: true,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: true,
}

const CarouselComponents: FC<CarouselProps> = ({
  settings = defaultSettings,
  items,
}) => (
  <Carousel
    activeIndicatorIconButtonProps={{
      style: {
        height: 12,
        width: 30,
        backgroundColor: '#00781E',
        borderRadius: 8,
        color: '#00781E',
      },
    }}
    indicatorContainerProps={{
      style: {
        position: 'absolute',
        bottom: 10,
        zIndex: 2,
      },
    }}
    navButtonsProps={{
      style: {
        color: 'black',
        backgroundColor: 'white',
      },
    }}
    {...settings}
    height={500}
  >
    {items.map((item, index) => (
      <Banner item={item} key={index} />
    ))}
  </Carousel>
)

export default CarouselComponents
