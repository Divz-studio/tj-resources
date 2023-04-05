import React from 'react'
import HistoryTableCol from './HistoryTableCol'

const HistoryTable = () => {
  return (
    <div className="table">
        <div className="tr table-head">
            <div className="table-data item">
                Items
            </div>
            <div className="table-data quantity">
                Quantity
            </div>
            <div className="table-data date">
                Date
            </div>
            <div className="table-data time">
                Time
            </div>
            <div className="table-data action">
                Action
            </div>
        </div>
        <div className="table-row">
            <HistoryTableCol item="Single Face Plate" quantity={1} date="Apr 25th, 2023" time="10:50am" status="added" />
            <HistoryTableCol item="Single Face Plate" quantity={20} date="Apr 25th, 2023" time="10:50am" status="deleted" />
            <HistoryTableCol item="Single Face Plate" quantity={2} date="Apr 25th, 2023" time="10:50am" status="deleted" />
            <HistoryTableCol item="Single Face Plate" quantity={20} date="Apr 25th, 2023" time="10:50am" status="deleted" />
            <HistoryTableCol item="Single Face Plate" quantity={15} date="Apr 25th, 2023" time="10:50am" status="added" />
        </div>
    </div>
  )
}

export default HistoryTable