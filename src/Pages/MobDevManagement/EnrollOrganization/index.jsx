import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import ContactForm from "./ContactForm";
import OrganizeForm from "./OrganizeForm";
import "./style.css";

const OrganizationEnrollment = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="authority_right_md">
        <div className="encovision_head">
          <div className="manage_head">
            {/* <img src={encovision} alt="..." /> */}
            <h6>Organization Enrollment</h6>
            <p>
              An organization could be hospital, laboratory, or any business
              looking to deploy Rarare App Services.
            </p>
          </div>
          <div className='auth_head_btn_md'>
            <button className="auth_cus_wht_btn">Discard</button>
            <button className="cus_grn_btn">Save</button>
          </div>
        </div>
        <div className="auth_OE_forms_md">
            <OrganizeForm />
            <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default OrganizationEnrollment;
