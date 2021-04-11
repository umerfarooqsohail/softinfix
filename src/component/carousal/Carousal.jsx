import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousal.css";
import clsoselimg1 from "./../../assests/img/ctext.png";
import clsoselimg2 from "./../../assests/img/bline.png";
import clsoselimg3 from "./../../assests/img/rwireframe.png";
import clsoselvid1 from "./../../assests/videos/infix-video.mp4";

const PauseOnHover = () => {
  var settings = {
    dots: true,
    arrow: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="carousal-container">
      <video
        autoplay="true"
        muted="true"
        loop="true"
        className="video-calousal"
      >
        <source src={clsoselvid1} type="video/mp4" />
      </video>
      <div className="carousal-slider">
        <Slider {...settings}>
          <div className="cimgwraper">
            <img src={clsoselimg1} className="imgc11" alt="Softinfix" />
            <img src={clsoselimg3} className="imgc12 " alt="Softinfix" />
            <img src={clsoselimg2} className="imgc13" alt="Softinfix" />
          </div>
          <div className="cimgwraper">
            <img src="" alt="Softinfix" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default PauseOnHover;
