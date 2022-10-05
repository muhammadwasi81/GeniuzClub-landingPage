import en from './trans/en.json'
import it from './trans/it.json'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

const resources = {
  en: {
    translation: en
  },
  it: {
    translation: it
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem('language')),
  fallbackLng: 'en'
})

export default i18n
