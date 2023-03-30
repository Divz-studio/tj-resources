import React from 'react'
import { testimonials } from '../constants'
import TestimonialCard from './TestimonialCard'

const TestimonialGrid = () => {
  return (
    <div className="testimonial-grid">
        {
            testimonials.map(testimonial => {
                return (
                    <TestimonialCard key={testimonial.id} img={testimonial.img} client={testimonial.client} text={testimonial.text} />
                )
            })
        }
    </div>
  )
}

export default TestimonialGrid