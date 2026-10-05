import React from 'react'
import { assets, statsData } from '../assets/asstes'

const About = () => {

  return (
    <section id='about' className='py-24 relative bg-white'>
      {/* Background Glow */}
      <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-[140px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 sm:px-8 relative z-10'>
        
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900'>
            About <span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Me</span>
          </h2>
          <p className='text-slate-600 text-base sm:text-lg'>
            Dedicated full-stack software engineer focused on building clean, performant, and purposeful software solutions.
          </p>
        </div>

        {/* Top Grid: Image + Bio Story */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16'>
          
          {/* Left Column: Image with Modern Border */}
          <div className='lg:col-span-5 flex justify-center'>
            <div className='relative w-full max-w-md'>
              <div className='absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-300/30 to-blue-300/30 blur-xl opacity-80' />
              <div className='relative rounded-2xl overflow-hidden border-4 border-white bg-slate-100 shadow-2xl'>
                <img 
                  src={assets.aboutImg} 
                  alt="Imasha Samodee About" 
                  className='w-full h-[420px] object-cover object-center filter contrast-105' 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent' />
                <div className='absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200/90 backdrop-blur-md shadow-lg'>
                  <p className='text-cyan-700 font-orbitron text-sm font-bold mb-0.5'>Imasha Samodee</p>
                  <p className='text-slate-600 text-xs font-medium'>IT Graduate (ITUM) & Full-Stack Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Highlights */}
          <div className='lg:col-span-7'>
            <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 mb-5'>
              Crafting reliable software with passion & precision
            </h3>
            
            <p className='text-slate-700 text-base leading-relaxed mb-4 font-normal'>
              I am a passionate web developer with a strong foundation in both frontend and backend technologies. I specialize in developing responsive, accessible, and user-centered web applications utilizing modern web technologies including PHP, MySQL, JavaScript, and responsive design frameworks.
            </p>
            
            <p className='text-slate-600 text-base leading-relaxed font-normal'>
              Having completed my National Diploma in Technology (NDT) in Information Technology at the Institute of Technology, University of Moratuwa (ITUM), I combine rigorous academic engineering foundations with hands-on development expertise to deliver high-quality digital solutions.
            </p>
          </div>

        </div>

        {/* Stats Row */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
          {statsData.map((stat, idx) => (
            <div 
              key={idx} 
              className='p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:border-cyan-300 transition'
            >
              <div className='text-3xl sm:text-4xl font-orbitron font-bold text-cyan-600 mb-2'>
                {stat.number}
              </div>
              <div className='text-xs sm:text-sm text-slate-600 font-medium'>
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