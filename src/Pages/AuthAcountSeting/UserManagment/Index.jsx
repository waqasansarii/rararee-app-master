import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Table from "./Table";
// assets
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";
import search from "../../../Assets/Icon feather-search.png";
import "./style.css";
import MobViewUserMngCard from "./MobViewUserMngCard";
const UserManagement = () => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h3 className="mobV_mWeb_head">User Management</h3>
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
      <div className="auth_UM_right_md">
        <div className="encovision_head ">
          <div className="manage_head">
            <h6>User Management</h6>
            <p>
              Manage how to want the platform to be operated by your employees!
            </p>
          </div>
          <div className="um_mobV_btn">
            <button className="cus_grn_btn">
              <span>+</span>
              <p>Add a user</p>
            </button>
          </div>
        </div>
        <div className="searhc_proposal_md um_search">
          <img src={search} alt="..." />
          <input type="text" placeholder="Search proposals" />
        </div>
        <div className="mob_srch_org_btn">
          <button className="cus_grn_btn">Search</button>
        </div>
        {/* desktop view table  */}
        <Table />
        {/* mobile view card  */}
        <MobViewUserMngCard />
      </div>
    </div>
  );
};

export default UserManagement;
