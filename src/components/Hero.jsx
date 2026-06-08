import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { assets } from '../assets/asstes'

const Hero = () => {
   return (
      <>
      <div id='home' className='min-h-screen flex items-center pt-16'>
         <div className='max-w-7xl mx-auto px-6 py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
               <div className='text-center lg:text-left'>
                  <h1 className='mb-15'>
                     <span className='text-zinc-700 text-5xl sm:text-6xl md:text-7xl font-bold'>Imasha Samodee</span><br />
                     <span className='text-cyan-700 text-3xl sm:text-4xl md:text-5xl font-bold'>FullStack Developer</span>
                  </h1>
                  <p className='text-xl text-zinc-900 mb-6 mt-5'>I build responsive websites and applications using modern technologies like React, Node.js, and Python.</p>
                  <div className='flex flex-col md:flex-row items-center gap-4'>
                     <a href="#work" className='flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white transition duration-300'>View My Work <FaArrowRight/></a>
                     <a href="#contact" className='flex gap-2 items-center px-10 py-4 rounded-full border border-slate-400 text-zinc-800 hover:border-slate-800 transition duration-300'>Contact Me <FaArrowRight/></a>
                  </div>
               </div>

               <div className='flex justify-center'>
                  <div className='relative w-80 h-80 sm:w-100 sm:h-100 floating'>
                     <div className='absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow'>
                        <img src={assets.profileImg} alt="Profile" className='w-full h-full object-cover' />
                     </div>
                     <div className='absolute -bottom-6 -right-6 w-32 h-32 rounded-xl border border-slate-600/20 overflow-hidden p-3'></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}

export default Hero