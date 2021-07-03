import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import "./style.css";
// assets
import user from "../../../Assets/Group 5700.png";
const UserDetail = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="userDetail_right_md">
        <div className="auth_user_detail_card">
          <div className="auth_UD_card">
            <h6>User Detail</h6>
            <div className="ud_Name">
              <img src={user} alt="..." />
              <div className="U_name_id">
                <h6>UserName</h6>
                <p className="underline">User id</p>
              </div>
            </div>
            <div className="ud_more_info">
              <div className="ud_user_more_detail">
                <div className="ud_infos">
                  <h6>User Department</h6>
                  <p>Rarare Civic App</p>
                </div>
                <div className="ud_info">
                  <h6>User Role</h6>
                  <p>Senior Manager</p>
                </div>
                <div className="ud_info">
                  <h6>Active SInce</h6>
                  <p>May 21, 2021</p>
                </div>
              </div>
              <div className="ud_user_more_detail">
                <div className="ud_infos">
                  <h6>Contact Number</h6>
                  <p>+92 335 5623 751</p>
                </div>
                <div className="ud_info">
                  <h6>Email Address</h6>
                  <p>salman.altaf@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="auth_ud_btns">
          <button className="orng_btn">Edit user</button>
          <button className="red_btn">Delete User</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;