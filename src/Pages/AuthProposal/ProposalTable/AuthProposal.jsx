import React from "react";
import Sidebar from '../../../Components/AuthDashboardComp/Sidebar'
import Table from "./Table";
import "./style.css";
// assets 
import search from '../../../Assets/Icon feather-search.png'
const AuthViewProposal = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="authority_right_md">
        <div className="charts_headings">
          <h5>Proposals</h5>
          <button className="cus_grn_btn">Create a proposal</button>
        </div>
        <div className="searhc_proposal_md">
           <img src={search} alt="..." />
           <input type="text" placeholder='Search proposals' />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default AuthViewProposal;
