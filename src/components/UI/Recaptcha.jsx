import { useCallback, useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const SITE_KEY = '6Lev4X8iAAAAAF9UgTDVOib5O6QkQN7uuvD3u53z';

function Recaptcha() {
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState('');
  const [actionToChange, setActionToChange] = useState('');

  const registerUser = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }
    console.log('token', token);
    const result = await executeRecaptcha('register');
    setToken(result);
    setLoading(true);
    setActionToChange('');
  }, [executeRecaptcha]);

  const handleTextChange = useCallback((event) => {
    setActionToChange(event.target.value);
  }, []);

  useEffect(() => {
    if (!executeRecaptcha) {
      return;
    }
    const handleReCaptchaVerify = async () => {
      const token = await executeRecaptcha('register');
      setToken(token);
    };
    handleReCaptchaVerify();
  }, [executeRecaptcha]);

  return (
    <div className="d-flex justify-content-center flex-column">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="form-control"
        onChange={(e) => setActionToChange(e.target.value)}
        value={actionToChange}
      />
      <button
        type="button"
        style={{ margin: 'auto' }}
        onClick={registerUser}
        className="btn btn-warning my-4 w-25"
      >
        Submit
      </button>
    </div>
  );
}

export default Recaptcha;
