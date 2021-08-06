import React from "react";
import AuthorityProposalCard from "../../Components/AuthDashboardComp/ProposalCard";
import Sidebar from "../../Components/AuthDashboardComp/Sidebar";
import StatusBarChart from "../../Components/AuthDashboardComp/StatusBarChart";
import PieChart from "../../Components/AuthDashboardComp/PieChart";
import DeviceActivity from "../../Components/AuthDashboardComp/DeviceActivity";
import Table from "../../Components/AuthDashboardComp/Table";
import {
  statusChart,
  categoryChart,
  ProposalStatusChart,
  deviceData,
} from "./Data";
import { Link } from "react-router-dom";
// asssets
import arrow from "../../Assets/Icon feather-arrow-rightblack.png";
import encovision from "../../Assets/Mask Group.png";
import go from "../../Assets/Icon open-share-boxe.png";
import togle from "../../Assets/Group 5706.png";
import togle2 from "../../Assets/Group 5707.png";
import "./style/AuthSumery.css";
import ProposalPieChart from "../../Components/AuthDashboardComp/ProposalPieChart";
import EncovisionMobViewCard from "../../Components/AuthDashboardComp/EncovisionMobViewCard";

const AuthSumery = () => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="authority_container">
      {/* sidebar start  */}
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
              <h3 className="mobV_mWeb_head">Dashboard</h3>
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
      {/* sidebar end  */}
      {/* right content compoent  start */}
      <div className="authority_right_md">
        <div>
          <h5>Rant/Rave Report Summary</h5>
        </div>
        <div className="authority_right_sd">
          <div className="status_container">
            <div className="status_head">
              <h6>Problem status</h6>
              <select name="" id="">
                <option value="">Current month</option>
              </select>
            </div>
            <StatusBarChart className="status_bar_chart" data={statusChart} />
          </div>
          <div className="category_cont">
            <div className="status_head">
              <h6>Problem by Category</h6>
            </div>
            <StatusBarChart className="category_chart" data={categoryChart} />
          </div>
        </div>
        <div className="charts_headings prop_db_card_md">
          <h5>Proposals</h5>
          <button className="cus_grn_btn">Create a proposal</button>
        </div>
        <div className="authority_right_sd">
          <div className="proposal_status_container">
            <div className="status_head">
              <h6>Proposal status</h6>
              <select name="" id="">
                <option value="">Current month</option>
              </select>
            </div>
            <StatusBarChart
              className="status_bar_chart"
              data={ProposalStatusChart}
            />
          </div>
          <div className="category_cont prop_pie_chart_md">
            <div className="status_head">
              <h6>Problem by Category</h6>
            </div>
            <PieChart className="prop_pie_chart" />
          </div>
        </div>
        {/* cards section  */}
        <div className="authority_right_sd prop_db_card_md">
          <AuthorityProposalCard
            headColor="auth_blue_head"
            percent="percent_blue"
            progres="blue_line"
          />
          <AuthorityProposalCard
            margin="auth_card_margin"
            headColor="auth_grn_head"
            percent="percent_grn"
            progres="grn_line"
          />
          <AuthorityProposalCard
            margin="auth_card_margin"
            headColor="auth_orng_head"
            percent="percent_orng"
            progres="orng_line"
          />
        </div>
        <div className="right_arrow prop_db_card_md">
          <Link className="view_auth_proposal">View All</Link>
          <img src={arrow} alt="..." />
        </div>
        {/* device management  */}
        <div className="device_management_md prop_db_card_md">
          <div className="charts_headings">
            <h5>Mobile Device Management</h5>
            <div className="MDM_dashboard_contn">
              <button className="cus_grn_btn">Add an orginization</button>
              <button className="cus_grn_btn">Add a device</button>
            </div>
          </div>
          <div className="device_cards">
            {deviceData.map((val, i) => (
              <div className="deviceNumber" key={i}>
                <p>{val.status} </p>
                <h5 className={val.clasName}>{val.num}</h5>
              </div>
            ))}
          </div>
          <div className="device_db_pie_chart">
            <div className="  status_container device_bar_CHART">
              <div className="status_head">
                <h6>Active Devices</h6>
              </div>
              <ProposalPieChart className="prop_pie_chart " />
            </div>
            <div className="category_cont device_pie_chart_md">
              <div className="status_head">
                <h6>Device Type</h6>
              </div>
              <PieChart className="prop_pie_chart" />
            </div>
          </div>
          <div className="device_db_pie_chart">
            <div className="  status_container device_bar_CHART">
              <div className="status_head">
                <h6>Devices Platform</h6>
              </div>
              <StatusBarChart
                doOption
                className="device_hv_barchart "
                data={ProposalStatusChart}
              />
            </div>
            <div className="category_cont device_pie_chart_md">
              <div className="status_head">
                <h6>App Usage</h6>
              </div>
              <PieChart className="prop_pie_chart" />
            </div>
          </div>
          <DeviceActivity />
        </div>
        {/* encovisionn section */}
        <div className="encocision_container prop_db_card_md">
          <div className="encovision_md">
            <div className="encovision_head">
              <div className="encovision_img">
                <img src={encovision} alt="..." />
                <h5>Encovision Summery</h5>
              </div>
              <div>
                <button className="cus_grn_btn">
                  <img src={go} alt="..." />
                  <p>Go to Dashboard</p>
                </button>
              </div>
            </div>
            <div className="device_db_pie_chart">
              <div className="  status_container enco_pie_chart_md">
                <div className="status_head">
                  <h6>Test Statistics</h6>
                  <select name="" id="">
                    <option value="">No. of tests conducted</option>
                  </select>
                </div>
                <StatusBarChart
                  className="category_chart"
                  data={categoryChart}
                />
              </div>
              <div className="  status_container device_bar_CHART">
                <div className="status_head">
                  <h6>Overall Stats</h6>
                  <select name="" id="">
                    <option value="">January 2021</option>
                  </select>
                </div>
                <PieChart className="prop_pie_chart" />
              </div>
            </div>
            <div className="mt-4">
              {/* desktop view table  */}
              <div className="desktopView_enco_table">
                <Table />
              </div>
              {/* mobile view card */}
              <EncovisionMobViewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSumery;
