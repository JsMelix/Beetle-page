import React from 'react';
import Slider from 'react-slick';
import './GalleryCarousel.css'; // Opcional para estilos personalizados

const images = [
  'https://images.bauerhosting.com/empire/2024/05/emp-july-24-beetlejuice-cover-crop.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80',
  'https://bloody-disgusting.com/wp-content/uploads/2024/08/beetlejuice-2-poster-art.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8ULUbIHGD-vbnzoLDY9Yd6A4rqK8aptWcQ&s',
  // Agrega más imágenes aquí
];

function GalleryCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GalleryCarousel;
