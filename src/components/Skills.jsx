import React, { useState } from 'react'
import { skillsData, skillCategories } from '../assets/asstes'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend')

  const activeDomain = skillsData.find(item => item.category === activeCategory) || skillsData[0]
  const displayedSkills = activeDomain?.skills || []

  return (
    <section id='skills' className='py-16 sm:py-24 relative overflow-hidden bg-slate-50/60'>
      {/* Ambient background blur */}
      <div className='absolute bottom-10 right-10 w-80 h-80 bg-cyan-100/50 rounded-full blur-[130px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10'>
        
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-12 sm:mb-14'>
          <h2 className='text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900'>
            Technical <span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Skills</span>
          </h2>
          <p className='text-slate-600 text-sm sm:text-lg'>
            Select a technical domain to view the frameworks, languages, and developer tools I utilize.
          </p>

          {/* Category Filter Pills */}
          <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8'>
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Domain Description */}
          {activeDomain?.description && (
            <p className='text-center text-xs sm:text-sm text-slate-500 mt-4 sm:mt-5 max-w-xl mx-auto'>
              {activeDomain.description}
            </p>
          )}
        </div>

        {/* Skills Grid for Active Category: Clean Icons + Names Only */}
        <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 max-w-5xl mx-auto'>
          {displayedSkills.map((skill, sIdx) => {
            const SkillIcon = skill.icon
            return (
              <div 
                key={sIdx}
                className='group flex flex-col items-center justify-center p-2.5 sm:p-4 transition-all duration-300 hover:-translate-y-1.5 cursor-default text-center w-[100px] sm:w-[130px] md:w-[140px] rounded-xl sm:rounded-2xl hover:bg-white/80 hover:shadow-sm'
              >
                <div 
                  className='text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110 drop-shadow-xs'
                  style={{ color: skill.color || '#0891b2' }}
                >
                  <SkillIcon />
                </div>
                <span className='text-xs sm:text-sm md:text-base font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors leading-snug'>
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills