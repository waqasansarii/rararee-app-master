import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import AuthorityProposalCard from "./ProposalCard";
import StatusBarChart from "../../../Components/AuthDashboardComp/StatusBarChart";
import { ViewProposalChart } from "../../AuthorityDashboard/Data";
import FeedBack from "./FeedBack";
import file from "../../../Assets/Icon awesome-file-pdf.png";
import "./style.css";
import PieChart from "./PieChart";
// assets
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";
const ViewProposalPage = () => {
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
              <h3 className="mobV_mWeb_head">View Proposals Page</h3>
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
      <div className="authority_vp_right_md">
        <div className="viewProposal_head">
          <h6>View Proposals Page</h6>
          <div className="view_propsal_btn">
            <button className="proposal_pause">Pause</button>
            <button className="proposal_dlt">Delete</button>
          </div>
        </div>
        <div className="view_propsal_right_card_conatainer">
          <div className="card_comment_md">
            <AuthorityProposalCard
              headColor="auth_grn_head"
              progres="grn_line"
              percent="percent_grn"
            />
            <FeedBack />
          </div>
          <div className="auth_vp_result_md">
            <div className="vp_result_head">
              <h5>Result</h5>
              <div className="vp_export">
                <img src={file} alt="..." />
                <p>Export PDF</p>
              </div>
            </div>
            <div className="auth_vp_charts_boxes">
              <div className="auth_vp_chart_box">
                <div className="vp_chart_cal">
                  <p>Total Participations</p>
                  <h5 style={{ color: "#19C2A0" }}>25,000</h5>
                </div>
                <div className="vp_chart_cal">
                  <p>Submissions</p>
                  <h5 style={{ color: "#19C2A0" }}>15,000</h5>
                </div>
              </div>
            </div>
            <div className="auth_vp_charts_boxes">
              <p>Bar Representation</p>
              <div className="auth_vp_chart_box2 ">
                <div className="vp_chart_cal">
                  <p>Option A</p>
                  <h5 style={{ color: "#19C2A0" }}>25,000</h5>
                </div>
                <div className="vp_chart_cal">
                  <p>Option B</p>
                  <h5 style={{ color: "#ED9F10" }}>15,000</h5>
                </div>
              </div>
            </div>
            <div className="auth_vp_charts_boxes">
              <p>Bar Representation</p>
              <StatusBarChart data={ViewProposalChart} />
            </div>
            <div className="auth_vp_charts_boxes">
              <p>Pie Chart</p>
              <div className="vp_pieChart">
                <PieChart />
              </div>
              <div className="auth_vp_chart_box2 ">
                <div className="vp_Piechart_cal">
                  <p style={{ backgroundColor: "#19C2A0" }}></p>
                  <p>Option A</p>
                </div>
                <div className="vp_Piechart_cal">
                  <p style={{ backgroundColor: "#ED9F10" }}></p>
                  <p>Option B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProposalPage;
