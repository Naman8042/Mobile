import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Second from './pages/Second'
import Third from './pages/Third'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/page2" element={<Second/>}/>
      <Route path="/page3" element={<Third/>}/>
    </Routes>
  )
}

export default App