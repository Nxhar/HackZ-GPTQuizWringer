import React from 'react'
import TextPage from './Page'
import ImagePage from './Page2'
import Navbar from './Navbar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'

function App() {
  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Text' element={<TextPage/>} />
        <Route path='/Image' element={<ImagePage/>} />
      </Routes>
      

    </div>
  )
}

export default App