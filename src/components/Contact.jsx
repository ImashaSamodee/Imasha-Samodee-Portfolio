import React, { useState } from 'react'
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaCircleCheck } from 'react-icons/fa6'
import { contactInfo, socialLinks } from '../assets/asstes'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ submitted: false, loading: false })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus({ submitted: false, loading: true })

    setTimeout(() => {
      setStatus({ submitted: true, loading: false })
      const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      window.open(mailtoUrl, '_blank')
    }, 600)
  }

  return (
    <section id='contact' className='py-24 relative overflow-hidden bg-white'>
      {/* Background Accent */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-100/40 rounded-full blur-[150px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 sm:px-8 relative z-10'>
        
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900'>
            Get In <span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Touch</span>
          </h2>
          <p className='text-slate-600 text-base sm:text-lg'>
            Have a project in mind, an employment opportunity, or just want to chat tech? Feel free to reach out.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          
          {/* Left Column: Direct Contact Info */}
          <div className='lg:col-span-5 space-y-6'>
            <div className='p-8 rounded-2xl bg-white border border-slate-200 shadow-sm'>
              <h3 className='text-xl font-bold text-slate-900 mb-6'>Contact Details</h3>
              
              <div className='space-y-6'>
                {/* Email Item */}
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className='flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-slate-50 transition'
                >
                  <div className='w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 group-hover:scale-105 transition'>
                    <FaEnvelope className='text-lg' />
                  </div>
                  <div>
                    <div className='text-xs text-slate-500 font-medium'>Email Directly</div>
                    <div className='text-sm sm:text-base font-semibold text-slate-800 group-hover:text-cyan-600 transition'>
                      {contactInfo.email}
                    </div>
                  </div>
                </a>

                {/* Location Item */}
                <div className='flex items-center gap-4 p-3 -mx-3'>
                  <div className='w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600'>
                    <FaLocationDot className='text-lg' />
                  </div>
                  <div>
                    <div className='text-xs text-slate-500 font-medium'>Location</div>
                    <div className='text-sm sm:text-base font-semibold text-slate-800'>
                      {contactInfo.location}
                    </div>
                  </div>
                </div>

                {/* Availability Item */}
                <div className='flex items-center gap-4 p-3 -mx-3'>
                  <div className='w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600'>
                    <FaCircleCheck className='text-lg' />
                  </div>
                  <div>
                    <div className='text-xs text-slate-500 font-medium'>Current Availability</div>
                    <div className='text-sm sm:text-base font-semibold text-emerald-700'>
                      {contactInfo.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className='pt-8 mt-8 border-t border-slate-200'>
                <p className='text-xs text-slate-500 uppercase tracking-wider font-semibold mb-4'>Follow & Connect</p>
                <div className='flex gap-3'>
                  {socialLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-11 h-11 rounded-xl bg-slate-100/80 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:border-cyan-400 hover:bg-cyan-50/80 transition shadow-sm'
                      aria-label={item.name}
                    >
                      <item.icon className='text-lg' />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className='lg:col-span-7'>
            <div className='p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm'>
              {status.submitted ? (
                <div className='text-center py-12'>
                  <div className='w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-5 text-2xl shadow-md animate-bounce'>
                    <FaCircleCheck />
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-2'>Message Prepared!</h3>
                  <p className='text-slate-600 text-sm max-w-md mx-auto mb-6'>
                    Thank you, <span className='text-cyan-700 font-bold'>{formData.name}</span>. Your email draft has been generated. You can also reach me directly at <a href={`mailto:${contactInfo.email}`} className='text-cyan-600 underline font-semibold'>{contactInfo.email}</a>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus({ submitted: false, loading: false })
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className='px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold border border-slate-200 transition cursor-pointer'
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2'>
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className='w-full px-4 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition text-sm'
                      />
                    </div>
                    <div>
                      <label className='block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2'>
                        Your Email *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className='w-full px-4 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2'>
                      Subject *
                    </label>
                    <input 
                      type="text" 
                      name="subject" 
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity / Inquiry" 
                      className='w-full px-4 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition text-sm'
                    />
                  </div>

                  <div>
                    <label className='block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2'>
                      Message *
                    </label>
                    <textarea 
                      name="message" 
                      rows="5" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, or requirements..." 
                      className='w-full px-4 py-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition text-sm resize-none'
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status.loading}
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-600/25 transition duration-300 active:scale-95 cursor-pointer disabled:opacity-50'
                  >
                    <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                    <FaPaperPlane className='text-xs' />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact