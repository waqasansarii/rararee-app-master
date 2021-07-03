import React, { useState } from "react";
import Button from "../../../Components/Btn/Btn";
import { useHistory } from "react-router-dom";
// assets
import upload from "../../../Assets/Group 3675.png";

const AuthProfileSettingCard = () => {
  const history = useHistory();
  let [img, setImg] = useState("");

  const handelUlr = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setImg(url);
  };

  return (
    <div className="auth_profile_setting_card_container">
      <div className="profile_seting_card_div">
        <div className="proSetting_head_div auth_PS_head">
          <div onClick={() => history.push("/account-setting")}>
            {/* <img src={back} alt="img" /> */}
            <h6>Profile Settings</h6>
          </div>
          <Button className="upcoming_btn" value="Save Changes" />
        </div>
        <div className="profile_setting_inps_div">
          <div className="profile_setting_inps">
            <h6>Authority Details</h6>
            <input type="email" placeholder="Authority Name" />
            <input type="email" placeholder="Authority Registration Number" />

            <textarea
              name="address"
              id=""
              rows="5"
              placeholder="Address"
            ></textarea>
            <select name="Region" id="Region">
              <option value="Region">Region</option>
            </select>
            <select name="Country" id="Country">
              <option value="Country">Country</option>
            </select>
            <h6 style={{ marginTop: "20px" }}>Key Contact Information</h6>
            <input type="email" placeholder="Contact Name & Sur name" />
            <input type="email" placeholder="Contact Email Address" />
            {/* <Button className='upcoming_btn ' value='Save Changes' /> */}
          </div>
          <div className="profile_setting_inp_img">
            <h6>Profile Image</h6>
            <label htmlFor="profile">
              <img src={!img ? upload : img} alt="img" />
            </label>
            <input
              type="file"
              name="profile"
              onChange={(e) => handelUlr(e)}
              id="profile"
            />
            <Button
              className="upcoming_btn upload_profile"
              value="Upload Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthProfileSettingCard;
