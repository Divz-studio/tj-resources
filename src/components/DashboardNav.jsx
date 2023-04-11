import React from 'react'
import search from '../assets/icons/search.svg'

const DashboardNav = ({ title, showTag, searchPlaeholder }) => {

  return (
    <div className="dashboard-nav">
        <div className="left">
            <h2>{ title }</h2>
            {showTag && <div className="tag blue-tag">25 equipments available</div>}
        </div>
        <div className="search-bar">
            <img src={search} alt="" />
            <input type="text" placeholder={searchPlaeholder} />
        </div>
    </div>
  )
}

export default DashboardNav