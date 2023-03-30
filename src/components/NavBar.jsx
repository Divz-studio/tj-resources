import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="container">
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
            </div>
        </nav>
    )
}

export default NavBar;