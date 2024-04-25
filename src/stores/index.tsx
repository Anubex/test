/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer, { authStateProps } from './slices/authSlice'

export interface storeStateProps {
  auth: authStateProps
}

const persistConfig = {
  key: 'k4-admin-app-332456',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export default () => {
  const store = configureStore({
    reducer: {
      auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })

  const persistor = persistStore(store)

  return { store, persistor }
}
