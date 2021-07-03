import React from "react";
import "./style.css";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Searchbar from "../ReportDetail/Searchbar";
import Map from "./Map";
import ReportSlider from "../ReportDetail/Slider";
import ReportTimeline from "../ReportDetail/Timeline";
// assets

const ReportDetailTwo = () => {
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
          <div className="AR_table_md RV_map_md">
            <Map />
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

export default ReportDetailTwo;
