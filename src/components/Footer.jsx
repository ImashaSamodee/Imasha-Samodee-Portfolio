import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa6'
import { navMenu, socialLinks } from '../assets/asstes'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
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
    if (location.pathname === '/' || location.pathname === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t border-slate-200 bg-slate-50 relative z-10'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8 py-12'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          
          {/* Brand */}
          <a 
            href="#home"
            onClick={handleLogoClick}
            className='flex items-center gap-3 cursor-pointer group'
          >
            <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center font-orbitron font-bold text-white text-sm shadow-sm group-hover:scale-105 transition'>
              IS
            </div>
            <div>
              <span className='font-bold text-slate-900 text-sm group-hover:text-cyan-700 transition'>Imasha Samodee</span>
              <span className='text-xs text-slate-500 block font-normal'>Full-Stack Developer</span>
            </div>
          </a>

          {/* Quick Nav Links */}
          <div className='flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-600'>
            {navMenu.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className='hover:text-cyan-700 font-medium transition cursor-pointer'
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className='flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 text-slate-600 hover:text-cyan-700 text-xs font-semibold shadow-sm transition active:scale-95 cursor-pointer'
          >
            <span>Back to top</span>
            <FaArrowUp className='text-[10px]' />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className='mt-8 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500'>
          <p>© {currentYear} Imasha Samodee. All rights reserved.</p>
          <div className='flex items-center gap-4'>
            {socialLinks.map((item, idx) => (
              <a 
                key={idx} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-slate-500 hover:text-cyan-600 transition text-sm'
                aria-label={item.name}
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer