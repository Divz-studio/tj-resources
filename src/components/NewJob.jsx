import React from 'react'
import edit from "../assets/icons/edit.svg"

const NewJob = () => {
  return (
    <div className="newJob modal">
        <div className="modal__container">
            <div className="modal__header">
               <div className='modal__header-text'>
                <img src={edit} alt="" />
                <h4>New Job</h4>
               </div>
                <p className="small">This form should be filled when in need of equipments</p>
            </div>
            <div className="modal__form">
                <div className="modal__input">
                    <p>Name</p>
                    <input type="text" />
                </div>
                <div className="modal__input">
                    <p>Location</p>
                    <input type="text" />
                </div>
                <div className="modal__input modal__description">
                    <p>Description</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="newJob__equipments">
                    <div className="newJob__equipment">
                        <div className="newJob__input-equipment">
                            <p>Equipment</p>
                            <select name="" id="">
                                <option value="Single Face Plate">Single Face Plate</option>
                                <option value="Paint Buckets">Paint Buckets</option>
                            </select>
                        </div>
                        <div className="newJob__input-quantity">
                            <p>Quantity</p>
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="newJob__add">
                        <div className="icon add-icon"></div>
                        Add more equipments
                    </div>
            </div>
            </div>
            <div className="modal__btn">Proceed</div>
            
        </div>
    </div>
  )
}

export default NewJob