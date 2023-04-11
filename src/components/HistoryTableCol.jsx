import React from 'react'

const HistoryTableCol = ({ item, quantity, date, time, status }) => {
  return (
    <div className="tr table-col">
            <div className="table-data item">
                {item}
            </div>
            <div className="table-data quantity">
                {quantity}
            </div>
            <div className="table-data date">
                {date}
            </div>
            <div className="table-data time">
                {time}
            </div>
            <div className="table-data action">
                <div className={`history-tag ${status}`}>
                    {status}
                </div>
            </div>
        </div>
  )
}

export default HistoryTableCol