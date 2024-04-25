import { createSlice } from '@reduxjs/toolkit'

export interface authStateProps {
  isLoggedIn: boolean
  token: string | null
  expiredTime: string | null
  timeout: boolean
}

const initialState: authStateProps = {
  isLoggedIn: false,
  token: null,
  expiredTime: null,
  timeout: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true
      state.token = payload?.token
      state.expiredTime = payload?.expiredTime
      state.timeout = initialState.timeout
    },
    logout: (state) => {
      state.isLoggedIn = initialState.isLoggedIn
      state.token = initialState.token
      state.expiredTime = initialState.expiredTime
      state.timeout = initialState.timeout
    },
    timeout: (state) => {
      state.isLoggedIn = initialState.isLoggedIn
      state.token = initialState.token
      state.expiredTime = initialState.expiredTime
      state.timeout = true
    },
  },
})

export const { login, logout, timeout } = authSlice.actions
export default authSlice.reducer
