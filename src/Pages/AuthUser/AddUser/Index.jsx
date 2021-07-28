import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import AssignRole from "./AssignRole";
import UserDetail from "./UserDetail";
import "./style.css";
// assets
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";

const AddAUser = () => {
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
              <h3 className="mobV_mWeb_head">Create a proposal</h3>
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
      <div className="auth_addUSer_right_md">
        <div className="encovision_head">
          <div className="manage_head">
            <h6>Organization Enrollment</h6>
          </div>
          <div className="auth_head_btn_md add_user_btn">
            <button className="auth_cus_wht_btn">Discard</button>
            <button className="cus_grn_btn">Save</button>
          </div>
        </div>
        <div className="add_user_mp">
          <p>
            An organization could be hospital, laboratory, or any business
            looking to deploy Rarare App Services.
          </p>
        </div>
        <div className="addUser_detail_md">
          <AssignRole />
          <UserDetail />
        </div>
        <div className="auth_head_btn_md add_user_btn mob_bm_btn">
          <button className="auth_cus_wht_btn">Discard</button>
          <button className="cus_grn_btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddAUser;
