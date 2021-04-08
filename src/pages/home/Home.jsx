import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import "./Home.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      arrow: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="carousal-container">
        <video
          className="video-calousal"
          autoplay="true"
          muted
          loop
          className="video-calousal"
        >
          <source
            src={process.env.PUBLIC_URL + "/videos/infix-video.mp4 "}
            type="video/mp4"
          />
        </video>
        <div className="carousal-slider">
          <Slider {...settings}>
            <div className="cimgwraper">
              <img
                src={process.env.PUBLIC_URL + "/img/ctext.png "}
                className="imgc11"
                alt="Softinfix"
              />
              <img
                src={process.env.PUBLIC_URL + "/img/rwireframe.png "}
                className="imgc12"
                alt="Softinfix"
              />
              <img
                src={process.env.PUBLIC_URL + "img/bline.png "}
                className="imgc13"
                alt="Softinfix"
              />
            </div>
            <div className="cimgwraper">
              <img
                src={process.env.PUBLIC_URL + "img/bline.png "}
                className="img12"
                alt="Softinfix"
              />
            </div>
            <div className="cimgwraper">
              <img
                src={process.env.PUBLIC_URL + "/img/rwireframe.png "}
                className="img12"
                alt="Softinfix"
              />
            </div>
            <div className="cimgwraper">
              <h3>4</h3>
            </div>
            <div className="cimgwraper">
              <h3>5</h3>
            </div>
            <div className="cimgwraper">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
