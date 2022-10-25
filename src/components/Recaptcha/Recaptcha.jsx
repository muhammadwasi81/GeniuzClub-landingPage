import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SITE_KEY = '6LfkUIYiAAAAAI-6GH-AZrG-wOBXIIEiZT5TcTFn'

function Recaptcha() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState(null)

  const handleOnClick = (e) => {
    e.preventDefault()
    if (!email) {
      return toast.error('Please enter your email')
    }
    setLoading(true)
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, {
          action: 'submit',
        })
        .then((token) => {
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
      if (response.status === 201 || response.status === 200) {
        toast.success('Email Send Successfully', {
          position: 'top-right',
          autoClose: 5000,
        })
        setLoading(false)
        setResponse(response)
        setEmail('')
      }
    } catch (error) {
      toast.error('Email Already Exists', {
        position: 'top-right',
        autoClose: 5000,
      })
      setLoading(false)
      throw new Error('Email Already Exists', { cause: error })
    }
  }
  return (
    <>
      <ToastContainer />
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
