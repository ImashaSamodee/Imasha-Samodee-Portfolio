import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  FaGithub, 
  FaArrowUpRightFromSquare, 
  FaArrowRight
} from 'react-icons/fa6'
import { projectData, projectCategories } from '../assets/asstes'

const Work = () => {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0] || 'Web Apps')
  const navigate = useNavigate()

  const filteredProjects = projectData.filter(project => 
    project.category?.includes(activeCategory) || 
    project.displayCategory === activeCategory ||
    (activeCategory === 'Web Apps' && (project.displayCategory === 'Web Application' || project.category?.includes('Web Application'))) ||
    (activeCategory === 'Systems' && (project.displayCategory === 'Management System' || project.category?.includes('Systems') || project.title?.toLowerCase().includes('system') || project.displayCategory === 'University Project')) ||
    (activeCategory === 'Full Stack' && (project.category?.includes('Full Stack') || project.role?.toLowerCase().includes('full-stack')))
  )

  return (
    <section id='work' className='py-24 relative bg-white'>
      {/* Background Accent */}
      <div className='absolute top-1/2 left-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-[120px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 sm:px-8 relative z-10'>
        
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-14'>
          <h2 className='text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900'>
            Recent <span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Projects</span>
          </h2>
          <p className='text-slate-600 text-base sm:text-lg'>
            Click on any project to explore its dedicated page, comprehensive architecture, and full feature set.
          </p>

          {/* Category Filter Pills */}
          <div className='flex flex-wrap items-center justify-center gap-2.5 mt-8'>
            {projectCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-600 text-white font-semibold shadow-md shadow-cyan-600/25'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid - 3 columns on desktop */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7'>
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              onClick={() => navigate(`/project/${project.id}`)}
              className='group rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-cyan-400 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer'
            >
              <div>
                {/* Image Container with Hover Zoom & Link */}
                <div className='relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100'>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
                  />
                  
                  {/* Category Badge on Image */}
                  <span className='absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-cyan-800 border border-slate-200 shadow-sm backdrop-blur-md z-10'>
                    {project.displayCategory || project.category?.[0] || 'Project'}
                  </span>
                </div>

                {/* Content Details */}
                <div className='p-5 sm:p-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-xs font-semibold text-cyan-700 uppercase tracking-wider'>
                      {project.role || 'Project'}
                    </span>
                    {project.duration && (
                      <span className='text-[11px] text-slate-400 font-medium'>
                        {project.duration}
                      </span>
                    )}
                  </div>

                  <h3 className='text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-200 mb-2'>
                    {project.title}
                  </h3>
                  
                  <p className='text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal line-clamp-2'>
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className='flex flex-wrap gap-1.5 mb-4'>
                    {project.tech.slice(0, 4).map((technology, tIdx) => (
                      <span 
                        key={tIdx} 
                        className='px-2.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium rounded-lg'
                      >
                        {technology}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className='px-2 py-0.5 text-xs text-slate-400 font-medium'>
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* View Details Link Hint */}
                  <div className='inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-200'>
                    <span>View Project Details</span>
                    <FaArrowRight className='text-[10px]' />
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div 
                className='p-5 sm:p-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between gap-3'
                onClick={(e) => e.stopPropagation()}
              >
                <a 
                  href={project.code || project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition duration-200'
                >
                  <FaGithub className='text-sm' />
                  <span>Source</span>
                </a>
                <a 
                  href={project.demo || project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm shadow-cyan-600/20 transition duration-200'
                >
                  <span>Preview</span>
                  <FaArrowUpRightFromSquare className='text-[10px]' />
                </a>
              </div>

            </div>
          ))}
        </div>



      </div>
    </section>
  )
}

export default Work