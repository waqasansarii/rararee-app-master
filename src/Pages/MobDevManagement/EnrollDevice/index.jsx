import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Table from "./Table";
import MobViewEnrollCard from "./MobViewEnrollCard";
// assets
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";
import search from "../../../Assets/Icon feather-search.png";
import location from "../../../Assets/Icon feather-map-pin.png";
import "./style.css";
const EnrollDevices = () => {
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
              <h3 className="mobV_mWeb_head">Enroll Device</h3>
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
      <div className="auth_enroll_device_md">
        <div className="encovision_head">
          <div className="manage_head">
            <h6>Enrolled Devices</h6>
            <p>
              Manage how to want the platform to be operated by your employees!
            </p>
          </div>
          <div className="ED_btn_mobV">
            <button className="cus_grn_btn">
              <p>Enroll Device</p>
            </button>
          </div>
        </div>
        {/* <div className="manage_para"></div> */}
        <div className="enrol_search_boxes">
          <div className="searhc_proposal_md ">
            <img src={search} alt="..." />
            <input
              type="text"
              placeholder="Search organization/IMEI/Device ID"
            />
          </div>
          <div className="searhc_proposal_md device_location_search">
            <img src={location} alt="..." />
            <input type="text" placeholder="Search an organization" />
            <p>x</p>
          </div>
        </div>
        <div className="mob_srch_org_btn">
          <button className="cus_grn_btn">Search</button>
        </div>
        <Table />
        <MobViewEnrollCard />
      </div>
    </div>
  );
};

export default EnrollDevices;
