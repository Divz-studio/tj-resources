import React from 'react'
import Tab from '../components/Tab'
import DashboardNav from '../components/DashboardNav'
import HistoryTable from '../components/HistoryTable'

const History = () => {
  return (
    <div className="history">
      <DashboardNav title="History" showTag={false} searchPlaeholder="search history" />
      <Tab title="Today" update={false} btn={false} table={<HistoryTable />} />
      <Tab title="Yesterday" update={false} btn={false} table={<HistoryTable />} />
    </div>
  )
}

export default History