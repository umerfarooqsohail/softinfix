import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
// import PrintIcon from "@mui/icons-material/";

const Footer = () => {
  let footerdate = new Date().getFullYear();

  return (
    <>
      <footer className="page-footer font-small pt-4">
        <div className="container ">
          <div className="row mt-3 pb-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              
<div itemScope itemType='http://schema.org/Person' className='fiverr-seller-widget' style={{display: 'inline-block'}}>
     <a itemProp='url' href="https://www.fiverr.com/softinfix111" rel="nofollow" target="_blank" style={{display: 'inline-block'}}>
        <div className='fiverr-seller-content' id='fiverr-seller-widget-content-e8bb0680-d1a2-4e3d-a2e4-1e07eed6b17b' itemProp='contentURL' style={{display: 'none'}}></div>
        <div id='fiverr-widget-seller-data' style={{display: 'none'}}>
            <div itemProp='name' >softinfix111</div>
            <div itemScope itemType='http://schema.org/Organization'><span itemProp='name'>Fiverr</span></div>
            <div itemProp='jobtitle'>Seller</div>
          
        </div>
    </a>
</div>


              {/* <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a href="https://softinfix.web.app/#/">
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href="https://softinfix.web.app/#/">
                  MDWordPress
                </a>
              </p>
              <p>
                <a href="https://softinfix.web.app/#/">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="https://softinfix.web.app/#/">
                  Bootstrap Angular
                </a>
              </p> */}
            </div>

            {/* <hr className="w-100 clearfix d-md-none" /> */}

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              {/* <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="https://softinfix.web.app/#/">
                  Your Account
                </a>
              </p>
              <p>
                <a href="https://softinfix.web.app/#/">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="https://softinfix.web.app/#/">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="https://softinfix.web.app/#/">Help</a>
              </p> */}
            </div>

            {/* <hr className="w-100 clearfix d-md-none" /> */}

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <HomeIcon /> Lahore
              </p>
              <p>
                <a href="mailto::Softinfix@gmail.com">
                  <EmailIcon /> Softinfix@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+923030000993">
                  <PhoneEnabledIcon /> + 923 030 000 993
                </a>
              </p>
              {/* <p>
                <PrintIcon /> + 923 030 000 993
              </p> */}
            </div>
          </div>

          <hr />

          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="  ">
                © {footerdate} Copyright:
                <a href="https://softinfix.web.app/#/">
                  <strong> Softinfix.com</strong>
                </a>
              </p>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="  text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/Softinfix" target="_blank"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://softinfix.web.app/#/" target="_blank"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                  {/* <li className="list-inline-item">
                    <a
                      href="https://softinfix.web.app/#/"
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                    >
                      <GitHubIcon />
                    </a>
                  </li> */}
                  <li className="list-inline-item">
                    <a
                      href="https://softinfix.web.app/#/" target="_blank"
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
