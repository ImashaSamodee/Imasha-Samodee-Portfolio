import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

const App = () => {
  return (
    <div className='min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-cyan-500 selection:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
      </Routes>
    </div>
  )
}

export default App