import React, { useState, useLayoutEffect } from "react";
import "./PostConsensus.css";

// assets
import postIcon from "../../Assets/post_icon.png";
import IconCalendar from "../../Assets/Icon awesome-calendar.png";
import greenDot from "../../Assets/dot.png";
import { Link } from "react-router-dom";
import Footer from "../../Layout/Footer";

const PostConsensusTime = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState("1");
  return (
    <React.Fragment>
      <div className="post_home postconsensus_opt pc_time">
        <div>
          <div className="post_header">
            <img src={postIcon} alt="posticon" />
            <h2 className="text_darkblue fw-bold">
              Post a
              <strong className="text_lightpurple">Consensus Forming!</strong>
            </h2>
            <p className="text_lightgray">
              Get your ideas to other people. Post something that matters!
            </p>
          </div>
          <div className="d_audience">
            <h2 className="text_darkblue fw-bold">Define Audience!</h2>
            <div className="d_aud_box">
              <div className="da_1">
                <div
                  className={
                    show === "1"
                      ? "dnum_box border_solid bluegreen_border"
                      : "dnum_box border_solid light_purple_border"
                  }
                  onClick={() => {
                    setShow("1");
                  }}
                >
                  <img
                    className="c_dot"
                    style={{ display: show === "1" ? "block" : "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  10
                </div>
                <div
                  className={
                    show === "2"
                      ? " dnum_box border_solid bluegreen_border"
                      : "dnum_box border_solid light_purple_border"
                  }
                  onClick={() => {
                    setShow("2");
                  }}
                >
                  <img
                    className="c_dot"
                    style={{ display: show === "2" ? "block" : "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  10
                </div>
                <div
                  className={
                    show === "3"
                      ? " dnum_box border_solid bluegreen_border"
                      : "dnum_box border_solid light_purple_border"
                  }
                  onClick={() => {
                    setShow("3");
                  }}
                >
                  <img
                    className="c_dot"
                    style={{ display: show === "3" ? "block" : "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  10
                </div>
                <div
                  className={
                    show === "4"
                      ? " dnum_box border_solid bluegreen_border"
                      : "dnum_box border_solid light_purple_border"
                  }
                  onClick={() => {
                    setShow("4");
                  }}
                >
                  <img
                    className="c_dot"
                    style={{ display: show === "4" ? "block" : "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  10
                </div>
              </div>
              <div className="da_2">
                <input type="text" placeholder="Enter custom number" />
              </div>
            </div>
          </div>
          <div className="d_date_time">
            <h2 className="text_darkblue fw-bold">Define Date & Time!</h2>
            <div className="dt_box">
              <div className="dt_box_input">
                <div className="input_img">
                  <input type="text" placeholder="Start Date" />
                  <img src={IconCalendar} alt="img" />
                </div>
                <div className="input_img">
                  <input type="text" placeholder="End Date" />
                  <img src={IconCalendar} alt="img" />
                </div>
              </div>
              <div className="dt_box_input m_dt_box_input mt-3">
                <div className="co_option_box">
                  <select
                    className="form-select border_solid bluegreen_border text_lightgray"
                    aria-label="Default select example"
                  >
                    <option value={1}>Option A</option>
                    <option value={2}>Option B</option>
                    <option value={3}>Option C</option>
                  </select>
                </div>
                <div className="co_option_box">
                  <select
                    className="form-select border_solid bluegreen_border text_lightgray"
                    aria-label="Default select example"
                  >
                    <option value={1}>Option A</option>
                    <option value={2}>Option B</option>
                    <option value={3}>Option C</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="other_setting">
            <h2 className="text_darkblue fw-bold">Other Settings</h2>
            <div className="s_checkbox">
              <label className="sc_label text_lightgray">
                <input type="checkbox" name="key" value="value" />
                <span className="text_black fw-bold">Prompt participants </span>
              </label>
            </div>
            <p className="text_lightpurple">
              Prompt participants to subscribe to updates. A prompt is shown to
              users once they finish voting on all available comments. If
              enabled, participants may optionally provide their email address
              to receive notifications when there are new comments to vote on.
            </p>
          </div>
          <div className="pcontinue_btn pct_btn">
            <Link className="text-decoration-none" to="/consensus-options">
              <button className="cus_width100 text_bluegreen bg_white border_solid bluegreen_border me-4">
                Back
              </button>
            </Link>
            <Link className="text-decoration-none" to="/consensus-receive">
              <button className="cus_width100 text-white bg_lightgreen border_none">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PostConsensusTime;
