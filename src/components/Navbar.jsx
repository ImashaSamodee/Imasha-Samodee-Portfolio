import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaXmark, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { navMenu } from '../assets/asstes'
import { downloadCV } from '../utils/downloadCV'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'work', 'experience', 'contact']

    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 10)

      if (location.pathname === '/' || location.pathname === '') {
        const scrollPosition = scrollY + 140
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i])
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    setActiveSection(targetId)

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
    setActiveSection('home')
    if (location.pathname === '/' || location.pathname === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-300 ${
        scrolled ? 'shadow-sm shadow-slate-200/60' : ''
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex justify-between items-center h-16 sm:h-20'>
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={handleLogoClick}
            className='group flex items-center gap-2.5 cursor-pointer select-none'
          >
            <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center font-orbitron font-bold text-white text-base sm:text-lg shadow-sm group-hover:scale-105 transition duration-200 shrink-0'>
              IS
            </div>
            <div className='text-lg sm:text-2xl font-bold tracking-tight'>
              <span className='text-slate-900 group-hover:text-cyan-700 transition duration-200'>IMASHA</span>
              <span className='text-cyan-600 font-orbitron ml-1.5'>SAMODEE</span>
            </div>
          </a>

          {/* Standard Desktop Navigation Links */}
          <nav className='hidden md:flex items-center gap-6 lg:gap-8'>
            {navMenu.map((item, idx) => {
              const targetId = item.href.replace('#', '')
              const isActive = activeSection === targetId

              return (
                <a 
                  key={idx}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-semibold transition-colors py-1 relative ${
                    isActive 
                      ? 'text-cyan-600' 
                      : 'text-slate-600 hover:text-cyan-600'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-600 rounded-full transition-all' />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className='flex items-center gap-3'>
            <a 
              href={`${import.meta.env.BASE_URL}Imasha_Samodee_CV.pdf`}
              download="Imasha_Samodee_CV.pdf"
              onClick={downloadCV}
              target="_blank"
              rel="noopener noreferrer"
              className='hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-sm shadow-cyan-600/20 transition active:scale-95 cursor-pointer'
            >
              <FaDownload className='text-xs' />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className='md:hidden p-2 sm:p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-cyan-600 hover:border-cyan-300 shadow-xs transition cursor-pointer'
            >
              {mobileMenuOpen ? <FaXmark className='text-lg sm:text-xl' /> : <FaBars className='text-lg sm:text-xl' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden fixed inset-x-0 top-16 sm:top-20 bg-white border-b border-slate-200 px-6 py-6 transition-all duration-300 ease-in-out shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        <div className='flex flex-col gap-2'>
          {navMenu.map((item, idx) => {
            const targetId = item.href.replace('#', '')
            const isActive = activeSection === targetId

            return (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                  isActive
                    ? 'bg-cyan-50 text-cyan-700 font-semibold border border-cyan-100'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-cyan-600'
                }`}
              >
                {item.name}
              </a>
            )
          })}

          <div className='pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3'>
            <a
              href={`${import.meta.env.BASE_URL}Imasha_Samodee_CV.pdf`}
              download="Imasha_Samodee_CV.pdf"
              onClick={(e) => {
                downloadCV(e)
                setMobileMenuOpen(false)
              }}
              target="_blank"
              rel="noopener noreferrer"
              className='w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition cursor-pointer'
            >
              <FaDownload className='text-sm' />
              Download Resume
            </a>

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