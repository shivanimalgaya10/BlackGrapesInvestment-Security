import React from 'react';
import Slider from 'react-slick';
import './ImageSliderHome.css';
import img1 from '../assets/Images/img7.jpeg';
import img2 from '../assets/Images/img8.jpeg';
import img3 from '../assets/Images/img9.jpeg';
import img4 from '../assets/Images/img10.jpeg';
import img5 from '../assets/Images/img11.jpeg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [img1, img2, img3, img4, img5];

const ImageSliderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false, // Ensure autoplay is not paused on hover
    pauseOnFocus: false, // Ensure autoplay is not paused on focus
    pauseOnDotsHover: false // Ensure autoplay is not paused on dots hover
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSliderHome;
