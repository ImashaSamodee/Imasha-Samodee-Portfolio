import React, { useState } from 'react'
import { skillsData, skillCategories } from '../assets/asstes'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend')

  const activeDomain = skillsData.find(item => item.category === activeCategory) || skillsData[0]
  const displayedSkills = activeDomain?.skills || []

  return (
    <section id='skills' className='py-24 relative overflow-hidden bg-slate-50/60'>
      {/* Ambient background blur */}
      <div className='absolute bottom-10 right-10 w-80 h-80 bg-cyan-100/50 rounded-full blur-[130px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 sm:px-8 relative z-10'>
        
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-14'>
          <h2 className='text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900'>
            Technical <span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Skills</span>
          </h2>
          <p className='text-slate-600 text-base sm:text-lg'>
            Select a technical domain to view the frameworks, languages, and developer tools I utilize.
          </p>

          {/* Category Filter Pills */}
          <div className='flex flex-wrap items-center justify-center gap-2.5 mt-8'>
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid for Active Category: Clean Icons + Names Only */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center max-w-5xl mx-auto'>
          {displayedSkills.map((skill, sIdx) => {
            const SkillIcon = skill.icon
            return (
              <div 
                key={sIdx}
                className='group flex flex-col items-center justify-center p-4 transition-all duration-300 hover:-translate-y-2 cursor-default text-center w-full max-w-[140px]'
              >
                <div 
                  className='text-5xl sm:text-6xl mb-3 transition-transform duration-300 group-hover:scale-115'
                  style={{ color: skill.color || '#0891b2' }}
                >
                  <SkillIcon />
                </div>
                <span className='text-sm sm:text-base font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors'>
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