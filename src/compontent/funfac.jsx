import React from 'react'
import '../style/funfac.css'
import Fac from '../assets/img/img/1.png';
import Fac2 from '../assets/img/img/2.png';
import Fac3 from '../assets/img/img/3.png';

function Funfact() {
  return (
   <section className='fun-fact-section'>
        <div className='container'>
            <div className="col-12 col-md-12" data-aos="fade-down">
                <h2 className='sec-title text-white'>
                Our Global Community
                </h2 >
                <p className='sec-dec text-white'> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div> 
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                   <div className="fun-factor">
                    <img src ={Fac} />
                    <h2> <span  data-counter="27" className="timer">27</span></h2>
                    <p>Million Learners</p>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                   <div className="fun-factor">
                    <img src ={Fac2} />
                    <h2> <span  data-counter="27" className="timer">27</span></h2>
                    <p>Million Learners</p>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                   <div className="fun-factor">
                    <img src ={Fac3} />
                    <h2> <span  data-counter="27" className="timer">27</span></h2>
                    <p>Million Learners</p>
                   </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-12">
                   <div className="fun-factor">
                    <img src ={Factor} />
                    <h2> <span  data-counter="27" className="timer">27</span></h2>
                    <p>Million Learners</p>
                   </div>
                </div> */}
            </div>
        </div>
   </section>
  )
}

export default Funfact
