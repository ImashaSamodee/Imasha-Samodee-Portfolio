import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaGithub, 
  FaArrowUpRightFromSquare, 
  FaCircleCheck, 
  FaLightbulb
} from 'react-icons/fa6'
import { projectData } from '../assets/asstes'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  const currentIndex = projectData.findIndex(p => p.id === id)
  const project = projectData[currentIndex]

  if (!project) {
    return (
      <div className='min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between'>
        <Navbar />
        <div className='max-w-3xl mx-auto px-6 py-36 text-center'>
          <h1 className='text-3xl font-bold font-orbitron text-slate-900 mb-4'>Project Not Found</h1>
          <p className='text-slate-600 mb-8'>The project you are looking for does not exist or has been relocated.</p>
          <Link
            to='/'
            className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-md shadow-cyan-600/25 transition'
          >
            <FaArrowLeft className='text-xs' />
            <span>Back to Portfolio</span>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const prevProject = currentIndex > 0 ? projectData[currentIndex - 1] : null
  const nextProject = currentIndex < projectData.length - 1 ? projectData[currentIndex + 1] : null

  return (
    <div className='min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-cyan-500 selection:text-white'>
      <Navbar />

      <main className='pt-28 pb-20'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8'>
          
          {/* Top Breadcrumb & Back Navigation */}
          <div className='flex flex-wrap items-center justify-between gap-4 mb-8'>
            <Link
              to='/'
              className='inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-cyan-700 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-xs transition hover:bg-slate-50'
            >
              <FaArrowLeft className='text-xs' />
              <span>Back to Projects</span>
            </Link>

            <div className='flex items-center gap-2 text-xs font-medium text-slate-400'>
              <Link to='/' className='hover:text-cyan-700'>Home</Link>
              <span>/</span>
              <span className='text-cyan-800 font-semibold'>{project.displayCategory || 'Project'}</span>
              <span>/</span>
              <span className='text-slate-700 truncate max-w-[150px] sm:max-w-xs'>{project.title}</span>
            </div>
          </div>

          {/* Project Hero Header */}
          <div className='mb-12'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 font-orbitron leading-tight'>
              {project.title}
            </h1>

            <p className='text-base sm:text-xl text-slate-600 max-w-4xl leading-relaxed font-normal'>
              {project.description}
            </p>
          </div>

          {/* Project Featured Showcase Image */}
          <div className='mb-16'>
            <div className='relative rounded-3xl overflow-hidden bg-white border-4 border-white shadow-2xl w-full'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto block rounded-2xl'
              />
            </div>
          </div>

          {/* Highlights Quote Box */}
          {project.highlights && (
            <div className='mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-50/90 via-white to-blue-50/90 border border-cyan-200/80 shadow-sm flex items-start gap-4'>
              <div className='w-12 h-12 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-700 shrink-0 text-xl shadow-xs'>
                <FaLightbulb />
              </div>
              <div>
                <h3 className='text-sm font-bold uppercase tracking-wider text-cyan-800 mb-1.5'>
                  Engineering Highlights & Scope
                </h3>
                <p className='text-sm sm:text-base text-slate-700 leading-relaxed font-normal'>
                  {project.highlights}
                </p>
              </div>
            </div>
          )}

          {/* Structured Detail Grid: Left (Overview & Features), Right (Metadata) */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20'>
            
            {/* Left Column: Long Description & Features */}
            <div className='lg:col-span-8 space-y-12'>
              
              {/* Detailed Overview */}
              <div>
                <h2 className='text-2xl sm:text-3xl font-bold text-slate-900 font-orbitron mb-4 pb-3 border-b border-slate-200'>
                  Project Overview
                </h2>
                <div className='text-slate-700 leading-relaxed sm:leading-8 text-base sm:text-lg space-y-4 font-normal'>
                  <p>{project.longDescription || project.description}</p>
                </div>
              </div>

              {/* Key Features & Capabilities */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h2 className='text-2xl sm:text-3xl font-bold text-slate-900 font-orbitron mb-6 pb-3 border-b border-slate-200'>
                    Key Features & Functionalities
                  </h2>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {project.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className='p-4 sm:p-4.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5 hover:border-cyan-300 transition'
                      >
                        <div className='w-5.5 h-5.5 rounded-full bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-600 shrink-0 mt-0.5'>
                          <FaCircleCheck className='text-xs' />
                        </div>
                        <span className='text-sm sm:text-base text-slate-800 font-medium leading-relaxed'>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Project Metadata Sidebar */}
            <div className='lg:col-span-4'>
              <div className='lg:sticky lg:top-24 space-y-6'>
                
                {/* Quick Info Card */}
                <div className='p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm'>
                  <h3 className='text-base font-bold text-slate-900 uppercase tracking-wider mb-6 pb-3 border-b border-slate-100'>
                    Project Metadata
                  </h3>

                  <div className='space-y-4 text-sm'>
                    <div>
                      <span className='text-xs text-slate-400 block font-medium uppercase'>Role</span>
                      <span className='font-semibold text-slate-800'>{project.role || 'Full-Stack Developer'}</span>
                    </div>

                    <div>
                      <span className='text-xs text-slate-400 block font-medium uppercase'>Timeline / Year</span>
                      <span className='font-semibold text-slate-800'>{project.duration || '2025 - 2026'}</span>
                    </div>

                    <div>
                      <span className='text-xs text-slate-400 block font-medium uppercase'>Classification</span>
                      <span className='font-semibold text-slate-800'>{project.displayCategory || 'Web Application'}</span>
                    </div>

                    <div>
                      <span className='text-xs text-slate-400 block font-medium uppercase'>Status</span>
                      <span className='inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full mt-1'>
                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500' />
                        <span>Completed & Deployed</span>
                      </span>
                    </div>
                  </div>

                  {/* Direct Action Buttons */}
                  <div className='mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3'>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm shadow-cyan-600/20 transition'
                      >
                        <span>Open Live Site</span>
                        <FaArrowUpRightFromSquare className='text-[10px]' />
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition'
                      >
                        <FaGithub className='text-sm' />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Technologies Used Card */}
                <div className='p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm'>
                  <h3 className='text-base font-bold text-slate-900 uppercase tracking-wider mb-4 pb-3 border-b border-slate-100'>
                    Tech Stack & Tools
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((technology, tIdx) => (
                      <span
                        key={tIdx}
                        className='px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200'
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Pagination: Previous & Next Project Navigation */}
          <div className='pt-12 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {prevProject ? (
              <button
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className='group p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 shadow-sm text-left transition flex items-center gap-4 cursor-pointer'
              >
                <div className='w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-cyan-50 group-hover:text-cyan-700 flex items-center justify-center text-slate-600 transition shrink-0'>
                  <FaArrowLeft className='text-xs' />
                </div>
                <div>
                  <span className='text-[11px] font-bold text-slate-400 uppercase tracking-wider block'>Previous Project</span>
                  <span className='text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-700 transition line-clamp-1'>
                    {prevProject.title}
                  </span>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextProject ? (
              <button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className='group p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 shadow-sm text-right transition flex items-center justify-end gap-4 cursor-pointer sm:col-start-2'
              >
                <div>
                  <span className='text-[11px] font-bold text-slate-400 uppercase tracking-wider block'>Next Project</span>
                  <span className='text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-700 transition line-clamp-1'>
                    {nextProject.title}
                  </span>
                </div>
                <div className='w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-cyan-50 group-hover:text-cyan-700 flex items-center justify-center text-slate-600 transition shrink-0'>
                  <FaArrowRight className='text-xs' />
                </div>
              </button>
            ) : null}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProjectDetails
