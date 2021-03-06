import React from 'react'
import './contact.css';
export default function Contact() {
  return (
    <div id="contact">
        <h1 className="section-title">Contact Us</h1>
        <div className="content-container">
            <div>
                <h1 className="contact-header" >Have further questions? <br></br> We'd love to hear from you.</h1>
            </div>
            <div  style={{position:'relative', paddingTop:'3rem'}}>
            <div  data-aos='zoom-in' data-aos-duration="1000"  >
                <img className="contact-image" src="/assets/contact-graphic.png" alt="contact-us" />
            </div>
            <div data-aos='zoom-in' data-aos-duration="1000"  className="email-contact"  >
              <h1 style={{textAlign:'center'}}>Email</h1>
              <br></br>
            <h2 className="email">youngvisionariesllc@gmail.com</h2>
            </div>
            <div data-aos='zoom-in' data-aos-duration="1000"  className="call-contact"  >
              <h1 style={{textAlign:'center', color:'white'}}>Call or text</h1>
            <h2 className="phone">(281) 643-0687</h2>
            </div>
            </div>
        </div>
    </div>
  )
}
