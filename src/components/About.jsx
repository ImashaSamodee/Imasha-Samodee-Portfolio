import React from 'react'
import { assets, profileData } from '../assets/asstes'
import { FaCode } from 'react-icons/fa6'

const About = () => {
   return (
      <>
      <div id='about' className='py-20'>
         <div className='max-w-7xl mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
               <div className='order-1'>
                  <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                     <span>About</span>
                     <span className='text-cyan-700'> Me</span>
                  </h2>
                  <p className='text-md mb-2 leading-8 text-slate-600'>I am a passionate web developer with a strong foundation in both frontend and backend technologies. I enjoy building responsive, user-friendly websites and applications using modern tools and frameworks. Writing clean and efficient code is my priority.</p>
                  <p className='text-md mb-4 leading-8 text-slate-600 '>I am always eager to learn new technologies and improve my skills. My goal is to create high-quality digital solutions that deliver excellent user experiences and solve real-world problems effectively.</p>
                  <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mb-6'>
                     {
                        profileData.map((data, index) => (
                           <div key={index} className='w-full h-55 sm:w-50 p-6 border border-zinc-400 rounded hover:-translate-y-2 transition duration-300 mb-5'>
                              <FaCode className='text-3xl mb-4'/>
                              <h1 className='text-xl font-bold mb-4'>{data.title}</h1>
                              <p className='text-sm text-slate-500'>{data.technologies.join(', ')}</p>
                           </div>
                        ))
                     }
                  </div>
               </div>
               <div className='order-1 lg:order-2 flex justify-center'>
                  <div className='relative w-full max-w-md '>
                     <div className='rounded overflow-hidden'>
                        <img src={assets.aboutImg} alt="About" className='w-full h-full object-cover' />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}

export default About