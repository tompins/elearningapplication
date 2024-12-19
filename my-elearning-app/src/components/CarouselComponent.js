import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = ({ images }) => {
  return (
    <div className="container mt-4">
      <Carousel>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt={img.alt} className="img-fluid rounded" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

