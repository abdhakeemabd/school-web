import React from 'react';
import Slider from 'react-slick';
import Teacher from '../assets/img/teacher.jpg';
import '../style/teacher.css';

function Teachers() {
  const settings = {
    dots: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 2000,
    focusOnHover:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='teachers-section'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 '>
            <h2 className='sec-title text-center'>Mentors</h2>
          </div>
          <div className='col-12'>
            <Slider {...settings}>
              <div className='mb-3'>
                <div className='teacher-card'>
                  <img className='img-fluid' src={Teacher} alt='' />
                  <div className='teacher-info'>
                    <h4>Muhammed Nihad</h4>
                    <h6>Physics Teacher</h6>
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <div className='teacher-card'>
                  <img className='img-fluid' src={Teacher} alt='' />
                  <div className='teacher-info'>
                    <h4>Muhammed Nihad</h4>
                    <h6>Physics Teacher</h6>
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <div className='teacher-card'>
                  <img className='img-fluid' src={Teacher} alt='' />
                  <div className='teacher-info'>
                    <h4>Muhammed Nihad</h4>
                    <h6>Physics Teacher</h6>
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <div className='teacher-card'>
                  <img className='img-fluid' src={Teacher} alt='' />
                  <div className='teacher-info'>
                    <h4>Muhammed Nihad</h4>
                    <h6>Physics Teacher</h6>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
