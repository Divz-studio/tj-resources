import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import NavMenu from "./NavMenu";
import { useState } from "react";

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleMenuBar = () => {
        setToggleMenu(prevToggleMenu => !prevToggleMenu)
        console.log(toggleMenu)
    }

    return (
        <nav style={{position: toggleMenu === true && "sticky", top: 0}}>
            <div className="container">
            <NavMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                <div className="logo">TJ Resources</div>
                <div className="nav-links">
                    {/* <a href="" id="active">Home</a>
                    <a href="">Services</a>
                    <a href="">About Us</a>
                    <a href="">Contact</a> */}
                    <NavLink to='/' className={({isActive}) => isActive && 'active'}>Home</NavLink>
                    <a href="#services">Services</a>
                    <NavLink to='/about' className={({isActive}) => isActive && 'active'}>About Us</NavLink>
                    <NavLink to='/contact' className={({isActive}) => isActive && 'active'}>Contact</NavLink>
                </div>
                <FaBars className="hamburger-menu" onClick={toggleMenuBar} />
            </div>
        </nav>
    )
}

export default NavBar;