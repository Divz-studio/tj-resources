import React, { useState } from 'react'
import Modal from './Modal'

const Tab = ({ title, table, update, btn }) => {
  const [toggleModal, setToggleModal] = useState(true)

  return (
    <div className="tab">
        <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} />
        <div className="head">
            <div className="left">
                <h3>{title}</h3>
               {update && <p>Last updated an hour ago</p>}
            </div>
            {btn && <div onClick={() => setToggleModal(true)} className="primary-btn-medium">Add new item</div>}
        </div>
        { table }
    </div>
  )
}

export default Tab