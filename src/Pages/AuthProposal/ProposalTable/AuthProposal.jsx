import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Table from "./Table";
import "./style.css";
// assets
import search from "../../../Assets/Icon feather-search.png";
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";
import MobViewCard from "./MobViewCard";
const AuthViewProposal = () => {
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
              <h3 className="mobV_mWeb_head">Proposal</h3>
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
      <div className="auth_table_right_md auth_tPro_md">
        <div className="charts_headings auth_tPro_head">
          <h5>Proposals</h5>
          <button className="cus_grn_btn">Create a proposal</button>
        </div>
        <div className="searhc_proposal_md">
          <img src={search} alt="..." />
          <input type="text" placeholder="Search proposals" />
        </div>
        <Table />
        <MobViewCard />
      </div>
    </div>
  );
};

export default AuthViewProposal;
