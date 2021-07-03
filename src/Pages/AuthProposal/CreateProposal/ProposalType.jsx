import React from "react";
// assets
import pols from "../../../Assets/undraw_Investing_re.png";
import frame from "../../../Assets/undraw_conference.png";
import agree from "../../../Assets/undraw_Agreement_re_.png";
import dot from "../../../Assets/greendot.png";

const ProposalType = () => {
  return (
    <div className="assign_role_container CP_type_md">
      <h6>Proposal Type</h6>
      <div className="two_box_div">
        <div className=" addUser_Mt">
          <div className="Auser_cs_tab">
            <input
              style={{ display: "none" }}
              type="radio"
              id="box1"
              name="box"
            />
            <label htmlFor="box1" className="cs_tab_box addUser_tab pro_type_slct">
              <img
                className="c_dot"
                style={{ display: "none" }}
                src={dot}
                alt="img"
              />
              <img src={pols} alt="..." className="pt_img" />
              <div className="cs_tab_text">
                <h2 className="text_bluegreen">Polls</h2>
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
            <label htmlFor="box2" className="cs_tab_box addUser_tab pro_type_slct">
              <img
                className="c_dot"
                style={{ display: "none" }}
                src={dot}
                alt="img"
              />
              <img src={frame} alt="..." className="pt_img" />

              <div className="cs_tab_text">
                <h2 className="text_bluegreen">Consensus Forming</h2>
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
            <label htmlFor="box3" className="cs_tab_box addUser_tab pro_type_slct">
              <img
                className="c_dot"
                style={{ display: "none" }}
                src={dot}
                alt="img"
              />
              <img src={agree} alt="..." className="pt2_img" />
              <div className="cs_tab_text">
                <h2 className="text_bluegreen">Participatory Budget</h2>
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

export default ProposalType;
