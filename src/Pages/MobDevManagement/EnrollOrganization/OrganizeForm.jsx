import React from "react";

const OrganizeForm = () => {
  return (
    <div className="auth_organize_form_container">
      <div className="auth_organizeForm_md">
        <h6>Organization Details</h6>
        <div className="auth_OD_sd">
          <input
            className="auth_OEI_FW"
            type="text"
            placeholder="Organization Name"
          />
          <input
            className="auth_OEI_FW"
            type="text"
            placeholder="Organization Type"
          />
          <input
            className="auth_OEI_FW"
            type="text"
            placeholder="Organization Reference ID"
          />
          <textarea
            className="auth_OEI_FW"
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Address Line 1"
          ></textarea>
          <select className="auth_OEI_FW" name="" id="">
            <option value="">Muncipality</option>
          </select>
          <select className="auth_OEI_FW" name="" id="">
            <option value="">Region</option>
          </select>
          <select className="auth_OEI_FW" name="" id="">
            <option value="">Country</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrganizeForm;
