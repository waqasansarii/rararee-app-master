import React from "react";
import Sidebar from '../../../Components/AuthDashboardComp/Sidebar'
import DeviceDetail from "./DeviceDetail";
import SelectOrg from './SelectOrg'
import error from '../../../Assets/validationIcon.png'
import "./style.css";
// assets
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";

const DeviceEnrollment = () => {
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
              <h3 className="mobV_mWeb_head">Device Enrollment</h3>
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
      <div className="device_enroll_right_md">
        <div className="de_head">
          <h5>Device Enrollment</h5>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum
          </p>
        </div>
        <div className="device_enrol_cards_md">
            <SelectOrg />
            <DeviceDetail />
        </div>
        <div className="DE_error">
          <img src={error} alt="..." />
          <p>Frontend error</p>
        </div>
        <div className="DE_next_btns_md">
          <button className='auth_cus_wht_btn'>Discard</button>
          <button className='cus_grn_btn'>Send invite</button>
        </div>
      </div>
    </div>
  );
};

export default DeviceEnrollment;
