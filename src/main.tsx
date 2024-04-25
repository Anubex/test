import createStore from '@/stores'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './app.tsx'
import './i18n.tsx'
import SessionTimeout from './session-timeout.tsx'

// ----------------------------------------------------------------------

const { store, persistor } = createStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense>
          <App />
            <SessionTimeout />
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </PersistGate>
  </Provider>,
)
