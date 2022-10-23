import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

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

  const submitHandler = async (e) => {
    console.log('triggered')
    e.preventDefault()
    try {
      const { data } = await axios.post(
        `https://api.geniuz.club/landingpage/marketing/WhiteList`,

        {
          Headers: {
            'Content-Type': 'application/json',
            recaptchaTokenBypass: token,
            // 'Access-Control-Allow-Origin': 'http://localhost:3000',
          },
          email,
        }
      )
      console.log(data, 'data in api')
      setEmail('')
    } catch (error) {
      // throw new Error('Something went wrong', { cause: error })
      console.log(error.message)
    }
  }

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="d-flex justify-content-center flex-column"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          style={{ margin: 'auto' }}
          type="submit"
          onClick={registerUser}
          className="btn btn-warning my-4 w-25"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default Recaptcha
