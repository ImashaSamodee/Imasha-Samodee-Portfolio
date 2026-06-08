import React from 'react'
import { projectData } from '../assets/asstes'

const Work = () => {
   return (
      <>
      <div id='work' className='py-20'>
         <div className='max-w-7xl mx-auto px-6 py-6'>
            <div className='mb-16 text-center'>
               <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 mb-6'>My <span className='text-cyan-700'>Projects</span></h2>
               <p className='text-xl text-slate-600 max-w-2xl mx-auto'>Here are some of my recent projects that showcase my skills in web development and design.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
               {
                  projectData.map((project, index) => (
                     <div key={index} className='group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300'>
                        <div className='relative flex items-center justify-center'>
                           <img src={project.image} alt="" />
                        </div>
                        <div className='p-6'>
                           <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                           <p className='text-slate-900 text-sm'>{project.description}</p>
                           <div className='flex flex-wrap gap-2 mt-6'>
                              {
                                 project.tech.map((language, index) => (
                                    <span key={index} className='px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full'>
                                       {language}
                                    </span>
                                 ))
                              }
                           </div>
                           <div className='mt-4 flex justify-between'>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='text-white mt-4 inline-block bg-cyan-700 hover:bg-cyan-800 px-4 py-2 rounded-full text-sm'>View Code</a>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='text-cyan-700 mt-4 inline-block ml-4 border border-cyan-700 px-4 py-2 rounded-full text-sm'>Live Preview</a>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
      </>
   )
}

export default Work