import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Table from "./Table";
import search from "../../../Assets/Icon feather-search.png";
import plus from "../../../Assets/Group 4947.png";
import "./style.css";
const ActiveOrganization = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="authority_right_md">
        <div className="encovision_head">
          <div className="manage_head">
            {/* <img src={encovision} alt="..." /> */}
            <h6>Active Organization</h6>
            {/* <p>Manage how to want the platform to be operated by your employees!</p> */}
          </div>
          <button className="cus_grn_btn">
            <p>Add an Organization</p>
          </button>
        </div>
        <div className="manage_para">
        </div>
        <div className="searhc_proposal_md um_search">
          <img src={search} alt="..." />
          <input type="text" placeholder="Search an organization" />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default ActiveOrganization;
