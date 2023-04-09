import React from 'react'
import edit from "../assets/icons/edit.svg"

const NewItem = () => {
  return (
    <div className="newItem modal">
        <div className="modal__container">
            <div className="modal__header">
               <div className='modal__header-text'>
                <img src={edit} alt="" />
                <h4>Add new item</h4>
               </div>
            </div>
            <div className="modal__form">
                <div className="modal__input">
                    <p>Name of equipment</p>
                    <input type="text" />
                </div>
                <div className="newItem__input-quantity">
                            <p>Quantity</p>
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
            </div>
            <div className="modal__btn">Add</div>
            
        </div>
    </div>
  )
}

export default NewItem