import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Table from "./Table";
import search from "../../../Assets/Icon feather-search.png";
import plus from "../../../Assets/Group 4947.png";
import "./style.css";
const UserManagement = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="auth_UM_right_md">
        <div className="encovision_head ">
          <div className="manage_head">
            {/* <img src={encovision} alt="..." /> */}
            <h6>User Management</h6>
            <p>Manage how to want the platform to be operated by your employees!</p>
          </div>
          <button className="cus_grn_btn">
            {/* <img src={plus} alt="..." /> */}
            <span>+</span>
            <p>Add a user</p>
          </button>
        </div>
        <div className="manage_para">
        </div>
        <div className="searhc_proposal_md um_search">
          <img src={search} alt="..." />
          <input type="text" placeholder="Search proposals" />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default UserManagement;
