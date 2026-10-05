import React from 'react'
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa6'
import { timelineData } from '../assets/asstes'

const Experience = () => {
  return (
    <section id='experience' className='py-24 relative bg-slate-50/60 overflow-hidden'>
      {/* Background Accent Glow */}
      <div className='absolute top-1/2 right-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-[140px] pointer-events-none' />

      <div className='max-w-5xl mx-auto px-6 sm:px-8 relative z-10'>
        
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900'>
            Experience & <span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Education</span>
          </h2>
          <p className='text-slate-600 text-base sm:text-lg'>
            Academic qualifications, software engineering milestones, and continuous technical growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div className='p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm'>
          <div className='space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200'>
            {timelineData.map((item, idx) => {
              const Icon = item.icon || FaGraduationCap
              return (
                <div key={idx} className='relative flex items-start gap-6 pl-2 group'>
                  {/* Timeline Node Icon */}
                  <div className='relative z-10 w-8 h-8 rounded-full bg-cyan-50 border-2 border-cyan-600 flex items-center justify-center text-cyan-700 shrink-0 text-xs shadow-sm group-hover:scale-110 transition duration-200'>
                    <Icon />
                  </div>

                  {/* Timeline Card Content */}
                  <div className='flex-1 p-6 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200 group-hover:border-cyan-300 group-hover:bg-white group-hover:shadow-md transition duration-300'>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2'>
                      <h3 className='text-base sm:text-lg font-bold text-slate-900'>
                        {item.title}
                      </h3>
                      <span className='inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-cyan-50 border border-cyan-200 text-cyan-800 self-start sm:self-auto'>
                        {item.period}
                      </span>
                    </div>

                    <p className='text-sm text-cyan-700 font-semibold mb-3'>
                      {item.organization}
                    </p>

                    <p className='text-sm sm:text-base text-slate-600 leading-relaxed font-normal'>
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
