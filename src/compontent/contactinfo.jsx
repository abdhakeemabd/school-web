import React, { useState } from 'react';
import axios from 'axios';
import Phone from '../assets/img/img/phone.png';
import SMS from '../assets/img/img/sms.png';
import Address from '../assets/img/img/location.png';
import MapContainer from '../compontent/map'



function ContactInfo () {
  const url="https://reqres.in.api/login"
  const [data,setData] = useState({
    name:'',
    email:'',
    phone:'',

  });
  return (
    <div>
      <section className="contact_us">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="contact_inner">
                        <div className="row">
                            <div className="col-md-10" data-aos="fade-left">
                                <div className="contact_form_inner">
                                    <div className="contact_field">
                                        <h3>Contatc Us</h3>
                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <input type="text" className="form-control form-group" placeholder="Name" required />
                                        <input type="email" className="form-control form-group" placeholder="Email" required />
                                        <input type="Number" className="form-control form-group" placeholder="Phone Number" required />

                                        <textarea className="form-control form-group" placeholder="Message"></textarea>
                                        <button className="contact_form_submit">Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 h-sm-none"   >
                                <div className="right_conatct_social_icon d-flex align-items-end">
                                <div className="socil_item_inner d-flex">
                                   <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_sec text-white" data-aos="fade-right">
                            <h4>Contact Info</h4>
                            <div className="d-flex info_single align-items-center">
                                {/* <i className="fas fa-headset"></i> */}
                                <img src={Phone} className="cont-icons" />
                                <span><a href="tel:+91 4952 731 420" className="text-white"></a>+91 4952 731 420</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                {/* <i className="fas fa-envelope-open-text"></i> */}
                                <img src={SMS} className="cont-icons" />
                                <span ><a className='text-white' href="mailto:info@jdtislam.org">info@jdtislam.org</a></span> <br />
                                {/* <span className='text-white'><a href="mailto:jdtislamclt12@gmail.com">jdtislamclt12@gmail.com</a></span> */}
                            </div>
                            <div className="d-flex info_single align-items-center">
                                {/* <i className="fas fa-map-marked-alt"></i> */}
                                <img src={Address} className="cont-icons" />

                                <span>JDT Islam, Jamiath Hill,Marikunnu P O, Calicut - 12,Kerala, India</span>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
            <MapContainer></MapContainer>
        </div>
    </section>
    </div>
  );
};
export default ContactInfo;






