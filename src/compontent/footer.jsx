import React from 'react'
import '../style/footer.css';
import Instagragm from "../assets/img/img/insta.png";
import Facebook from '../assets/img/img/fb.png';
import Logo from '../assets/logo/logo-t.png'
import Map from '../assets/icons/map.png'
import Phone from '../assets/icons/phone.png'
import Msm from '../assets/icons/mail.png'
function Footer() {
  return (
    <section className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="logo">
              <img className='logo' src={Logo} alt="" />
            </div>
            <p className='sec-dec'>
              Lorem ipsum dolor sit amet. <br />
              Lorem ipsum dolor sit amet.
            </p>
            <div className='social'>
              <img className='social-media-links' src={Instagragm}></img>
              <img className='social-media-links' src={Facebook}></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
          <h3 className="widget-title">Explore</h3>
          <ul className='footer-contact'>
            <li> Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
          </div>
          <div className="col-lg-3">
          <h3 className="widget-title">Contact</h3>
         <ul className='contact-right'>
         <li>
            {/* <img className="img-fluid"  src={Map} /> */}
            <a href ="">JDT Islam, Jamiath Hill,
              Marikunnu P O, Calicut - 12,
              Kerala, India
            </a>
          </li>
          <li>
            {/* <img className="img-fluid"  src={Phone} /> */}
            <a  className='d-block' href="tel:+91 4952 731 420">+91 4952 731 420</a>
            <a  className='d-block' href="tel:+91 6282 014 275">+91 6282 014 275</a>
          </li>
          <li>
            {/* <img className="img-fluid"  src={Msm} /> */}
            <a className='d-block' href="mailto:jdtislamclt12@gmail.com">jdtislamclt12@gmail.com</a>
            <a className='d-block' href="mailto:info@jdtislam.org">info@jdtislam.org</a>
          </li>
         </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
