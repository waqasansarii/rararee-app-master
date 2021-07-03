import React from "react";
import Sidebar from '../../../Components/AuthDashboardComp/Sidebar'
import DeviceDetail from "./DeviceDetail";
import SelectOrg from './SelectOrg'
import error from '../../../Assets/validationIcon.png'
import "./style.css";

const DeviceEnrollment = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
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
