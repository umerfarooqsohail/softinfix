import React from "react";
import "./Introduction.css";
import intro from "../../assests/img/intro1.jpg";
import intro2 from "../../assests/img/intro2.jpg";

const Introduction = () => {
  return (
  <>
 
    <div className="intro-main">
      
      <div className="intro-div indiv-1">
        <div className="intro-imgdiv">
          <img src={intro} alt="img error" className="intro-img" />
        </div>
        <div className="intro-textdiv">
          <h3 className="intro-headingtext">
            Sofinfix - Software House in Lahore
          </h3>
          <p className="intro-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae
            sit tempora quidem consequatur vero aperiam animi explicabo
            veritatis fugiat, consectetur hic fuga earum. Aliquid iure provident
            rem repellat doloremque.
          </p>
        </div>
      </div>
      <div className="intro-div indiv-2">
        <div className="intro-imgdiv intro-imgdiv2">
          <img src={intro2} alt="img error" className="intro-img" />
        </div>
        <div className="intro-textdiv intro-textdiv2">
          <h3 className="intro-headingtext">
          Trusted IT Company in Pakistan
          </h3>
          <p className="intro-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae
            sit tempora quidem consequatur vero aperiam animi explicabo
            veritatis fugiat, consectetur hic fuga earum. Aliquid iure provident
            rem repellat doloremque.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Introduction;
