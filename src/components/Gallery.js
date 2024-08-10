import React from 'react';
import GalleryCarousel from './GalleryCarousel'; // Importa el carrusel

function Gallery() {
  return (
    <div className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <GalleryCarousel /> {/* Agrega el componente GalleryCarousel aquí */}
    </div>
  );
}

export default Gallery;


