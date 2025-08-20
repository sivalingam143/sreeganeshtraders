/* eslint-disable no-dupe-keys */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1700,
        autoplaySpeed: 1700,

        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
      <div className="slider-image">
        <img src={require('../../assets/images/bann-logo.png')}  className='img-fluid' alt='website developer'/>
      </div>
      <div className="slider-image">
        <img src={require('../../assets/images/brands_two.jpg')}  className='img-fluid' alt='website developer'/>
      </div>
      {/* <div className="slider-image">
        <img src={require('../../assets/images/brands_three.jpg')}  className='img-fluid' alt='website developer'/>
      </div> */}
      <div className="slider-image">
        <img src={require('../../assets/images/images-removebg-preview (1).png')}  className='img-fluid ' alt='website developer'/>
      </div>
      <div className="slider-image">
        <img src={require('../../assets/images/images__1_-removebg-preview.png')}  className='img-fluid ' alt='website developer'/>
      </div>
      <div className="slider-image">
        <img src={require('../../assets/images/brands_six.jpg')}  className='img-fluid ' alt='website developer'/>
      </div>
      <div className="slider-image">
        <img src={require('../../assets/images/brands_seven.jpg')}  className='img-fluid ' alt='website developer'/>
      </div>
    </Slider>
  );
}