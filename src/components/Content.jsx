import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import ctaImg from '../assets/Group 9.png'

const Content = ({ head, body }) => {
  return (
    <section className="network container">
        <div className="content-block">
            <h3>{ head }</h3>
            <p>{ body }</p>
            <PrimaryBtn label="Contact Us" />
        </div>
        <img src={ctaImg} alt="" />
    </section>
  )
}

export default Content