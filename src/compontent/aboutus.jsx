import React from 'react'
import Aboutimg from '../assets/img/img/mission.jpg'
import Vission from '../assets/img/img/mission1.jpg'
function AboutUs() {
  return (
    <div>
      <section className='about-sec'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-8 col-12'data-aos="fade-down">
              <h2> About Us</h2>
              <p>At JDT Islam, we take immense pride in our century-long legacy of compassion and dedication in transforming the lives of underprivileged children through holistic care and education. Established in 1922, our institution has stood as a testament to unwavering commitment, providing a nurturing environment for orphans and children in need for a remarkable 100 years.
              </p>
              <div className="about-service">
                <h6>Our Services:</h6>
                <p>1. Orphanage Care: For a century, we have provided a nurturing and supportive environment for orphaned children, ensuring their physical, emotional, and psychological well-being. Our caring staff and volunteers work tirelessly to create a family-like atmosphere where every child feels loved and valued.</p>
                <p>2. Quality Education: Our educational institutions have, for 100 years, offered a comprehensive curriculum that goes beyond academic excellence. We focus on character development, critical thinking, and creativity to prepare our students for a successful future.</p>
                <p>3. Empowerment through Skills: As part of our commitment to holistic development, we have offered vocational training and skill-building programs that empower our students with practical abilities and self-reliance.</p>
                <h6>Our Impact:</h6>
                <p>Over the course of 100 years, we have witnessed the transformation of countless lives, as our students go on to become successful professionals, responsible citizens, and pillars of their communities. Their success stories inspire us to continue our mission with unwavering dedication.</p>
                <p>Together, let’s celebrate 100 years of compassion and create a world where every child’s dreams can soar, and their potential knows no bounds.</p>
              </div>
            </div>
            <div className="col-md-4 col-12"data-aos="fade-down">
                <img src={Aboutimg} className="img-fluid" />
            </div>
          </div>
        </div>
       </section>
       <section className='bg-l-grenn text-white'>
        <div className="container">
         <div className="row align-items-center justify-content-center">
             <div className=" col-xl-7 col-lg-6 col-md-12" data-aos="fade-right">
              <img src={Vission} className='vission-img' />
             </div>
             <div className="col-xl-5 col-lg-6 col-md-12" data-aos="fade-left">
              <div className="row">
               <div className="col-12" >
                <h5>MISSION</h5>
                 <p>
                 Through comprehensive care and education, we aim to foster academic excellence, character building, and life skills for all students, nurturing a sense of belonging and empowering responsible, self-reliant citizens, regardless of their background, to become valuable contributors to the global society and lead enriched lives.
                 </p>
               </div>
               <div className="col-12">
                <h5>VISION</h5>
                 <p>
                 Our vision is to create a globally renowned educational institution that sets the highest standards, offering a culturally rich and holistic upliftment for all students, including orphans and underprivileged children, providing them with essential tools and support to break the cycle of poverty and thrive academically and personally.
                 </p>
               </div>
              </div>
             </div>
           </div>
        </div>
       </section>
    </div>
  )
}

export default AboutUs
