import React from "react";
import upload from "../../../Assets/upload-img.png";
import permision from "../../../Assets/Group 3638.png";

const UserDetail = () => {
  return (
    <div className="add_user_du_conatainer">
      <div className="auth_organize_form_container auth_userAdd_formMD">
        <div className="auth_organizeForm_md auth_contact_form">
          <h6>User Details</h6>
          <div className="auth_OD_sd">
            <div className="auth_CDI_hW">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="auth_CD_CNI">
              <input
                type="text"
                style={{ width: "60px", padding: "6px 10px" }}
                name=""
                id=""
                //   value='+92'
                defaultValue="+92"
              />
              <input type="number" placeholder='Contact Phone Number' />
            </div>
            <input
              className="auth_OEI_FW"
              type="email"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="auth_organizeForm_md auth_OE_CF">
          <h6 className="auth_OE_heading">Department Details</h6>
          <div className="auth_CDI">
            <select
              style={{ width: "100%" }}
              className="auth_OEI_FW"
              name=""
              id=""
            >
              <option value="">Select department</option>
            </select>
          </div>
        </div>
        <div className="auth_organizeForm_md auth_OE_CF">
          <h6 className="auth_OE_heading">User Image</h6>
          <img className="addUser_upload_img" src={upload} alt="..." />
        </div>
        <div className="auth_organizeForm_md auth_OE_CF">
          <h6 className="auth_OE_heading">Custom Permission</h6>
          <ul className="aduser_cp_ul">
            <li>
              <img src={permision} alt="..." />
              <div className="permissions">
                <h6>Allow to add other users</h6>
                <p>Allow his user to add other users and assign roles</p>
              </div>
            </li>
            <li>
              <img src={permision} alt="..." />
              <div className="permissions">
                <h6>Allow to add other users</h6>
                <p>Allow his user to add other users and assign roles</p>
              </div>
            </li>
            <li>
              <img src={permision} alt="..." />
              <div className="permissions">
                <h6>Allow to add other users</h6>
                <p>Allow his user to add other users and assign roles</p>
              </div>
            </li>
            <li>
              <img src={permision} alt="..." />
              <div className="permissions">
                <h6>Allow to add other users</h6>
                <p>Allow his user to add other users and assign roles</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
