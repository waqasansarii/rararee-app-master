import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router";
// assets
import back from "../../Assets/Icon-arrow-right.png";
import postIcon from "../../Assets/cn_logo.png";
import "./PostSurvey.css";
import { Link } from "react-router-dom";

const SurveyHealth = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  return (
    <React.Fragment>
      <div className="post_home post_survey_health">
        <div>
          <div className="post_header">
            <img src={postIcon} alt="posticon" />
            <h2 className="text_darkblue">
              Post a <strong className="text_lightpurple">Survey!</strong>{" "}
            </h2>
            <p className="text_lightgray">
              Get insights form the community so you make the best decisions!
            </p>
          </div>
          <div className="health_analysis_div">
            <div className="analysis_head">
              <p>
                <img
                  onClick={() => history.push("/post-survey-tamplate")}
                  src={back}
                  alt="img"
                />
              </p>
              <h6>Health Analysis</h6>
            </div>
            <ul className="health_analysis_ul">
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore dolor?
                </p>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore dolor?
                </p>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore dolor?
                </p>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore dolor?
                </p>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
                <div className="health_checkbox">
                  <input type="checkbox" name="" id="" />
                  <span>Lorem ipsum dolor sit amet,</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="pcontinue_btn">
            <Link className="text-decoration-none" to="/survey-location">
              <button className="text-white bg_lightgreen border_none">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SurveyHealth;
