import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaXmark, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { navMenu } from '../assets/asstes'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')

    if (location.pathname === '/' || location.pathname === '') {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      navigate('/' + href)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (location.pathname === '/' || location.pathname === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const handleResumeDownload = () => {
    const resumePath = `${import.meta.env.BASE_URL}Imasha Samodee CV .pdf`
    const link = document.createElement('a')
    link.href = encodeURI(resumePath)
    link.setAttribute('download', 'Imasha Samodee CV .pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3.5 bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-sm shadow-slate-200/50' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 sm:px-8'>
        <div className='flex justify-between items-center'>
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={handleLogoClick}
            className='group flex items-center gap-2.5 cursor-pointer'
          >
            <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center font-orbitron font-bold text-white text-lg shadow-md shadow-cyan-600/20 group-hover:scale-105 transition duration-300'>
              IS
            </div>
            <div className='text-xl sm:text-2xl font-bold tracking-tight'>
              <span className='text-slate-900 group-hover:text-cyan-700 transition duration-300'>IMASHA</span>
              <span className='text-cyan-600 font-orbitron ml-1.5'>SAMODEE</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className='hidden md:flex items-center gap-1 bg-white/80 border border-slate-200/90 rounded-full px-6 py-2 backdrop-blur-md shadow-sm'>
            {navMenu.map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className='px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 rounded-full hover:bg-slate-100/80 transition-all duration-200 cursor-pointer'
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className='flex items-center gap-3'>
            <button 
              onClick={handleResumeDownload}
              className='hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-cyan-700 border border-cyan-300 bg-cyan-50/80 hover:bg-cyan-100 hover:border-cyan-400 transition-all duration-300 shadow-sm shadow-cyan-600/10 cursor-pointer active:scale-95'
            >
              <FaDownload className='text-xs' />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className='md:hidden p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-cyan-600 hover:border-cyan-400 shadow-sm transition cursor-pointer'
            >
              {mobileMenuOpen ? <FaXmark className='text-xl' /> : <FaBars className='text-xl' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[68px] bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 transition-all duration-300 ease-in-out shadow-xl ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className='flex flex-col gap-2'>
          {navMenu.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className='px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-cyan-50 hover:text-cyan-700 transition-colors border border-transparent hover:border-cyan-100 cursor-pointer'
            >
              {item.name}
            </a>
          ))}

          <div className='pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3'>
            <button
              onClick={() => {
                handleResumeDownload()
                setMobileMenuOpen(false)
              }}
              className='w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition cursor-pointer'
            >
              <FaDownload className='text-sm' />
              Download Resume
            </button>

            <div className='flex justify-center gap-6 pt-2 text-slate-500'>
              <a href="https://github.com/ImashaSamodee" target="_blank" rel="noopener noreferrer" className='hover:text-cyan-600 transition text-xl'>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/imashasamodee" target="_blank" rel="noopener noreferrer" className='hover:text-cyan-600 transition text-xl'>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar