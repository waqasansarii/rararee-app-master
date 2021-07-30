import React from "react";
import map from "../../../Assets/pmap.png";
import permision from "../../../Assets/Group 3638.png";
import dot from "../../../Assets/greendot.png";

const ProposalDetail = () => {
  return (
    <div className="add_user_du_conatainer">
      <div className="auth_organize_form_container auth_creatProp_main">
        <div className="auth_organizeForm_md auth_contact_form">
          <h6>Proposal Details</h6>
          <div className="auth_OD_sd">
            <input
              className="auth_OEI_FW"
              type="email"
              placeholder="Title of the proposal"
            />
            <textarea
              className="auth_OEI_FW"
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder='Proposal Description'
            ></textarea>
          </div>
        </div>
        <div className="auth_organizeForm_md auth_OE_CF">
          <h6 className="auth_OE_heading">Define Date & Time!</h6>
          <div className="auth_CDI_hW">
            <input type="date" placeholder="no" />
            <input type="date" placeholder="no" />
          </div>
          <div className="auth_CDI_hW">
            <select name="" id="">
              <option value="">Start Time</option>
            </select>
            <select name="" id="">
              <option value="">End Time</option>
            </select>
          </div>
        </div>
        <div className="auth_organizeForm_md auth_OE_CF">
          <h6 className="auth_OE_heading">Region of interest</h6>
          <input
            className="auth_OEI_FW"
            type="email"
            placeholder="Enter Address"
            style={{ width: "100%" }}
          />
          <img
            className="addUser_upload_img"
            style={{ height: "30vh" }}
            src={map}
            alt="..."
          />
        </div>
        <div className="auth_organizeForm_md auth_OE_CF">
          <h6 className="auth_OE_heading">Define/add vote option!</h6>
          <div className="vote_option">
            <select name="" id="">
              <option value="">Option A</option>
            </select>
            <input
              className="auth_OEI_FW"
              type="email"
              placeholder="Enter Address"
            />
          </div>
          <div className="vote_option">
            <select name="" id="">
              <option value="">Option B</option>
            </select>
            <input
              className="auth_OEI_FW"
              type="email"
              placeholder="Enter Address"
            />
          </div>
          <div className="vote_option">
            <select name="" id="">
              <option value="">Option C</option>
            </select>
            <input
              className="auth_OEI_FW"
              type="email"
              placeholder="Enter Address"
            />
          </div>
          <div className="vote_option">
            <select name="" id="">
              <option value="">Option D</option>
            </select>
            <input
              className="auth_OEI_FW"
              type="email"
              placeholder="Enter Address"
            />
          </div>
          <div className="other_vote_opt">
            <button className="cus_grn_btn">
              <p>+</p>
              <p>Add another option</p>
            </button>
          </div>
        </div>
        <div className="auth_organizeForm_md auth_OE_CF">
          <h6 className="auth_OE_heading">Define Audience!</h6>
          <div className="spcfc_audiance_md">
            <div className="Auser_cs_tab">
              <input
                style={{ display: "none" }}
                type="radio"
                id="box5"
                name="box"
              />
              <label htmlFor="box5" className="cs_tab_box ">
                <img
                  className="c_dot"
                  style={{ display: "none" }}
                  src={dot}
                  alt="img"
                />
                <div className="spfc_audiance">
                  <p>15</p>
                </div>
              </label>
            </div>
            <div className="Auser_cs_tab">
              <input
                style={{ display: "none" }}
                type="radio"
                id="box6"
                name="box"
              />
              <label htmlFor="box6" className="cs_tab_box ">
                <img
                  className="c_dot"
                  style={{ display: "none" }}
                  src={dot}
                  alt="img"
                />
                <div className="spfc_audiance">
                  <p>15</p>
                </div>
              </label>
            </div>
            <div className="Auser_cs_tab">
              <input
                style={{ display: "none" }}
                type="radio"
                id="box7"
                name="box"
              />
              <label htmlFor="box7" className="cs_tab_box ">
                <img
                  className="c_dot"
                  style={{ display: "none" }}
                  src={dot}
                  alt="img"
                />
                <div className="spfc_audiance">
                  <p>15</p>
                </div>
              </label>
            </div>
            <div className="Auser_cs_tab">
              <input
                style={{ display: "none" }}
                type="radio"
                id="box8"
                name="box"
              />
              <label htmlFor="box8" className="cs_tab_box ">
                <img
                  className="c_dot"
                  style={{ display: "none" }}
                  src={dot}
                  alt="img"
                />
                <div className="spfc_audiance">
                  <p>15</p>
                </div>
              </label>
            </div>
          </div>
          <input
            className="custm_aud_inp"
            type="email"
            placeholder="Enter custom audiance"
            style={{ width: "100%" }}
          />
        </div>
        <div className="auth_organizeForm_md auth_OE_CF">
          <h6 className="auth_OE_heading">Other Settings</h6>
          <ul className="aduser_cp_ul othr_stng_ul">
            <li>
              <img src={permision} alt="..." />
              <div className="permissions">
                <h6>Prompt Participants</h6>
                <p>
                  Prompt participants to subscribe to updates. A prompt is shown
                  to users once they finish voting on all available comments. If
                  enabled, participants may optionally provide their email
                  address to receive notifications when there are new comments
                  to vote on.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetail;
