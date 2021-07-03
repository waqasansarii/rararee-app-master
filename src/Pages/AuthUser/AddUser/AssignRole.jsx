import React from "react";
import dot from "../../../Assets/greendot.png";

const AssignRole = () => {
  return (
    <div className="assign_role_container">
      <h6>Assign a role</h6>
      <div className="two_box_div">
        <div className=" addUser_Mt">
          <div className="Auser_cs_tab">
            <input
              style={{ display: "none" }}
              type="radio"
              id="box1"
              name="box"
            />
            <label htmlFor="box1" className="cs_tab_box addUser_tab">
              <img
                className="c_dot"
                style={{ display: "none" }}
                src={dot}
                alt="img"
              />
              <div className="cs_tab_text">
                <h2 className="text_bluegreen">Admin Manager</h2>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonu
                </p>
              </div>
            </label>
          </div>
          <div className="auser_cs_tab">
            <input
              style={{ display: "none" }}
              type="radio"
              id="box2"
              name="box"
            />
            <label htmlFor="box2" className="cs_tab_box addUser_tab">
              <img
                className="c_dot"
                style={{ display: "none" }}
                src={dot}
                alt="img"
              />
              <div className="cs_tab_text">
                <h2 className="text_bluegreen">Senior Manager</h2>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonu
                </p>
              </div>
            </label>
          </div>
          <div className="auser_cs_tab">
            <input
              style={{ display: "none" }}
              type="radio"
              id="box3"
              name="box"
            />
            <label htmlFor="box3" className="cs_tab_box addUser_tab">
              <img
                className="c_dot"
                style={{ display: "none" }}
                src={dot}
                alt="img"
              />
              <div className="cs_tab_text">
                <h2 className="text_bluegreen">Content Editor</h2>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonu
                </p>
              </div>
            </label>
          </div>
          <div className="auser_cs_tab">
            <input
              style={{ display: "none" }}
              type="radio"
              id="box4"
              name="box"
            />
            <label htmlFor="box4" className="cs_tab_box addUser_tab">
              <img
                className="c_dot"
                style={{ display: "none" }}
                src={dot}
                alt="img"
              />
              <div className="cs_tab_text">
                <h2 className="text_bluegreen">Regular User</h2>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonu
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignRole;
