import React from 'react'
import { FaDownload } from 'react-icons/fa6'
import { assets, statsData } from '../assets/asstes'
import { downloadCV } from '../utils/downloadCV'

const About = () => {

  return (
    <section id='about' className='py-16 sm:py-24 relative bg-white'>
      {/* Background Glow */}
      <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-[140px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10'>
        
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900'>
            About <span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Me</span>
          </h2>
          <p className='text-slate-600 text-base sm:text-lg'>
            Dedicated full-stack software engineer focused on building clean, performant, and purposeful software solutions.
          </p>
        </div>

        {/* Top Grid: Image + Bio Story */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16'>
          
          {/* Left Column: Image with Modern Border */}
          <div className='lg:col-span-5 flex justify-center'>
            <div className='relative w-full max-w-md'>
              <div className='absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-300/30 to-blue-300/30 blur-xl opacity-80' />
              <div className='relative rounded-2xl overflow-hidden border-4 border-white bg-slate-100 shadow-2xl'>
                <img 
                  src={assets.aboutImg} 
                  alt="Imasha Samodee About" 
                  className='w-full h-[320px] sm:h-[420px] object-cover object-center filter contrast-105' 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent' />
                <div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 rounded-xl bg-white/95 border border-slate-200/90 backdrop-blur-md shadow-lg'>
                  <p className='text-cyan-700 font-orbitron text-xs sm:text-sm font-bold mb-0.5'>Imasha Samodee</p>
                  <p className='text-slate-600 text-[11px] sm:text-xs font-medium'>IT Graduate (ITUM) & Full-Stack Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Highlights */}
          <div className='lg:col-span-7'>
            <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-5'>
              Crafting reliable software with passion & precision
            </h3>
            
            <p className='text-slate-700 text-sm sm:text-base leading-relaxed mb-4 font-normal'>
              I am a passionate software engineer with a strong foundation in cross-platform mobile development, enterprise backend architectures, and modern web applications. I specialize in developing responsive, accessible, and user-centered solutions utilizing Flutter, Spring Boot, React, and PHP/MySQL.
            </p>
            
            <p className='text-slate-600 text-sm sm:text-base leading-relaxed font-normal'>
              Having completed my National Diploma in Technology (NDT) in Information Technology at the Institute of Technology, University of Moratuwa (ITUM), I combine rigorous academic engineering foundations with hands-on development expertise to deliver high-quality digital solutions.
            </p>

            {/* Action Buttons */}
            <div className='mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4'>
              <a
                href={`${import.meta.env.BASE_URL}Imasha_Samodee_CV.pdf`}
                download="Imasha_Samodee_CV.pdf"
                onClick={downloadCV}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition cursor-pointer active:scale-95'
              >
                <FaDownload className='text-xs' />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                className='inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-cyan-300 hover:text-cyan-700 transition cursor-pointer active:scale-95'
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6'>
          {statsData.map((stat, idx) => (
            <div 
              key={idx} 
              className='p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:border-cyan-300 transition'
            >
              <div className='text-2xl sm:text-4xl font-orbitron font-bold text-cyan-600 mb-1.5 sm:mb-2'>
                {stat.number}
              </div>
              <div className='text-[11px] sm:text-sm text-slate-600 font-medium leading-tight'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About