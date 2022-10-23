import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GoogleReCaptchaProvider reCaptchaKey="6LfkUIYiAAAAAI-6GH-AZrG-wOBXIIEiZT5TcTFn">
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </GoogleReCaptchaProvider>
)
