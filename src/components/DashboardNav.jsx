import React from 'react'
import search from '../assets/icons/search.svg'

const DashboardNav = () => {
  return (
    <div className="dashboard-nav">
        <div className="left">
            <h2>Inventory</h2>
            <div className="tag blue-tag">25 equipments available</div>
        </div>
        <div className="search-bar">
            <img src={search} alt="" />
            <input type="text" placeholder='search for equipment' />
        </div>
    </div>
  )
}

export default DashboardNav