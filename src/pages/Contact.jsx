import React from 'react'
import phone from '../assets/phone.svg'
import email from '../assets/mail.svg'
import map from '../assets/Rectangle 4.png'
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
        <img src={map} alt="" className="map" />
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact