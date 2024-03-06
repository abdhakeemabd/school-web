import React from 'react'
import GalleryCard from '../compontent/galleryCard'
import PageBanner from '../compontent/pagebanner'
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
function Gallery() {
  return (
    <div className='main-Gallery'>
        <Navbar></Navbar>
        <PageBanner/>
        <GalleryCard/>
        <Footer></Footer>
    </div>
  )
}

export default Gallery
