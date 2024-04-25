/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingButton from '@mui/lab/LoadingButton'
import { Dispatch, SetStateAction, useRef } from 'react'
import { MdInsertPhoto } from 'react-icons/md'
import { toast } from 'react-toastify'

interface FileInputT {
  image: any
  handleImage: Dispatch<SetStateAction<undefined>>
}

export default function FileInput({ image, handleImage }: FileInputT) {
  const fileImage = useRef(null)

  const handleClick = () => {
    if (fileImage.current) {
      ;(fileImage.current as HTMLInputElement).click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target
    const file = fileInput.files?.[0]
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png']
      if (validImageTypes.includes(file.type)) {
        const reader = new FileReader()
        reader.onloadend = () => {
          handleImage(reader.result as any)
        }
        reader.readAsDataURL(file)
      } else {
        toast.warn('Please select an image file (jpg, png, gif).', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }
  }

  return (
    <>
      {image && (
        <div className="w-full text-center">
          <img
            src={image}
            alt="Preview"
            style={{ maxWidth: '40%' }}
            className="mb-[25px] text-center"
          />
        </div>
      )}
      <input
        type="file"
        ref={fileImage}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
      />
      <LoadingButton
        onClick={handleClick}
        endIcon={<MdInsertPhoto />}
        loadingPosition="end"
        variant="contained"
        className="my-[25px] !ml-[50%] flex h-[52px] w-[178px] -translate-x-[50%] items-center rounded-[10px] !border-0 !bg-[#00781E] to-[#B9C0BC] !text-[16px] font-bold !text-white shadow-lg"
      >
        <span>เลือกรูปจากเครื่อง</span>
      </LoadingButton>
    </>
  )
}
