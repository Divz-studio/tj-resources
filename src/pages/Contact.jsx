import React from 'react'
import phone from '../assets/phone.svg'
import email from '../assets/mail.svg'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <div className="contact-hero container">
        <h1>Feel free to reach out to us</h1>
        <div className="info">
            <div className="phone-number">
                <img src={phone} alt="" />
                <p>+2349023928382   +2349023928382</p>
            </div>
            <div className="email">
                <img src={email} alt="" />
                <p>hello@tjresources.com</p>
            </div>
        </div>
      </div>
      <div className="container">  
      <form className="contact-form">
        <div className="col">
            <input type="text" className="small-input" placeholder='Name' />
            <input type="email" className="small-input" placeholder='Email' />
        </div>
        <input type="text" placeholder='Subject' />
        <textarea>Message</textarea>
        <div className="primary-btn large">Contact Us</div>
      </form>
      <div className="address">
        <h2>Where to find us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0799277634105!2d3.3302692148225423!3d6.636996023674699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b915b8c9cd0ab%3A0x2552d6d9ac16df69!2s88%20Oyemekun%20St%2C%20Ogba%20300001%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680257525943!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </>
  )
}

export default Contact