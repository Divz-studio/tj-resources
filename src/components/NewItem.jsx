import React, { useRef } from 'react'
import edit from "../assets/icons/edit.svg"
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../Firebase'

const NewItem = () => {
    const nameRef = useRef()
    const quantityRef = useRef()

    const addItem = (e) => {
        e.preventDefault()
        const colRef = collection(db, 'equipments')

        addDoc(colRef, {
            name: nameRef.current.value,
            quantity: quantityRef.current.value,
        })

        // console.log(nameRef.current.value)
        // console.log(quantityRef.current.value)
    }

  return (
    <div className="newItem modal">
        <div className="modal__container">
            <div className="modal__header">
               <div className='modal__header-text'>
                <img src={edit} alt="" />
                <h4>Add new item</h4>
               </div>
            </div>
            <form className="modal__form" onSubmit={addItem}>
                <div className="modal__input">
                    <p>Name of equipment</p>
                    <input ref={nameRef} type="text" />
                </div>
                <div className="newItem__input-quantity">
                            <p>Quantity</p>
                            <select name="" id="" ref={quantityRef}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
            <button className="modal__btn">Add</button>
            </form>
            
        </div>
    </div>
  )
}

export default NewItem