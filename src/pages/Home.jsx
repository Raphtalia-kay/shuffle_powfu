import React from 'react'
import Hero from '../components/Hero'
import LatestAlbum from '../components/LandingPage/LatestAlbum'
import LatestSingle from '../components/LandingPage/LatestSingle'
import LatestNews from '../components/LandingPage/LatestNews'
import Footer from '../components/NavAndFoot/Footer'
import UpperFooter from '../components/NavAndFoot/UpperFooter'


const Home = () => {
  return (
    <>
      <Hero/>
      <LatestAlbum/>
      <LatestSingle/>
      <LatestNews/>
      <UpperFooter/>
      <Footer/>
    </>
  )
}

export default Home
