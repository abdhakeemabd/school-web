// AboutPage.js
import React from 'react';
import Swathi1 from '../assets/img/swathi-1.jpg';
import Swathi2 from '../assets/img/swathi-2.jpg';
import '../style/aboutpage.css';
import CourseDetails from './CourseDetails';

function couseCad() {
  const courses = [
    {
      id: 1,
      imageUrl: Swathi1,
      name: 'Swathi',
      grade: '9th Standard',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos iusto sapiente praesentium, placeat explicabo fugiat, est iste ut odio magnam sunt corporis aliquam expedita, harum officia blanditiis! Aspernatur, nisi?',
    },
    {
      id: 2,
      imageUrl: Swathi2,
      name: 'Hari',
      grade: '10th Standard',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos iusto sapiente praesentium, placeat explicabo fugiat, est iste ut odio magnam sunt corporis aliquam expedita, officia blanditiis! Aspernatur, nisi?',
    },
  ];

  return (
    <div>
      <CourseDetails course={courses} /> {/* Changed prop name to course */}
    </div>
  );
}

export default couseCad;
