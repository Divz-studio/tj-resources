import React, { useRef } from 'react'
import edit from "../assets/icons/edit.svg"
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../Firebase'

const NewItem = () => {
    const nameRef = useRef()
    const quantityRef = useRef()

    const addItem = (e) => {
        e.preventDefault()

        // Get Time
        const date = new Date()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const formatedMinute = minute <= 9 ? `0${minute}` : minute
        const ampm = hour >= 12 ? 'pm' : 'am'
        const colRef = collection(db, 'equipments')

        // Add document to firebase
        addDoc(colRef, {
            name: nameRef.current.value,
            quantity: quantityRef.current.value,
            time: `${hour}:${formatedMinute} ${ampm}`
        })

        nameRef.current.value = ''
        quantityRef.current.value = ''

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
                <div className="modal__input">
                            <p>Quantity</p>
                            <input ref={quantityRef} type="text" />
                        </div>
            <button className="modal__btn">Add</button>
            </form>
            
        </div>
    </div>
  )
}

export default NewItem