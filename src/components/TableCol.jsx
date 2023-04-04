import React from 'react'
import edit from '../assets/icons/job.svg'

const TableCol = ({ item, quantity, date, time }) => {
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
                <img src={edit} alt="" className='edit' />
            </div>
        </div>
  )
}

export default TableCol