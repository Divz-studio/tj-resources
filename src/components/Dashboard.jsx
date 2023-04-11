import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar />
        <div className="dashboard-pages">
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard