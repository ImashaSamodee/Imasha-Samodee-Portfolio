import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 120)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default Home