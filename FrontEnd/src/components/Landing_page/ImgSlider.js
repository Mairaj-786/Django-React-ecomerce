import React from 'react'
import '../Style/img_slider.css'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const ImgSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        loop: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 3,
    };
    return (
        <div className="img_slider">
            <Slider {...settings}>
                <div className="IMG">
                    <img src="/images/slide1.jpg" />
                </div>
                <div className="IMG">
                    <img src="/images/slide2.jpg" />
                </div>
                <div className="IMG">
                    <img src="/images/slide3.jpg" />
                </div>
            </Slider>
        </div>
    )
}

export default ImgSlider
