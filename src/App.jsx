import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/404'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
