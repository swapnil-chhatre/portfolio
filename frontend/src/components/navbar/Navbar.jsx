import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <image src={logo} alt='logo'/>
      <ul className='nav-menu'>
        <li>About Me</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Certifications</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar
