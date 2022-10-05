import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '100vh'
          }}>
          <h1 style={{ fontSize: '100px', fontWeight: 700 }}>404</h1>
          <h4 style={{ fontSize: '50px', fontWeight: 700 }}>Page Not Found!!</h4>
          <Link to="/">Go to Home Page</Link>
        </div>
      </div>
    </>
  )
}

export default NotFound
