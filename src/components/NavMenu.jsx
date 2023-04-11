import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = ({ setToggleMenu, toggleMenu }) => {
  
  return (
    <div onClick={() => setToggleMenu(false)} className="nav-menu" style={{height: toggleMenu ? 'fit-content' : '0px'}}>
        <div className="container">
            <NavLink to='/' className={({isActive}) => isActive && 'active'}>Home</NavLink>
            <a href="#services">Services</a>
            <NavLink to='/about' className={({isActive}) => isActive && 'active'}>About Us</NavLink>
            <NavLink to='/contact' className={({isActive}) => isActive && 'active'}>Contact</NavLink>
        </div>
    </div>
  )
}

export default NavMenu