import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import ProposalType from "./ProposalType";
import ProposalDetail from "./ProposalDetail";
import "./style.css";

const AuthCreateProposal = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="auth_addUSer_right_md">
        <div className="encovision_head">
          <div className="manage_head">
            <h6>Create Proposal</h6>
          </div>
          <div className="auth_head_btn_md add_user_btn">
            <button className="auth_cus_wht_btn">Discard</button>
            <button className="cus_grn_btn">Save</button>
          </div>
        </div>
        <div className="add_user_mp">
          <p>
          Get insights form the community so you make the best decisions!
          </p>
        </div>
        <div className="addUser_detail_md">
          <ProposalType />
          <ProposalDetail />
        </div>
      </div>
    </div>
  );
};

export default AuthCreateProposal;
