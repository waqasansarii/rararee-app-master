import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Table from "./Table";
import MObViewOrgCard from "./MObViewOrgCard";
// assets
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";
import search from "../../../Assets/Icon feather-search.png";
import "./style.css";

const ActiveOrganization = () => {
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
              <h3 className="mobV_mWeb_head">Active Organization</h3>
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
      <div className="auth_active_org_right_md">
        <div className="encovision_head">
          <div className="manage_head">
            <h6>Active Organization</h6>
          </div>
          <button className="cus_grn_btn">
            <p>Add an Organization</p>
          </button>
        </div>
        <div className="searhc_proposal_md um_search">
          <img src={search} alt="..." />
          <input type="text" placeholder="Search an organization" />
        </div>
        <div className="mob_srch_org_btn">
          <button className="cus_grn_btn">Search</button>
        </div>
        {/* table for desktop view  */}
        <Table />
        {/* cards for mobile view  */}
        <MObViewOrgCard />
      </div>
    </div>
  );
};

export default ActiveOrganization;
