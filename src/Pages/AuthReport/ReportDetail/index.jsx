import React from "react";
import "./style.css";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Searchbar from "./Searchbar";
import Table from "./Table";
import ReportSlider from "./Slider";
import ReportTimeline from "./Timeline";
// assets

const ReportDetail = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="auth_report_right_md">
        <div className="">
          <h5>Proposals</h5>
        </div>
        <Searchbar />
        <div className="AR_table_slider_md">
          <div className="AR_table_md">
            <Table />
          </div>
          <div className='AR_slider_timeline_md'>
              <ReportSlider />
              <div className="timeLine_cont">

              <ReportTimeline />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
