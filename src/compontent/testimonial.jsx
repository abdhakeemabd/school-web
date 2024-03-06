import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bajal from "../../src/assets/img/team/bachu.jpg"
import Jimsh from "../../src/assets/img/team/anaz.jpg"
import "../style/testimonial.css"

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        autoplay:false,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 1,
        dots:false,
        arrows:true,
        slidesToScroll: 1,
      };
  return (
    <div>
      <section className="testimonial">
        <div className="container">
         <div className="w-3/4 m-auto overflow-hidden rounded-20">
          <div className='mt-20'>
           <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className='bg-l-blue gap-6' data-aos="fade-down">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className='testi-head flex justify-center items-center'>
                      <img src={d.img} alt='' className='test-img img-fluid'/>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className='testi-cont flex flex-col justify-center items-center '>
                      <h4 className='text-xl-semibold'>{d.name}</h4>
                      <h5 className='text-xl-semibold'>{d.possion}</h5>
                      <p className='trancate-5'>{d.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
           </Slider>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
const data = [
    {
      name:'Bajal',
      img:Bajal,
      review: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
      possion:'CEO'
     
    },
    {
      name:'bachu',
      img: Jimsh,
      review: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
      possion:'CMO'
    },
    {
        name:'bachu',
        img: Jimsh,
        review: 'Lorem Ipsum has been the industrys standard dmmy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
        possion:'MANAGER'

      },
  
  ]
export default Testimonial;
