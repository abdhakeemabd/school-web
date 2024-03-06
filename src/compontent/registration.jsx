import React from 'react'
import '../style/registration.css'
function Registration() {
  return (
    <section className='registration-section' >
        <div className='container'>
            <div className="row align-items-center">
                <div className=" col-lg-7 col-md-6 col-12 ">
                   <div className="col-lg-9  col-md-12 col-12">
                   <h1 className='mb-3 text-white sec-title'>Register Now</h1>
                    <p className='mb-3 text-white sec-dec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo sint. Neque dolore adipisci soluta quasi velit sit quae debitis!</p>
                   </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                   <div className="registration">
                    <h2> What are you waiting for?</h2>
                    <h6>Get your free personalized course list</h6>
                    <form action="#" method='POST' >
                        <input type="text"  name="name" placeholder='enter your name' />
                        <input type="email"  name="email" placeholder='enter email' />
                        <input type="number"  name="number" placeholder='enter number' />
                        <input type="text"  name="name" placeholder='enter your name' />

                    </form>
                   </div>
                </div>
            </div>
        </div>
    </section >
  )
}

export default Registration
