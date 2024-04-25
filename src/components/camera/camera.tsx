/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { CameraType, Camera as ReactCamera } from 'react-camera-pro'
import { HiOutlineRefresh } from 'react-icons/hi'

interface ICameraProps {
  value: any
  cameraRef: React.RefObject<CameraType>
  horizontal?: boolean
  onTakePhoto?: (image: string, fileName: string) => void
  onNewTake: () => void
  frame?: React.ReactNode
  isLoading?: boolean
}

const Camera: React.FC<ICameraProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    cameraRef,
    horizontal,
    onTakePhoto,
    onNewTake,
    frame,
    isLoading,
    value,
  } = props
  const image = value
  const [numberOfCameras, setNumberOfCameras] = useState(0)
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([])
  const [activeDeviceId, setActiveDeviceId] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const videoDevices = devices.filter((i) => i.kind == 'videoinput')
      setDevices(videoDevices)
    })()
  })

  useEffect(() => {
    const videoDevices = devices.filter((i) => i.kind == 'videoinput')
    if (videoDevices.length > 0 && !activeDeviceId) {
      console.log('test')
      setActiveDeviceId(videoDevices[0].deviceId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devices])

  const handleTakePhoto = () => {
    if (cameraRef.current) {
      const image = cameraRef.current.takePhoto()
      onTakePhoto &&
        onTakePhoto(image, `${dayjs().format('YYYYMMDDHHmmss')}.jpg`)
    }
  }

  return (
    <>
      <div
        className={`relative [&>div>div>div]:absolute [&>div>div>div]:z-10 [&>div>div>div]:bg-[#00000040] [&>div>div>div]:text-white ${
          numberOfCameras >= 1 ? '[&>div>div>div]:hidden' : ''
        }`}
      >
        {frame && !image && frame}
        {!image && (
          <div
            className="absolute bottom-4 right-4 z-10 rounded-full bg-[#00000080] p-2"
            onClick={() => cameraRef.current?.switchCamera()}
          >
            <HiOutlineRefresh className="text-xl text-white" />
          </div>
        )}
        {!image ? (
          <ReactCamera
            ref={cameraRef}
            videoSourceDeviceId={activeDeviceId}
            numberOfCamerasCallback={(i) => setNumberOfCameras(i)}
            errorMessages={{
              noCameraAccessible:
                'ไม่พบกล้องที่สามารถใช้งานได้ กรุณาตรวจสอบกล้องหรือทดลองใช้ Browser อื่นในการใช้งาน',
              permissionDenied:
                'Permission denied. Please refresh and give camera permission.',
              switchCamera:
                'It is not possible to switch camera to different one because there is only one video device accessible.',
              canvas: 'Canvas is not supported.',
            }}
            facingMode="environment"
            aspectRatio={horizontal ? 4 / 3 : 3 / 4}
          />
        ) : (
          <img src={image} alt="capture" />
        )}
      </div>
      <Box sx={{ textAlign: 'left', width: '100%' }} className="mt-[25px]">
        <FormControl
          fullWidth
          variant="outlined"
          size="small"
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                borderColor: '#4CAF50',
              },
          }}
        >
          <Typography className="!mb-3">ตัวเลือกกล้อง</Typography>
          <Select
            labelId="camera-selector-label"
            id="camera-selector"
            onChange={(event: SelectChangeEvent) => {
              setActiveDeviceId(event.target.value)
            }}
            value={activeDeviceId}
          >
            {devices.map((device) => (
              <MenuItem key={device.deviceId} value={device.deviceId}>
                {device.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <div className="grid justify-items-center">
        <Button
          type="button"
          onClick={image === undefined ? handleTakePhoto : onNewTake}
          disabled={isLoading}
          sx={{
            width: '75%',
            minWidth: '100px',
            maxWidth: '250px',
            marginTop: '24px',
            padding: '12px 24px',
            borderRadius: '10px',
          }}
          className={
            image === undefined
              ? '!bg-[#4CAF50] !text-white'
              : '!bg-[#B9C0BC] !text-black'
          }
        >
          {image === undefined ? 'ถ่ายภาพ' : 'ถ่ายอีกครั้ง'}
        </Button>
      </div>
    </>
  )
}

export default Camera
