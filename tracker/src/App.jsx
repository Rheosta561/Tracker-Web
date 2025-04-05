import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

import Calories from './Calories'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path = '/caloriesCalculator' element={<Calories/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App