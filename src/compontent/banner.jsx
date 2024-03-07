import React, { useState, useEffect, useRef } from 'react';
import Border from '../assets/img/11.jpg';
import '../style/banner.css';
function Banner() {
  const marqueeContentArray = [
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis unde cumque vitae?", link: "#" },
    { text: "Suspendisse potenti. Nam sit amet placerat lectus.", link: "#" },
    { text: "Vestibulum ut posuere turpis. Cras at elit et nisi condimentum volutpat.", link: "#" },
    { text: "Fusce aliquam mauris ac velit porta, sed facilisis elit feugiat.", link: "#" }
  ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (isPlaying) {
      marqueeElement.start();
    } else {
      marqueeElement.stop();
    }
    return () => {
      marqueeElement.stop();
    };
  }, [isPlaying]);

  const handleTogglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentContentIndex + 1) % marqueeContentArray.length;
    setCurrentContentIndex(nextIndex);
    marqueeRef.current.scrollAmount += 2;
  };

  const handlePrevious = () => {
    const previousIndex = (currentContentIndex - 1 + marqueeContentArray.length) % marqueeContentArray.length;
    setCurrentContentIndex(previousIndex);
    marqueeRef.current.scrollAmount -= 2;
  };

  return (
    <section className='home banner align-items-center' style={{ backgroundImage: `url(${Border})` }}>
      <div className='banner-inner'>
        <div className='container'>
          <div className="col-xl-8 col-lg-8" data-aos="fade-down">
            <div className='headerContainer'>
              <h1>JDT Islam School for Differently Abled</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-top d-flex">
        <marquee className="marquee align-items-center" ref={marqueeRef} direction="left">
          {marqueeContentArray.map((content, index) => (
            <a key={index} href={content.link} style={{ marginRight: '10px' }}>{content.text}</a>
          ))}
        </marquee>
        <div className="marquee-controls">
          <button onClick={handleTogglePlayPause}>
            {}
          </button>
          <button onClick={handlePrevious}><i className="fas fa-backward"></i></button>
          <button onClick={handleNext}><i className="fas fa-forward"></i></button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
