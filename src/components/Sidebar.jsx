import React from 'react'
import profileImg from '../assets/profile.svg'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <div className="logo">
                TJ Resources
            </div>
            <div className="profile">
                <img src={profileImg} alt="" />
                <div className="profile-name">Admin</div>
            </div>
            <div className="side-nav-items">
                <NavLink className={({isActive}) => isActive ? "side-nav-item active" : "side-nav-item"} to='inventory'>
                    <i className="icon menu-icon"></i>
                    Inventory
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "side-nav-item active" : "side-nav-item"} to='history'>
                    <i className="icon history-icon"></i>
                    History
                </NavLink>
                <div className="side-nav-item">
                    <i className="icon job-icon"></i>
                    New Job
                </div>
            </div>
        </div>
        <div className="side-nav-item logout">
            <i className="icon logout-icon"></i>
            Log out
        </div>
    </div>
  )
}

export default Sidebar