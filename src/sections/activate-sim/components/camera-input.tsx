/* eslint-disable @typescript-eslint/no-explicit-any */
import { Camera } from '@/components/camera'
import LoadingButton from '@mui/lab/LoadingButton'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { CameraType } from 'react-camera-pro'
import { MdCameraAlt } from 'react-icons/md'

interface CameraInputT {
  image: any
  handleImage: Dispatch<SetStateAction<undefined>>
}

export default function CameraInput({ handleImage, image }: CameraInputT) {
  const CameraRef = useRef<CameraType>(null)
  const [camera, setCamera] = useState(false)
  const [loading, setLoading] = useState(false)

  const onOpen = () => {
    setLoading(true)
    setCamera(true)
    setLoading(false)
  }

  return (
    <>
      {camera ? (
        <></>
      ) : (
        <>
          <img
            src="/assets/images/frame.svg"
            className="ml-[50%] -translate-x-[50%]"
            alt="frame"
          />
          <LoadingButton
            onClick={onOpen}
            endIcon={<MdCameraAlt />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            className="my-[25px] !ml-[50%] !mt-[25px] flex h-[52px] w-[178px] -translate-x-[50%] items-center rounded-[10px] !border-0 bg-gradient-to-b from-[#F3F3F3] to-[#B9C0BC] !text-[16px] font-bold !text-black shadow-lg"
          >
            <span>ถ่ายรูปภาพ</span>
          </LoadingButton>
        </>
      )}
      <>
        {camera && (
          <Camera
            value={image}
            cameraRef={CameraRef}
            horizontal={true}
            onTakePhoto={(blob: any) => handleImage(blob)}
            onNewTake={() => handleImage(undefined)}
            frame={
              <div>
                <div className="absolute left-[50%] top-[50%] z-10 h-[calc(104px-3%)] w-[calc(250px-3%)] translate-x-[-50%] translate-y-[-50%] border-[3px] border-dashed" />
              </div>
            }
          />
        )}
      </>
    </>
  )
}
