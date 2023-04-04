import heroImg from '../assets/Rectangle 3.png';
import client from '../assets/Frame 1.png'
import PrimaryBtn from '../components/PrimaryBtn';

import img1 from '../assets/Rectangle 11.png'
import img2 from '../assets/Rectangle 12.png'
import img3 from '../assets/Rectangle 13.png'
import TestimonialGrid from '../components/TestimonialGrid';
import Cta from '../components/Cta';
import Services from '../components/Services';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1>The <span className="blue">networking</span> solution for your business</h1>
                        <PrimaryBtn label="Contact Us" />
                    </div>
                    <img src={heroImg} alt="" className="hero-image" />
                </div>
            </div>
            <div className="clients container">
                <img src={client} alt="" />
            </div>
            <Content head='We provide our clients with top notch networking and installation services' body='We provide services ranging from networking(LAN, PAN...) and Solar pannel installation' />
            <Services />
            <section className="team container">
                <div className="team-content">
                    <h3>Our team of highly skilled professionals is committed to providing excellent customer service</h3>
                    <p>We work closely with our clients to understand their unique needs and develop customized solutions that meet their specific requirements.</p>
                </div>
                <div className="image-grid">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </section>
            <section className="testimonial container">
                <div className="testimonial-content">
                    <h3>What our clients say about us</h3>
                    <p>Here's what our clients got to say after experiencing our wonderful services</p>
                </div>
                <div className="testimonial-grid">
                    <TestimonialGrid />
                </div>
            </section>
            <Cta />
        </div>
    )
}

export default Home;