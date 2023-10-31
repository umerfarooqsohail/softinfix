import React from "react";
import "./Services.css";
import BrushIcon from "@mui/icons-material/Brush";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import CodeIcon from "@mui/icons-material/Code";
import EditIcon from "@mui/icons-material/Edit";
import StorageIcon from "@mui/icons-material/Storage";
import AndroidIcon from "@mui/icons-material/Android";
const Services = () => {
  return (
    <div className="services-section">
      <div className="inner-width">
        <h1 className="section-title">Our Services</h1>
        <div className="border"></div>
        <div className="services-container">
          <div className="service-box">
            <div className="service-icon">
              <p className="service-iconi">
                <BrushIcon />
              </p>
            </div>
            <div className="service-title">Web Designs</div>
            <div className="service-desc">
              
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <p className="service-iconi">
                <CodeIcon />
              </p>
            </div>
            <div className="service-title">Web Development</div>
            <div className="service-desc">
              
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <p className="service-iconi">
                <FormatPaintIcon />
              </p>
            </div>
            <div className="service-title">Responsive Designs</div>
            <div className="service-desc">
              
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <p className="service-iconi">
                <EditIcon />
              </p>
            </div>
            <div className="service-title">Edit Sections</div>
            <div className="service-desc">
              
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <p className="service-iconi">
                <StorageIcon />
              </p>
            </div>
            <div className="service-title">Databases</div>
            <div className="service-desc">
              
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <p className="service-iconi">
                <AndroidIcon />
              </p>
            </div>
            <div className="service-title">Android</div>
            <div className="service-desc">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
