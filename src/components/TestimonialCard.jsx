import React from 'react'

const TestimonialCard = ({ img, client, text }) => {
  return (
    <div className="testimonial-card">
        <img src={img} alt="" />
        <h4>{ client }</h4>
        <p>{ text }</p>
    </div>
  )
}

export default TestimonialCard