import React, { useState, useEffect } from 'react';
import '../style/home.css'
import '../style/icons.css'
import Banner from '../compontent/banner';
import Course from '../compontent/coures';
import CourseCard from '../compontent/course-card';
import Funfact from '../compontent/funfac';
import Classes from '../compontent/classes';
import Certificate from '../compontent/certificate';
import Testimonial from '../compontent/testimonial';
import BlogSlider from '../compontent/blogslider';
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';


function Home() { 
 
  return (
      <div className='main-home'>
            <Navbar></Navbar>
        <Banner></Banner>
        <BlogSlider></BlogSlider>
        <Course></Course>
        <CourseCard></CourseCard>
        <Certificate></Certificate>
        <Funfact></Funfact>
        <Testimonial></Testimonial>
        <Classes></Classes>
        <Footer></Footer>
    </div>
  )
}

export default Home
