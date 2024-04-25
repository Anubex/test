import en from '@/locales/en/trans.json'
import th from '@/locales/th/trans.json'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: { translation: en },
  th: { translation: th },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'th',
})

export default i18next
