import React from 'react'
import edit from "../assets/icons/edit.svg"

const EditItem = () => {
  return (
    <div className="newItem modal">
        <div className="modal__container">
            <div className="modal__header">
               <div className='modal__header-text'>
                <img src={edit} alt="" />
                <h4>Edit Item</h4>
               </div>
            </div>
            <div className="modal__form">
                <div className="modal__input">
                    <p>Name of equipment</p>
                    <input type="text" value="Single Face Plate" />
                </div>
                <div className="newItem__input-quantity">
                            <p>Quantity</p>
                            <select name="" id="">
                                <option value="1">20</option>
                            </select>
                        </div>
            </div>
            <div className="modal__btn">Edit</div>
            
        </div>
    </div>
  )
}

export default EditItem