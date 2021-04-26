import React from "react";
import "./Footer.css";
import outlinelogo from "../../assests/img/outline.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import PrintIcon from "@material-ui/icons/Print";

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small pt-4">
        <div className="container ">
          <div className="row mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <img
                src={outlinelogo}
                width="100%"
                height="100%"
                alt="softifix"
              />
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a href="https://umerfarooqsohail.github.io/softinfix/">
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href="https://umerfarooqsohail.github.io/softinfix/">
                  MDWordPress
                </a>
              </p>
              <p>
                <a href="https://umerfarooqsohail.github.io/softinfix/">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="https://umerfarooqsohail.github.io/softinfix/">
                  Bootstrap Angular
                </a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="https://umerfarooqsohail.github.io/softinfix/">
                  Your Account
                </a>
              </p>
              <p>
                <a href="https://umerfarooqsohail.github.io/softinfix/">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="https://umerfarooqsohail.github.io/softinfix/">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="https://umerfarooqsohail.github.io/softinfix/">Help</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <HomeIcon /> lahore cantt near airport
              </p>
              <p>
                <EmailIcon /> malikumerfarooqsohail@gmail.com
              </p>
              <p>
                <PhoneEnabledIcon /> + 923 241 145 775
              </p>
              <p>
                <PrintIcon /> + 923 241 145 775
              </p>
            </div>
          </div>

          <hr />

          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="  ">
                © 2021 Copyright:
                <a href="https://umerfarooqsohail.github.io/softinfix/">
                  <strong> Softinfix.com</strong>
                </a>
              </p>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="  text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://umerfarooqsohail.github.io/softinfix/"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://umerfarooqsohail.github.io/softinfix/"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://umerfarooqsohail.github.io/softinfix/"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <GitHubIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://umerfarooqsohail.github.io/softinfix/"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
