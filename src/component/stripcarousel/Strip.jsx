import React, { Component } from "react";
import Slider from "react-slick";
import stripc1 from "../../assests/img/stripc1.png";
import stripc2 from "../../assests/img/stripc2.png";
import stripc3 from "../../assests/img/stripc3.png";
import stripc4 from "../../assests/img/stripc4.png";
import stripc5 from "../../assests/img/stripc5.png";
import stripc6 from "../../assests/img/stripc6.png";
import stripc7 from "../../assests/img/stripc7.png";
import stripc8 from "../../assests/img/stripc8.png";
import stripc9 from "../../assests/img/stripc9.png";
import stripc10 from "../../assests/img/stripc10.png";
import stripc11 from "../../assests/img/stripc11.png";
import stripc12 from "../../assests/img/stripc12.png";
import stripc13 from "../../assests/img/stripc13.png";
import "./Strip.css";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 1500,
      cssEase: "linear",
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="stripc-main">
        <Slider {...settings}>
          <div className="strip-div">
            <img src={stripc1} alt="Softinfix" className="stripc1 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc2} alt="Softinfix" className="stripc2 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc3} alt="Softinfix" className="stripc3 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc4} alt="Softinfix" className="stripc4 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc5} alt="Softinfix" className="stripc5 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc6} alt="Softinfix" className="stripc6 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc7} alt="Softinfix" className="stripc7 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc8} alt="Softinfix" className="stripc8 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc9} alt="Softinfix" className="stripc9 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc10} alt="Softinfix" className="stripc10 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc11} alt="Softinfix" className="stripc11 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc12} alt="Softinfix" className="stripc12 stripc" />
          </div>
          <div className="strip-div">
            <img src={stripc13} alt="Softinfix" className="stripc13 stripc" />
          </div>
        </Slider>
      </div>
    );
  }
}
