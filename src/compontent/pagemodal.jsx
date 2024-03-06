  import React from 'react';
  import '../style/Modal.css'
  const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <div className=' modalRight'>
            <p className='closeBtn' onClick={onClose}>
              X
            </p>
            <div className='content'>
              <img className='img-fluid' src="https://www.jdtislamnewhope.com/img/teacher/ss.jpg" alt="" />
              {/* <p>News</p> */}
              <h4 className='mt-3'>Admission opened</h4>
              <p className=''>Welcome jdt islam are you want to join with us </p>
            </div>
            <div className='btnContainer'>
              <button className='btnPrimary'>
                join with us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
