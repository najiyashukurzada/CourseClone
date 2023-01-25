import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import Add from '../pages/Add/Add'
import Contact from '../pages/Contact/Contact'
import Course from '../pages/Couses/Course'
import Home from '../pages/Home/Home'
import Element from '../pages/Elements/Element'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/element' element={<Element />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Routing