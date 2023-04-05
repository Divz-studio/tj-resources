import React from 'react'

const Tab = ({ title, table, update, btn }) => {
  return (
    <div className="tab">
        <div className="head">
            <div className="left">
                <h3>{title}</h3>
               {update && <p>Last updated an hour ago</p>}
            </div>
            {btn && <div className="primary-btn-medium">Add new item</div>}
        </div>
        { table }
    </div>
  )
}

export default Tab