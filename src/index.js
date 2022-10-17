import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GoogleReCaptchaProvider reCaptchaKey="6Lev4X8iAAAAAF9UgTDVOib5O6QkQN7uuvD3u53z">
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </GoogleReCaptchaProvider>
)
