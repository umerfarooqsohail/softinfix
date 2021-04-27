import React, { Component } from "react";
import Slider from "react-slick";
import "./Project.css";
import intro2 from "../../assests/img/intro2.jpg";
import { Tooltip } from "@material-ui/core";
import { Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
      
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div className="project-main">
        <h2 className="p-heading">Our Projects</h2>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div className="p-imgdiv" key={1}>
            <img src={intro2} alt="img error" className="p-img" />
          </div>
          <div className="p-imgdiv" key={2}>
            <img src={intro2} alt="img error" className="p-img" />
          </div>
          <div className="p-imgdiv" key={3}>
            <img src={intro2} alt="img error" className="p-img" />
          </div>
          <div className="p-imgdiv" key={4}>
            <img src={intro2} alt="img error" className="p-img" />
          </div>
          <div className="p-imgdiv" key={5}>
            <img src={intro2} alt="img error" className="p-img" />
          </div>
          <div className="p-imgdiv" key={6}>
            <img src={intro2} alt="img error" className="p-img" />
          </div>
        </Slider>
        <div className="p-btn" style={{ textAlign: "center" }}>
          <Tooltip title="prev" interactive>
            <Button className="button" onClick={this.previous}>
              <NavigateBeforeIcon />
            </Button>
          </Tooltip>
          <Tooltip title="next" interactive>
            <Button className="button" onClick={this.next}>
              <NavigateNextIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}
