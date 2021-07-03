import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import AssignRole from "./AssignRole";
import UserDetail from "./UserDetail";
import "./style.css";

const AddAUser = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
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
      </div>
    </div>
  );
};

export default AddAUser;
