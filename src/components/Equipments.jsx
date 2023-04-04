import React from 'react'
import Table from './Table'

const Equipments = () => {
  return (
    <div className="equipments">
        <div className="head">
            <div className="left">
                <h3>Equipments</h3>
                <p>Last updated an hour ago</p>
            </div>
            <div className="primary-btn-medium">Add new item</div>
        </div>
        <Table />
    </div>
  )
}

export default Equipments