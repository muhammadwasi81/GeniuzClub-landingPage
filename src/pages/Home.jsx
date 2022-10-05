import { useEffect } from 'react'
import BetaVersion from '../components/beta/BetaVersion'
import Footer from '../components/Footer/Footer'
import GameRules from '../components/Gamerules/GameRules'
import Nav from '../components/Nav/Nav'
import GameSchedule from '../components/schedules/GameSchedule'
import Slider from '../components/Slider/Slider'
import Studio from '../components/studio/Studio'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Nav />
      <Slider />
      <GameRules />
      <Studio />
      <GameSchedule />
      <BetaVersion />
      <Footer />
    </>
  )
}

export default Home
