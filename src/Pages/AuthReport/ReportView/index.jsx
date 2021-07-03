import React from "react";
import "./style.css";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
// import Searchbar from "./Searchbar";
// import Table from "../ReportDetail/Table";
// import ReportSlider from "./Slider";
import ReportTimeline from "../ReportDetail/Timeline";
import ProposalComponent from "../../Rant/Rant_component";
import ReportMapCard from "./ReportMapCard";
// assets

const ReportView = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="auth_report_right_md">
        <div className="">
          <h5>Report View Page</h5>
        </div>
        <div className="AR_table_slider_md">
          <div className="RV_comnt_md">
            <ReportMapCard />
            <ProposalComponent
              className="report_comnt_sec"
              className2="report_cmnt_height"
            />
          </div>
          <div className="report_view_tL">
            <ReportTimeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportView;
