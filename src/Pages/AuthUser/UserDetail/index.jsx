import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import "./style.css";
// assets
import user from "../../../Assets/Group 5700.png";
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";
const UserDetail = () => {
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
              <h3 className="mobV_mWeb_head">User View Page</h3>
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
