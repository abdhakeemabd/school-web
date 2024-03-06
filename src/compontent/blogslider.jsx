import React from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/blog-slider.css'

function BlogSlider() {
    const data = [
        {
            name: 'Bajal',
            img: 'https://www.jdtislamnewhope.com/img/event1.jpeg',
            heading: 'Lorem Ipsum has been the industrys ',
            date: '24 Feb 2023'
        },
        {
            name: 'Bachu',
            img: 'https://www.jdtislamnewhope.com/img/onam1.jpeg',
            heading: 'Lorem Ipsum has been the industrys ',
            date: '24 Feb 2023'
        },
        {
            name: 'Jimsh',
            img: 'https://www.jdtislamnewhope.com/img/onam3.jpeg',
            heading: 'Lorem Ipsum has been the industrys ',
            date: '24 Feb 2023'
        },
        {
            name: 'Bachu',
            img: 'https://www.jdtislamnewhope.com/img/onam1.jpeg',
            heading: 'Lorem Ipsum has been the industrys ',
            date: 'CMO'
        },
    ];

    const settings = {
        infinite: true,
        speed: 200,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 2,
        autoplay:true,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:   1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
     <div className="blog-slider" data-aos="fade-up">
       <section>
       <div className="container">
        <h2 className="text-center  mb-3"> BLOG AND NEWS</h2>
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index}>
                  <Link to={"/blogs"}><div className="m-3">
                  <img className='blog-img' src={item.img} alt={item.name} />
                    <div className="blog-slider-body">
                    <div className="blog-content text-white">
                    <h5>{item.heading}</h5>
                    <p>{item.date}</p>
                    </div>
                    </div>
                  </div></Link>
                </div>
            ))}
        </Slider>
        </div>
       </section>
     </div>
    );
}

export default BlogSlider;
