import React from 'react'
import { useState } from 'react'

const Testimonial = () => {
    const[currentIndex, setCurrentIndex]=useState(0);
    const testimonials=[{name:"mogaji",quote:"the listening pot"}]
  return (
    <div>
             <div className='testimonials-quotes'>{testimonials[currentIndex].author}</div>
    <div>Testimonial</div>
    </div>
  )
}

export default Testimonial