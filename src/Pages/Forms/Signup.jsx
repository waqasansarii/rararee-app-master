import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
// assets
import signupLogo from "../../Assets/s_logo.png";
import fbIcon from "../../Assets/fb_icon.png";
import gmailIcon from "../../Assets/gmail_icon.png";
import orLine from "../../Assets/or_line.png";
import signupBg from "../../Assets/s_bgright.png";
import xSmallIcon from "../../Assets/x_sm.png";
import xMedumIcon from "../../Assets/x_md.png";
import polygon1 from "../../Assets/polygon_1.png";
import polygon2 from "../../Assets/polygon_2.png";
import dot from "../../Assets/dot.png";
import pwdclose from "../../Assets/pwdclose.png";
import pwdopen from "../../Assets/pwdopen.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

const Signup = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, setShow] = useState(true);
  const [pass, setPass] = useState(false);

  const showPassword = () => {
    setPass(!pass);
  };

  return (
    <React.Fragment>
      <div className="main_form">
        <div className="signup_form">
          <div className="s_form">
            <div className="s_img">
              <img src={signupLogo} alt="signuplogo" />
            </div>
            <div className="s_text mb-2">
              <h2 className="text_darkblue fw-bold mt-4">
                Sign up to explore{" "}
                <strong className="text_bluegreen">RaRaRe!</strong>
              </h2>
            </div>
            <div className="s_select_box">
              <div
                onClick={() => {
                  setShow(true);
                }}
                className={
                  show === true
                    ? "s_box fw-bold bluegreen_border text_bluegreen"
                    : "s_box gray_border text_lightgray"
                }
              >
                <img
                  className="c_dot"
                  style={{ display: show === true ? "block" : "none" }}
                  src={dot}
                  alt="img"
                />
                I'm a citizen
              </div>
              <div
                onClick={() => {
                  setShow(false);
                }}
                className={
                  show === false
                    ? "s_box fw-bold bluegreen_border text_bluegreen"
                    : "s_box gray_border text_lightgray"
                }
              >
                <img
                  className="c_dot"
                  style={{ display: show === false ? "block" : "none" }}
                  src={dot}
                  alt="img"
                />
                I'm an authority/business
              </div>
            </div>
            <div className="s_social_btn">
              <button className="bg_blue">
                <img src={fbIcon} alt="fbicon" />
                <span className="ms-2">Login with Facebook</span>
              </button>
              <button className="bg_red">
                <img src={gmailIcon} alt="gmailicon" />
                <span className="ms-2">Login with Google</span>
              </button>
            </div>
            <div className="or_line">
              <img src={orLine} alt="img" />
            </div>
            <form className="s_form_fields">
              {show === true ? (
                <div className="inline_input">
                  <input
                    className="half_input"
                    placeholder="First Name"
                    type="text"
                  />
                  <input
                    className="half_input"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
              ) : (
                <div>
                  <input
                    className="full_input"
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
              )}
              <div>
                <input
                  className="full_input"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="p_input">
                <input
                  className=""
                  placeholder="Password"
                  type={!pass ? "password" : "text"}
                />
                {!pass ? (
                  <img onClick={showPassword} src={pwdclose} alt="img" />
                ) : (
                  <img onClick={showPassword} src={pwdopen} alt="img" />
                )}
              </div>
              <div className="p_input">
                <input
                  className=""
                  placeholder="Confirm Password"
                  type={!pass ? "password" : "text"}
                />
                {!pass ? (
                  <img onClick={showPassword} src={pwdclose} alt="img" />
                ) : (
                  <img onClick={showPassword} src={pwdopen} alt="img" />
                )}
              </div>
              <div className="form_btn">
                <button type="button" className="bg_lightgreen">
                  sign up
                </button>
              </div>
              <span className="s_label text_lightgray">
                Already a member?{" "}
                <Link to="/login" className="text_bluegreen">
                  &nbsp;Login
                </Link>
              </span>
            </form>
          </div>
        </div>
        <div className="signup_img_content">
          <img className="sic_1" src={xSmallIcon} alt="img" />
          <img className="sic_2" src={xMedumIcon} alt="img" />
          <img className="sic_3" src={polygon1} alt="img" />
          <img className="sic_4" src={polygon2} alt="img" />
          <div>
            <Swiper
              pagination
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ disableOnInteraction: false, delay: 2500 }}
            >
              <SwiperSlide>
                <img className="s_bgimg" src={signupBg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg" src={signupBg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg" src={signupBg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg" src={signupBg} alt="signupBg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
