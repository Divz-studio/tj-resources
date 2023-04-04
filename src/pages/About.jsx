import React from 'react'
import Content from '../components/Content'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Services from '../components/Services'
import heroImg from '../assets/Rectangle 3.png';
import gridImg from '../assets/Rectangle 17.png'

const About = () => {
  return (
    <>
        <div className="hero-section">
                <div className="container">
                    <div className="hero-content about">
                        <h1>About Us</h1>
                    </div>
                    <img src={heroImg} alt="" className="hero-image" />
                </div>
            </div>
        <Services />
        <Content head="we are dedicated to providing top-quality solutions to meet the diverse needs of our clients" body="We understand that in today's digital age, reliable computer networking is essential to the success of any business or organization. That's why we offer a range of networking services that include network design, installation, configuration, and maintenance. Whether you need to upgrade your existing network or install a new one, we have the expertise and experience to get the job done right." />
        <section className="grid">
            <div className="container">
                <div className="col">
                    <div className="row"><h4>Our team of experts can help you harness the power of the sun to reduce your carbon footprint and lower your energy costs</h4></div>
                    <img src={gridImg} alt="" />
                </div>
                <div className="col">
                    <img src={gridImg} alt="" />
                    <div className="row"><h4> We understand that security is a top priority for businesses and homeowners alike, and that's why we offer a range of CCTV camera solutions to suit your needs. From basic surveillance systems to advanced systems with facial recognition technology</h4></div>
                </div>
            </div>
        </section>
        <Cta />
    </>
  )
}

export default About