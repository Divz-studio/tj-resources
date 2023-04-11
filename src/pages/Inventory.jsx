import React, { useContext } from 'react'
import DashboardNav from '../components/DashboardNav'
import Tab from '../components/Tab'
import Table from '../components/Table'
import { AppContext } from '../context/AppContext'

const Inventory = () => {

  return (
    <div className="inventory">
        <DashboardNav title="Inventory" showTag={true} searchPlaeholder="Search for equipments" />
        <Tab title="Equipments" table={<Table />} update={true} btn={true} />
    </div>
  )
}

export default Inventory