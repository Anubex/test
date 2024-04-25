/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material'
import { Field } from 'formik'
import { TextField } from 'formik-mui'

interface TextInputT {
  phoneNumber: string
  serialNo: string
}

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#28A745',
    },
  },
})

export default function TextInput({ phoneNumber, serialNo }: TextInputT) {
  return (
    <>
      <div className="mb-[15px] block !w-full items-center justify-start gap-[15px]">
        <label
          htmlFor="phoneNumber"
          className="w-full max-w-none text-left text-[16px] font-semibold md:w-[160px] md:max-w-[160px] md:text-right"
        >
          เบอร์โทรศัพท์
        </label>
        <Field
          component={CustomTextField}
          name="phoneNumber"
          inputMode="tel"
          fullWidth
          variant="outlined"
          placeholder="กรุณากรอกข้อมูล"
          inputProps={{ maxLength: 10 }}
          disabled={false}
          onKeyPress={(event: any) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault()
            } else {
              if (
                phoneNumber.length >= 10 &&
                event.target.selectionStart === event.target.selectionEnd
              ) {
                event.preventDefault()
              }
            }
          }}
        />
      </div>
      <div className="mb-[15px] block items-center justify-start gap-[15px]">
        <label
          htmlFor="serialNo"
          className="w-full text-left text-[16px] font-semibold"
        >
          Serial No.
        </label>
        <Field
          component={CustomTextField}
          name="iccid"
          inputMode="tel"
          fullWidth
          variant="outlined"
          placeholder="กรุณากรอกข้อมูล"
          disabled={false}
          onKeyPress={(event: any) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault()
            } else {
              if (
                serialNo.length >= 19 &&
                event.target.selectionStart === event.target.selectionEnd
              ) {
                event.preventDefault()
              }
            }
          }}
        />
      </div>
    </>
  )
}
