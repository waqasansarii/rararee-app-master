import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Table from "./Table";
import search from "../../../Assets/Icon feather-search.png";
import location from "../../../Assets/Icon feather-map-pin.png";
import "./style.css";
const EnrollDevices = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="authority_right_md">
        <div className="encovision_head">
          <div className="manage_head">
            <h6>Enrolled Devices</h6>
            <p>
              Manage how to want the platform to be operated by your employees!
            </p>
          </div>
          <button className="cus_grn_btn">
            <p>Enroll Device</p>
          </button>
        </div>
        {/* <div className="manage_para"></div> */}
        <div className="enrol_search_boxes">
          <div className="searhc_proposal_md ">
            <img src={search} alt="..." />
            <input type="text" placeholder="Search organization/IMEI/Device ID" />
          </div>
          <div className="searhc_proposal_md device_location_search">
            <img src={location} alt="..." />
            <input type="text" placeholder="Search an organization" />
            <p>x</p>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default EnrollDevices;
