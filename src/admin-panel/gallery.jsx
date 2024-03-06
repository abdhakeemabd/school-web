// AdminPanel.js

import React, { useState } from 'react';

const AdminPanel = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleAddGalleryItem = () => {
    
    // Perform validation if needed

    // Send data to backend API to add new gallery item
    fetch('/api/gallery/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl, description }),
    })
      .then(response => {
        // Handle response
        // You might want to display a success message or handle errors
      })
      .catch(error => {
        // Handle error
      });

    // Reset form fields after adding item
    setImageUrl('');
    setDescription('');
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <label>Image URL:</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button onClick={handleAddGalleryItem}>Add Gallery Item</button>
    </div>
  );
};

export default AdminPanel;