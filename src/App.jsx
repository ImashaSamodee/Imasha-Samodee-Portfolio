import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Work from './components/Work'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App