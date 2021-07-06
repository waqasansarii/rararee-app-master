import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Table from "./Table";
import OrgDetailCard from "./OrgDetailCard";
import DeviceDetailCard from "./DeviceDetailCard";
import "./style.css";
// assets
import user from "../../../Assets/Rectangle 981.png";

const OrganizationViewPage = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="organizatio_vp_right_md">
        <div className="viewProposal_head org_vp_head">
          <h5>Organization View Page</h5>
          <div className="view_propsal_btn">
            <button className="proposal_pause">Block</button>
            <button className="proposal_dlt">Delete</button>
          </div>
        </div>
        <div className="organization_vp_cards_md">
          <OrgDetailCard className='org_vp_card_adrs_md' />
          <div className="key_cDCard">
            <DeviceDetailCard
              uImg={user}
              title="user Name"
              head="Key Contact Details"
              head2="Key Contact Number"
              para2="+92 335 5623 751"
              head3="Key Contact Email Address"
              para3="salman.altaf@hotmail.com"
            />
          </div>
        </div>
        <div className="org_vp_table_md">
          <div className="org_vp_table_head">
            <h6>Active Devices</h6>
            <button className="cus_grn_btn">Enroll Device</button>
          </div>
          <div className="org_vp_table">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationViewPage;
