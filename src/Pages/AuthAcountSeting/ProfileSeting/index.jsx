import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import AuthProfileSettingCard from "./setingCard";
import "./style.css";
// assets
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";
const AuthProfileSetting = () => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <div className="auth_sidebar_sd_cont">
          <Sidebar />
        </div>
        <div className="auth_mobV_sidebar_sd">
          <button
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="mobV_mWeb_head_md">
              <img src={togle} alt="..." />
              <h3 className="mobV_mWeb_head">Profile Setting</h3>
            </div>
          </button>
          <div
            aria-label="dropdownMenuButton1"
            className=" dropdown-menu mob_vw_togle_close"
          >
            <Sidebar />
            <img src={togle2} alt="..." />
          </div>
        </div>
      </div>
      <div className="authority_acc_stng_right_md">
        <AuthProfileSettingCard />
        <div className="auth_stng_btns">
          <button className="auth_cus_wht_btn">Discard</button>
          <button className="cus_grn_btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AuthProfileSetting;
