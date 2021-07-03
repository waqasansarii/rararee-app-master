import React from "react";
import user from "../../../Assets/Ellipse 226.png";
import emoji from "../../../Assets/Icon feather-smile.png";
import send from "../../../Assets/Icon ionic-md-send.png";
import path from "../../../Assets/Path 3316.png";
const FeedBack = () => {
  return (
    <div className="feedback_container">
      <div className="feedback_md">
        <div className="feedback_sd">
          <div className="feedback_head">
            <h6>Comments & Feedback</h6>
          </div>
          <div className="auth_vp_comment_md">
            <ul className="auth_vp_commen_ul">
              <li>
                <div className="auth_vp_comment_user_info">
                  <div className="vpc_user_name">
                    <img src={user} alt="..." />
                    <p>UserName</p>
                  </div>
                  <p>05:00 PM | May, 1, 2021</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero{" "}
                </p>
              </li>
              <li>
                <div className="auth_vp_comment_user_info">
                  <div className="vpc_user_name">
                    <img src={user} alt="..." />
                    <p>UserName</p>
                  </div>
                  <p>05:00 PM | May, 1, 2021</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero{" "}
                </p>
              </li>
              <li>
                <div className="auth_vp_comment_user_info">
                  <div className="vpc_user_name">
                    <img src={user} alt="..." />
                    <p>UserName</p>
                  </div>
                  <p>05:00 PM | May, 1, 2021</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero{" "}
                </p>
              </li>
              <li>
                <div className="auth_vp_comment_user_info">
                  <div className="vpc_user_name">
                    <img src={user} alt="..." />
                    <p>UserName</p>
                  </div>
                  <p>05:00 PM | May, 1, 2021</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero{" "}
                </p>
              </li>
              <li>
                <div className="auth_vp_comment_user_info">
                  <div className="vpc_user_name">
                    <img src={user} alt="..." />
                    <p>UserName</p>
                  </div>
                  <p>05:00 PM | May, 1, 2021</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero{" "}
                </p>
              </li>
              <li>
                <div className="auth_vp_comment_user_info">
                  <div className="vpc_user_name">
                    <img src={user} alt="..." />
                    <p>UserName</p>
                  </div>
                  <p>05:00 PM | May, 1, 2021</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="auth_vpc_type_sec">
          <input type="text" placeholder="Post a comment here" />
          <div className="vpc_sent">
            <img src={emoji} alt="..." />
            <img src={path} alt="..." />
            <img src={send} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
