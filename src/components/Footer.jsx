import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
            <nav>
                <div className="container">
                    <div className="logo">TJ Resources</div>
                    <div className="nav-links">
                        <Link to='/'>Home</Link>
                        <a href="#services">Services</a>
                        <Link to='/about'>About Us</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to="/login">Admin Login</Link>
                    </div>
                </div>
                <p className='copyright'>Copyright @ 2023</p>
            </nav>
            </footer>
  )
}

export default Footer