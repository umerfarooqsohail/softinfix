import React, { useState } from "react";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

import "./Contact.css";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputevent = (event) => {
    const { name, value } = event.target;

    setData((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };
  const submitform = (e) => {
    e.preventDefault();
    alert(`my name is ${data.fullname}
      contact#${data.phone} email is ${data.email}
      want to say ${data.msg}`);
    setData({
      fullname: "",
      phone: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      <div className="contact-main">
        <div className="py-4 mb-5 contact-heading">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="contact-2h my-5 d-inline-flex">
          <div className="cont-icon1 ">
            <ContactSupportIcon />
          </div>
          <div className="cont-icontext">
            <h4>Have any questions?</h4>
            <a href="mailto:malikumerfarooqsohail@gmail.com">
              malikumerfarooqsohail@gmail.com
            </a>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <div className="contact-div-2 col-6 mx-auto">
              <div className="row">
                <form onSubmit={submitform}>
                  <div className=" col-10 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="fullname"
                      value={data.fullname}
                      onChange={inputevent}
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="col-10 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className=" form-label"
                    >
                      Mobile number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="phone"
                      value={data.phone}
                      onChange={inputevent}
                      placeholder=""
                      required
                    />
                  </div>
                  <div className=" col-10 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="email"
                      value={data.email}
                      onChange={inputevent}
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="mb-3 col-10">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Write to us
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="msg"
                      value={data.msg}
                      onChange={inputevent}
                      placeholder=""
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-outline-primary mr=3 btnmargin"
                      type="submit"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <iframe
          title="hollo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6714.775490092434!2d74.41037211666801!3d31.48575559279034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf88ed48410ac9fd5!2zQmhhdHRhIENob3drINio2r7ZuduBINqG2YjaqQ!5e0!3m2!1sen!2sus!4v1619378064381!5m2!1sen!2sus"
          width="100%"
          height="400px"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
