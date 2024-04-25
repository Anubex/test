/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItem, ThemeProvider, createTheme, styled } from '@mui/material'
import dayjs from 'dayjs'
import { Field, FormikErrors } from 'formik'
import { Select, TextField } from 'formik-mui'
import { ChangeEvent, useEffect, useState } from 'react'

import { initialCustomerValuesType } from '../activate-sim-view'

interface CustomerInformationT {
  firstName: string
  lastName: string
  personalId: string
  birthYear: string
  birthMonth: string
  birthDay: string
  address: string
  contactNumber: string
}

interface CustomerFormT {
  information: CustomerInformationT
  setInformation: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<void | FormikErrors<initialCustomerValuesType>>
}

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#28A745',
    },
  },
})

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#28A745',
          },
        },
      },
    },
  },
})

export default function CustomerForm({
  information,
  setInformation,
}: CustomerFormT) {
  const [yearOption, setYearOption] = useState<string[]>([])
  const [monthOption, setMonthOption] = useState<string[]>([])
  const [dayOption, setDayOption] = useState<string[]>([])

  useEffect(() => {
    const monthArr = Array.from({ length: 12 }, (_, i) =>
      i + 1 < 10 ? `0${i + 1}` : `${i + 1}`,
    )
    setMonthOption(monthArr)

    const currentYear = dayjs().year()
    const yearsBefore = 100
    const yearsArray = Array.from(
      { length: yearsBefore },
      (_, index) => `${currentYear - index}`,
    )
    setYearOption(yearsArray)
  }, [])

  const setBirthYear = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const year = event.target.value
    setInformation('birthYear', year)
    setInformation('birthMonth', '')
    setInformation('birthDay', '')
    setDayOption([])
  }

  const setBirthMonth = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const month = event.target.value
    setInformation('birthMonth', month)

    const daysInMonth = dayjs(`${information.birthYear}-${month}`).daysInMonth()

    const allDaysOfMonth = Array.from({ length: daysInMonth }, (_, day) =>
      dayjs()
        .date(day + 1)
        .format('DD'),
    )

    setDayOption(allDaysOfMonth)
    setInformation('birthDay', '')
  }

  const setBirthDay = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const day = event.target.value
    setInformation('birthDay', day)
  }

  return (
    <>
      <div className="mb-[15px] grid items-center justify-start gap-[15px] md:flex">
        <label
          htmlFor="firstName"
          className="w-full max-w-none text-left text-[16px] font-semibold md:w-[160px] md:max-w-[160px] md:text-right"
        >
          ชื่อ
        </label>
        <Field
          component={CustomTextField}
          name="firstName"
          fullWidth
          variant="outlined"
          placeholder="กรุณากรอกข้อมูล"
          disable={false}
          className="!w-[378px]"
        />
      </div>
      <div className="mb-[15px] grid items-center justify-start gap-[15px] md:flex">
        <label
          htmlFor="lastName"
          className="w-full max-w-none text-left text-[16px] font-semibold md:w-[160px] md:max-w-[160px] md:text-right"
        >
          นามสกุล
        </label>
        <Field
          component={CustomTextField}
          name="lastName"
          fullWidth
          variant="outlined"
          placeholder="กรุณากรอกข้อมูล"
          disable={false}
          className="!w-[378px]"
        />
      </div>
      <div className="mb-[15px] grid items-center justify-start gap-[15px] md:flex">
        <label
          htmlFor="personalId"
          className="w-full max-w-none text-left text-[16px] font-semibold md:w-[160px] md:max-w-[160px] md:text-right"
        >
          เลขประจำตัวคนต่างด้าว
        </label>
        <Field
          component={CustomTextField}
          name="personalId"
          fullWidth
          variant="outlined"
          placeholder="กรุณากรอกข้อมูล"
          disable={false}
          className="!border-1 !rounded-0 !w-[378px] !border-black"
        />
      </div>
      <div className="mb-[15px] grid items-center justify-start gap-[15px] md:flex">
        <ThemeProvider theme={theme}>
          <label
            htmlFor="birthDate"
            className="w-full max-w-none text-left text-[16px] font-semibold md:w-[160px] md:max-w-[160px] md:text-right"
          >
            วันเดือนปีเกิด
          </label>
          <div className="flex gap-[5px]">
            <Field
              component={Select}
              name="birthYear"
              placeholder="เลือกปี"
              disable={false}
              className="w-[156px] max-w-[156px]"
              onChange={setBirthYear}
            >
              {yearOption.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Field>
            <Field
              component={Select}
              name="birthMonth"
              placeholder="เลือกเดือน"
              disable={false}
              className="w-[106px] max-w-[106px]"
              onChange={setBirthMonth}
              disabled={information.birthYear === ''}
            >
              {monthOption.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Field>
            <Field
              component={Select}
              name="birthDay"
              placeholder="เลือกวัน"
              disable={false}
              className="w-[106px] max-w-[106px]"
              onChange={setBirthDay}
              disabled={information.birthMonth === ''}
            >
              {dayOption.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Field>
          </div>
        </ThemeProvider>
      </div>
      <div className="mb-[15px] grid items-center justify-start gap-[15px] md:flex">
        <label
          htmlFor="personalId"
          className="w-full max-w-none text-left text-[16px] font-semibold md:w-[160px] md:max-w-[160px] md:text-right"
        >
          เบอร์ติดต่อ
        </label>
        <Field
          component={CustomTextField}
          name="contactNumber"
          inputMode="tel"
          fullWidth
          variant="outlined"
          placeholder="กรุณากรอกข้อมูล"
          inputProps={{ maxLength: 10 }}
          disable={false}
          onKeyPress={(event: any) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault()
            } else {
              if (
                information.contactNumber.length >= 10 &&
                event.target.selectionStart === event.target.selectionEnd
              ) {
                event.preventDefault()
              }
            }
          }}
          className="!border-1 !rounded-0 !w-[378px] !border-black"
        />
      </div>
      <div className="mb-[15px] grid items-start justify-start gap-[15px] md:flex">
        <label
          htmlFor="address"
          className="w-full max-w-none text-left text-[16px] font-semibold md:w-[160px] md:max-w-[160px] md:text-right"
        >
          ที่อยู่ในประเทศไทย
        </label>
        <Field
          component={CustomTextField}
          name="address"
          rows={4}
          fullWidth
          multiline
          variant="outlined"
          placeholder="กรุณากรอกข้อมูล"
          disable={false}
          className="!border-1 !rounded-0 !w-[378px] !border-black"
        />
      </div>
    </>
  )
}
