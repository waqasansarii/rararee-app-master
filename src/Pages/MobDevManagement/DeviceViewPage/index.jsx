import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import DeviceDetailCard from "../OrganizeViewPage/DeviceDetailCard";
import OrgDetailCard from "../OrganizeViewPage/OrgDetailCard";
import Table from "./Table";
import "./style.css";
// assets
import arrow from "../../../Assets/Icon awesome-arrow-left.png";
import user from "../../../Assets/Image 11.png";
import s1 from "../../../Assets/Icon metro-switch.png";
import s2 from "../../../Assets/Icon metro-switch2.png";
import s3 from "../../../Assets/Icon material-block.png";
import s4 from "../../../Assets/Icon awesome-locko.png";
import togle from "../../../Assets/Group 5706.png";
import togle2 from "../../../Assets/Group 5707.png";
import MobViewDeviceCard from "./MobViewDeviceCard";

const DeviceView = () => {
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
              <h3 className="mobV_mWeb_head">Organization View Page</h3>
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
      <div className="organizatio_vp_right_md dd_vp_right_md">
        <div className="viewProposal_head org_vp_head">
          <div className="">
            <Link className="arrow_link">
              <img src={arrow} alt="..." />
              <h5>Device View Page</h5>
            </Link>
          </div>
          <div className="view_propsal_btn">
            <button className="proposal_pause">Block</button>
            <button className="proposal_dlt">Delete</button>
          </div>
        </div>
        <div className="device_vp_cards_md">
          <div className="auth_dvPage_cards_md">
            <div className="device_DP_container">
              <DeviceDetailCard
                uImg={user}
                head="Device Detail"
                head2="Active Since"
                head3="Last Activity"
                title="Apple Ipad Pro"
                para2="April 10, 2021"
                para3="April 10, 2021"
                para4="05:00 PM UTC"
                para5="05:00 PM UTC"
                dd_marginT="dd_marginT"
                mClassName="dd_m_Card_d"
              />
            </div>
            <OrgDetailCard className="Org_dd_vp_md" />
          </div>
          <div className="DD_vp_table_cont">
            {/* device control buttons  */}
            <div className="dd_vp_acc_btns_md">
              <div className="device_control_md">
                <h6>Device Control</h6>
                <div>
                  <button className="bg_redBtn">
                    <img src={s1} alt="..." />
                    <p>Switch off</p>
                  </button>
                  <button className="bg_grnBtn">
                    <img src={s2} alt="..." />
                    <p>Restart</p>
                  </button>
                  <button className="bg_blueBtn">
                    <img src={s3} alt="..." />
                    <p>Lock Device</p>
                  </button>
                  <button className="bg_orngBtn">
                    <img src={s4} alt="..." />
                    <p>Change Password</p>
                  </button>
                </div>
              </div>
              <div className="access_control_md">
                <h6>Access & Control</h6>
                <ul className="accs_control_ul">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <div className="accs_contrl_para">
                      <h6>Limit device access</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna
                      </p>
                    </div>
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    <div className="accs_contrl_para">
                      <h6>Limit device access</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="DD_vp_table_md">
              <div className="org_vp_table_head">
                <h6>Applications Control</h6>
                <div className="dd_end_btn">
                  <button className="cus_grn_btn">Install Custom API</button>
                </div>
              </div>
              {/* table for desktop view  */}
              <div className="org_vp_table">
                <Table />
              </div>
              {/* cards for mobile view  */}
              <MobViewDeviceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceView;
