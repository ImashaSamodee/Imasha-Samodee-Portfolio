import React from 'react'
import { skillsData } from '../assets/asstes'

const Skills = () => {
  return (
    <div id='skills' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 mb-6'>
            <span className='text-cyan-700'>Technical </span>Skills
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            Here are some of the technical skills I have developed over the years.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {skillsData.map((skill, index) => (
            <div key={index} className='p-6 border bg-teal-50/10 border-cyan-700 rounded-xl text-center cursor-pointer hover:-translate-y-2 transition-all duration-300'>
              <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-gray-300 bg-gray-50 mb-4'>
                <skill.icon className='w-8 h-8 text-cyan-700' />
              </div>
              <h3 className='text-xl mb-2 font-bold text-zinc-600'>{skill.title}</h3>
              <p className='text-sm text-slate-500'>{skill.technologies.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills