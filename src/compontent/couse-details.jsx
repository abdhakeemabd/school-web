import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../style/aboutpage.css';
import Swathi1 from '../assets/img/55.jpg';
import Swathi2 from '../assets/img/22.jpg';

function CourseDetails() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      imageUrl: Swathi1,
      name: 'Swathi',
      date: 'Oct.14,2021',
      description: 'JDT Islam College of Nursing qualified for the finals of the Kerala University of Health Science Intercollegiate Football Championship. The semifinals were held at KMCT Medical College from December 31 to January 3.JDT Islam College of Nursing came second in the tournament, beating Dr. Moopens Medical College, the former champions. There were 56 teams in total and JDT Islam College of Nursing qualified for the finals after winning 6 matches. The Interzone Competitions will be held at Calicut Medical College from January 15 to 17.',
    },
    {
      imageUrl: Swathi2,
      name: 'Hari',
      date: 'Oct.14,2021',
      description: 'JDT Islam College of Nursing qualified for the finals of the Kerala University of Health Science Intercollegiate Football Championship. The semifinals were held at KMCT Medical College from December 31 to January 3.JDT Islam College of Nursing came second in the tournament, beating Dr. Moopens Medical College, the former champions. There were 56 teams in total and JDT Islam College of Nursing qualified for the finals after winning 6 matches. The Interzone Competitions will be held at Calicut Medical College from January 15 to 17.',
    },
    // Add more courses as needed
  ];

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='course-details'>
      <section>
        <div className='container'>
          {courses.map((course, index) => (
            <div key={index} className="row border-bottom" onClick={() => handleShowModal(course)}>
              <div className="col-md-12 col-lg-5 col-12 py-3 mb-3 " data-aos="fade-up">
                <div className="post-img">
                  <img
                    className='blog-img'
                    src={course.imageUrl}
                    alt={course.name}
                    
                  />
                </div>
              </div>
              <div className='col-md-12 col-lg-7 py-3' data-aos="fade-up">
                <div className="post-details">
                  <h4 className='text-uppercase'>{course.name}</h4>
                  <h6 className='text-l-green'>{course.date}</h6>
                  <p>{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedCourse && (
        <Modal className='blog-modal' show={showModal} onHide={handleCloseModal} size='lg' centered>
          <Modal.Header closeButton>
            <Modal.Title>
             <div className="text-center">
             <img className='blog-img' src={selectedCourse.imageUrl} alt={selectedCourse.name} />
             </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className='text-bold'>{selectedCourse.name}</h4>
            <span className='text-l-green '>{selectedCourse.date}</span>
            <p className='mt-3'>{selectedCourse.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default CourseDetails;
