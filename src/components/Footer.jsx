import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
            <nav>
                <div className="container">
                    <div className="logo">TJ Resources</div>
                    <div className="nav-links">
                        {/* <a href="">Home</a>
                        <a href="">Services</a>
                        <a href="">About Us</a>
                        <a href="">Contact</a>
                        <a href="">Admin Login</a> */}
                        <Link to='/'>Home</Link>
                        <a href="#services">Services</a>
                        <Link to='/about'>About Us</Link>
                        <Link to='/contact'>Contact</Link>
                        <a href="#">Admin Login</a>
                    </div>
                </div>
                <p className='copyright'>Copyright @ 2023</p>
            </nav>
            </footer>
  )
}

export default Footer