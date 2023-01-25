import React from 'react'
import {Link} from 'react-router-dom'
import { BiPhoneCall} from "react-icons/bi";
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='nav__left'>
            <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt=""/>
            <span>Course</span>
        </div>
        <div className='nav__middle'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/add" className='link'>Add Items</Link>
            <Link to="/about" className='link'>About Us</Link>
            <Link to="/course" className='link'>Courses</Link>
            <Link to="/element" className='link'>Elements</Link>
            <Link to="/contact" className='link'>Contact Us</Link>
        </div>
        <div className='nav__right'>
            <div className='nav__right__icon'>
                <BiPhoneCall/>
            </div>
            <div className='nav__right__numbers'>
                <span>+43 4566 7788 2457</span>
            </div>
        </div>

    </nav>
  )
}

export default Navbar