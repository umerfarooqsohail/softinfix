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
            About SoftInfix
          </h3>
          <p className="intro-text">
          Softinfix is a software company with a strong team of highly skilled IT experts.
catering its global clientele with innovative solutions across different industry verticals.
We look forward to bringing our strong analytical and technical skills to the field. We have experienced Enterprise
 Resource Planning Developers with a demonstrated history of operating in the information technology and services 
industry, Skilled in  ERPNext in Python(Frappe) Framework, Javascript, ASP DOTNET MVC5 + Telerick Kendo UI, SQL server,MariaDB,Mysql, Angular Framework, React Native, and React Js.
We have substantial engineering professionals with focused on block chain technologies.
          </p>
        </div>
      </div>
      <div className="intro-div indiv-2">
        <div className="intro-imgdiv intro-imgdiv2">
          <img src={intro2} alt="img error" className="intro-img" />
        </div>
        <div className="intro-textdiv intro-textdiv2">
          <h3 className="intro-headingtext">
          Mission and Vision
          </h3>
          <p className="intro-text">
          Softinfix mission is to enhance the business operation of its clients by developing and/or implementing premium IT products and services.
Softinfix mission includes:
Providing high quality software development services, professional consulting and development outsourcing that would improve our customers’ operations;
Making access to information easier and securer (Enterprise Business);
Improving communication and data exchange (Business to Business);
Providing our customers with a Value for Money and
Providing our employees with meaningful work and advancement opportunities.
Softinfix is a leading IT company for Consulting Services and Deployment of best of breed Business Solutions to top tier domestic and international customers.
Feel free to contact us
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Introduction;
