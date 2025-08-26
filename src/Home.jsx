import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Footer from './components/Footer'
import Companyprofile from './components/Companyprofile'



function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Companyprofile/>
      <Footer />
    </div>
  )
}

export default Home
