import { timeout } from '@/stores/slices/authSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { storeStateProps } from './stores'

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

const SessionTimeout = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: storeStateProps) => state.auth.token)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
      if (token) {
        const decodedJwt = parseJwt(token)

        if (decodedJwt.exp * 1000 < Date.now()) {
          dispatch(timeout())
        }
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds])

  return null
}

export default SessionTimeout
