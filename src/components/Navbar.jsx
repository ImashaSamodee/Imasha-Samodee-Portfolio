import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Navbar = () => {

   const handleResumeDownload = () => {
      const link = document.createElement('a');
      link.href = '/Imasha Samodee CV .pdf';
      link.download = 'Imasha Samodee CV .pdf';
      link.click();
   };

   return (
      <>
         <div className='fixed w-full py-4 z-50 backdrop-blur-3xl'>
         <div className='max-w-7xl mx-auto px-6'>
            <div className='flex justify-between items-center'>
               <div className='text-2xl font-bold text-zinc-800'>
               <span>IMASHA</span>
               <span className='text-cyan-700 font-orbitron ml-2'>SAMODEE</span>
               </div>
               <div className='hidden md:flex space-x-8 border border-gray-200 rounded-full px-10 py-4 font-bold text-zinc-800'>
               <a href="#home">Home</a>
               <a href="#work">Work</a>
               <a href="#skills">Skills</a>
               <a href="#about">About</a>
               <a href="#contact">Contact</a>
               </div>
               <div>
               <button 
                  onClick={handleResumeDownload}
                  className='px-5 py-4 border border-zinc-800 flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 hover:translate-x-1 transition duration-300 rounded-full font-bold'>Download Resume<FaArrowRight className='text-gray-500 text-sm'/>
               </button>
               </div>
            </div>
         </div>
         </div>
      </>
   )
}

export default Navbar