import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import $ from 'jquery'

// const SITE_KEY = '6Lev4X8iAAAAAF9UgTDVOib5O6QkQN7uuvD3u53z';

function Recaptcha() {
  const [loading, setLoading] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')

  const registerUser = useCallback(async () => {
    if (!executeRecaptcha) {
      return
    }
    console.log('token', token)
    const result = await executeRecaptcha('register')
    setToken(result)
    setLoading(true)
    setEmail('')
  }, [executeRecaptcha])

  const handleTextChange = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  useEffect(() => {
    if (!executeRecaptcha) {
      return
    }
    const handleReCaptchaVerify = async () => {
      const token = await executeRecaptcha('register')
      setToken(token)
    }
    handleReCaptchaVerify()
  }, [executeRecaptcha])

  function sendReq() {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute('6LfkUIYiAAAAAI-6GH-AZrG-wOBXIIEiZT5TcTFn', {
          action: 'homepage',
        })
        .then((token) => {
          callApi(token)
        })
    })
  }

  function callApi(recaptchaToken) {
    let email = document.getElementById('f-email').value
    let json = {
      email: email,
    }

    $.ajax({
      type: 'POST',
      url: 'https://api.geniuz.club/landingpage/marketing/WhiteList',
      crossDomain: true,
      data: JSON.stringify(json),
      contentType: 'application/json',
      dataType: 'json',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('recaptchaToken', recaptchaToken)
        xhr.setRequestHeader('Api-Version', '1.0')
      },
      success: function (data) {
        alert('Request done!')
      },
      error: function (xhr, status, error) {
        alert('Error!')
      },
    })
  }
  return (
    <>
      <div className="d-flex justify-content-center flex-column">
        <input
          id="f-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="form-control"
        />
        <button
          onClick={sendReq}
          style={{ margin: 'auto' }}
          className="btn btn-warning my-4 w-25"
        >
          Send
        </button>
      </div>
    </>
  )
}

export default Recaptcha
