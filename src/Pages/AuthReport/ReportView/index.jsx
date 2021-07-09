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
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";
const ReportView = () => {
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
              {/* <h3 className="mobV_mWeb_head">Dashboard</h3> */}
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

      <div className="auth_report_right_md">
        <div className="">
          <h5>Report View Page</h5>
        </div>
        <div className="AR_cmnt_slider_md">
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
