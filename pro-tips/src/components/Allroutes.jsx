import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Registration from './Registration'

function Allroutes() {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/registration' element={<Registration/>}/>
    </Routes>
  )
}

export default Allroutes