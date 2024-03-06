import React from 'react'
import '../style/about.css'
import PageBanner from '../compontent/pagebanner'
import AboutUs from '../compontent/aboutus'
import Funfact from '../compontent/funfac'
import Teachers from '../compontent/teachers'
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
function About() {
  return (
    <div className='about'>
      <Navbar></Navbar>
       <PageBanner></PageBanner>
       <AboutUs></AboutUs>
       <Funfact></Funfact>
       <Teachers></Teachers>
       <Footer></Footer>
    </div>
  )
}

export default About
