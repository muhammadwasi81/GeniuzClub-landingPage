import { useEffect, useState } from 'react'
import axios from 'axios'

const SITE_KEY = '6LfkUIYiAAAAAI-6GH-AZrG-wOBXIIEiZT5TcTFn'

function Recaptcha() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState(null)

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id)

      if (!isScriptExist) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = url
        script.id = id
        script.onload = function () {
          if (callback) callback()
        }
        document.body.appendChild(script)
      }
      if (isScriptExist && callback) callback()
    }

    loadScriptByURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        console.log('Script loaded!')
      }
    )
  }, [])

  const handleOnClick = (e) => {
    e.preventDefault()
    setLoading(true)
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, {
          action: 'submit',
        })
        .then((token) => {
          console.log(token, 'token')
          handleSubmit(token)
        })
    })
  }

  const handleSubmit = async (token) => {
    const payload = {
      email: email,
    }
    try {
      setLoading(true)
      const response = await axios.post(
        `https://api.geniuz.club/landingpage/marketing/WhiteList`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Api-Version': '1.0',
            recaptchaToken: token,
          },
        }
      )
      setResponse(response)
      setLoading(false)
      setEmail('')
      console.log(response.data, 'response')
    } catch (error) {
      setLoading(false)
      console.log(error, 'error')
      throw new Error('Something went wrong', { cause: error })
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center flex-column">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter your email"
          className="form-control"
        />
        <button
          onClick={handleOnClick}
          style={{ margin: 'auto' }}
          className="btn btn-warning my-4 w-25"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </>
  )
}

export default Recaptcha
