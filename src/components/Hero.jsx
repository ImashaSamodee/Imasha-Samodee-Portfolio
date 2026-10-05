import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaCode, FaReact, FaPython, FaDownload } from 'react-icons/fa6'
import { SiPhp, SiJavascript } from 'react-icons/si'
import { assets, socialLinks } from '../assets/asstes'

const TITLES = [
  'Full-Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'Software Engineer'
]

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0)
  const [currentText, setCurrentText] = useState(TITLES[0])
  const [isDeleting, setIsDeleting] = useState(false)

  const handleResumeDownload = () => {
    const resumePath = `${import.meta.env.BASE_URL}Imasha Samodee CV .pdf`
    const link = document.createElement('a')
    link.href = encodeURI(resumePath)
    link.setAttribute('download', 'Imasha Samodee CV .pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const fullText = TITLES[titleIndex]
    let timeout

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2200)
    } else if (isDeleting && currentText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % TITLES.length)
      }, 300)
    } else {
      const speed = isDeleting ? 45 : 90
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, titleIndex])

  return (
    <section id='home' className='relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-[#f8fafc] to-slate-100/80'>
      {/* Background Ambient Glows */}
      <div className='absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/40 rounded-full blur-[130px] pointer-events-none' />
      <div className='absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-blue-200/35 rounded-full blur-[150px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
          
          {/* Left Hero Content */}
          <div className='lg:col-span-7 text-center lg:text-left'>
            {/* Main Headline */}
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 leading-tight'>
              <span className='text-slate-500 text-2xl sm:text-3xl font-normal block font-sans-body mb-2'>
                Hello, I'm
              </span>
              <span className='text-slate-900 drop-shadow-sm'>Imasha Samodee</span>
              <br />
              <span className='inline-flex items-center min-h-[34px] sm:min-h-[46px] md:min-h-[54px] mt-1'>
                <span className='bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-orbitron font-semibold tracking-normal'>
                  {currentText}
                </span>
                <span className='inline-block w-[2.5px] sm:w-[3px] h-6 sm:h-8 md:h-9 bg-cyan-600 ml-1.5 sm:ml-2 animate-pulse rounded-full' />
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className='text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-8 font-normal leading-relaxed'>
              I engineer high-performance web applications, responsive frontend experiences, and reliable database-driven systems using <span className='text-cyan-700 font-semibold'>PHP</span>, <span className='text-cyan-700 font-semibold'>MySQL</span>, and <span className='text-cyan-700 font-semibold'>JavaScript</span>.
            </p>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10'>
              <a 
                href="#work" 
                className='w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-600/25 transition duration-300 active:scale-95 text-sm sm:text-base'
              >
                <span>Explore Projects</span>
                <FaArrowRight className='text-sm' />
              </a>
              <button
                onClick={handleResumeDownload}
                className='w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-cyan-50/80 text-cyan-700 hover:text-cyan-800 border border-cyan-300 hover:border-cyan-400 font-semibold rounded-xl shadow-sm transition duration-300 active:scale-95 cursor-pointer text-sm sm:text-base'
              >
                <FaDownload className='text-xs' />
                <span>Download CV</span>
              </button>
              <a 
                href="#contact" 
                className='w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-xl shadow-sm transition duration-300 active:scale-95 text-sm sm:text-base'
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className='flex items-center justify-center lg:justify-start gap-3 text-slate-500'>
              <span className='text-xs uppercase tracking-wider font-semibold text-slate-400 mr-2'>Connect:</span>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className='w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:border-cyan-400 hover:bg-cyan-50/50 shadow-sm transition-all duration-200'
                >
                  <social.icon className='text-base' />
                </a>
              ))}
            </div>

          </div>

          {/* Right Hero Visual / Avatar */}
          <div className='lg:col-span-5 flex justify-center'>
            <div className='relative w-72 h-72 sm:w-96 sm:h-96'>
              
              {/* Outer Glow Ring */}
              <div className='absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/25 to-blue-500/25 blur-2xl opacity-75' />
              
              {/* Main Avatar Container */}
              <div className='relative w-full h-full rounded-3xl overflow-hidden border-4 border-white bg-slate-100 shadow-2xl floating'>
                <img 
                  src={assets.profileImg} 
                  alt="Imasha Samodee - Full Stack Developer" 
                  className='w-full h-full object-cover object-center filter saturate-105' 
                />
              </div>

              {/* Floating Badge 1: PHP & MySQL */}
              <div className='absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-200/90 backdrop-blur-xl shadow-lg flex items-center gap-2 text-cyan-800 text-xs font-semibold floating-delayed'>
                <SiPhp className='text-[#777BB4] text-2xl' />
                <span>PHP & MySQL</span>
              </div>

              {/* Floating Badge 2: JavaScript */}
              <div className='absolute -bottom-5 -left-4 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-200/90 backdrop-blur-xl shadow-lg flex items-center gap-2 text-slate-800 text-xs font-semibold floating'>
                <SiJavascript className='text-[#EAB308] text-base' />
                <span>JavaScript ES6+</span>
              </div>

              {/* Floating Badge 3: Software Dev */}
              <div className='hidden sm:flex absolute top-1/2 -left-8 -translate-y-1/2 px-3.5 py-2 rounded-xl bg-white/95 border border-slate-200/90 backdrop-blur-xl shadow-lg items-center gap-2 text-slate-700 text-xs font-medium'>
                <FaCode className='text-cyan-600' />
                <span>Clean Code</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero