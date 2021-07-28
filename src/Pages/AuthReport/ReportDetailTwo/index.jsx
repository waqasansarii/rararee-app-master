import React from "react";
import "./style.css";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import Searchbar from "../ReportDetail/Searchbar";
import Map from "./Map";
import ReportSlider from "../ReportDetail/Slider";
import ReportTimeline from "../ReportDetail/Timeline";
// assets
// assets
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";

const ReportDetailTwo = () => {
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
              <h3 className="mobV_mWeb_head">Report Detail Page</h3>
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
        <div className="auth_report_head">
          <h5>Proposals</h5>
        </div>
        <Searchbar />
        <div className="AR_table_slider_md">
          <div className=" RV_map_md">
            <Map />
          </div>
          <div className="AR_slider_timeline_md">
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
