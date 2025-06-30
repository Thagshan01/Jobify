import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Application from './pages/Application'
import ApplyJob from './pages/ApplyJob'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Application />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
      </Routes>    
      </div>
  )
}

export default App