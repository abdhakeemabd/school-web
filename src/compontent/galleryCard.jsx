
import React, { useState, useEffect } from 'react';
import AdminPanel from '../admin-panel/gallery'; // Import AdminPanel component
import '../style/gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    // Fetch gallery data from the backend API
    fetch('/api/gallery')
      .then(response => response.json())
      .then(data => setGalleryData(data))
      .catch(error => console.error('Error fetching gallery data:', error));
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'scroll'; 
  };

  const handleAddGalleryItem = (newItem) => {
    // Send a POST request to the backend API to add the new gallery item
    fetch('/api/gallery/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(data => {
        // Update galleryData state with the newly added item
        setGalleryData(prevData => [...prevData, data]);
      })
      .catch(error => console.error('Error adding gallery item:', error));
  };

  return (
    <div className="gallery-main">
      <AdminPanel onAddGalleryItem={handleAddGalleryItem} />
      <section className='gallery-card'>
        <div className="container">
          <div className="row">
            {galleryData.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up">
                <div className="image-container" onClick={() => openLightbox(index)}>
                  <img src={item.imageUrl} alt={`Image ${index}`} className="gallery-image" />
                  <div className="image-info trancate-2">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedImage !== null && (
        <div className="lightbox">
          <span className="close-button" onClick={closeLightbox}>×</span>
          <img src={galleryData[selectedImage].imageUrl} alt={`Image ${selectedImage}`} className="lightbox-image" />
          <div className="lightbox-info">
            {/* Additional info if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
