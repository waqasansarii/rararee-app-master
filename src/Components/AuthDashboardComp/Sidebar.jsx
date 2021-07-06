import React from "react";
import { NavLink } from "react-router-dom";
import "./style/sidebar.css";
// assets
import user from "../../Assets/Icon metro-user.png";
import path from "../../Assets/Path 3424.png";
import more from "../../Assets/Path 6919.png";
import dashboard from "../../Assets/Icon material-dashboard.png";
import flag from "../../Assets/Icon metro-flag.png";
import eye from "../../Assets/Icon awesome-eye.png";
import timer from "../../Assets/Icon ionic-ios-timer.png";
import bulb from "../../Assets/Icon awesome-lightbulb2.png";
import plus from "../../Assets/Group 4947.png";
import lines from "../../Assets/Group 4948.png";
import device from "../../Assets/Icon material-devices.png";
import puzle from "../../Assets/Icon awesome-puzzle-piece.png";
import share from "../../Assets/Icon open-share-boxed.png";
import house from "../../Assets/Icon awesome-building.png";
import seting from "../../Assets/Icon ionic-ios-settings.png";
import person from "../../Assets/Icon ionic-md-person.png";
import users from "../../Assets/Icon metro-users.png";
import lock from "../../Assets/Icon awesome-lock.png";
import logout from "../../Assets/Icon feather-log-out.png";

const Sidebar = ({ id }) => {
  return (
    <div className="auth_sidebar_container">
      <div className="auth_sidebar_md">
        <div className="auth_sidebar_sd">
          <div className="sidebar_headd">
            <img src={user} alt="..." />
            <div className="user_details">
              <h5>UserName</h5>
              <p>contact.name@hotmail.com</p>
            </div>
          </div>
          <img className="sidebar_PATH" src={path} alt="..." />
          <div className="sidebar_links_d">
            <ul className="sidebar_ul">
              <li>
                <NavLink
                  to="/auth-dashboard"
                  activeClassName="active_sidebar_link"
                  className="sidebar_links"
                >
                  <div className="img_name">
                    <img src={dashboard} alt="..." />
                    <h6>Dashboard</h6>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li>
                <div className="sidebar_link_head">
                  <img src={flag} alt="..." />
                  <h6>Rant/Rave Report</h6>
                </div>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/report-detail"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={eye} alt="..." />
                    <p>Active Problems</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/report-detail-two"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={timer} alt="..." />
                    <p>Historic Problems</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li>
                <div className="sidebar_link_head">
                  <img src={bulb} alt="..." />
                  <h6>Proposals</h6>
                </div>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/create-proposal"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={plus} alt="..." />
                    <p>Create a proposals</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/auth-view-proposal"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={eye} alt="..." />
                    <p>View your proposals</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/auth-proposal"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={lines} alt="..." />
                    <p>View proposal results</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li>
                <div className="sidebar_link_head">
                  <img src={device} alt="..." />
                  <h6>Mobile Device Management </h6>
                </div>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/organizationn-enroll"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={plus} alt="..." />
                    <p>Organization Enrollment</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/active-organization"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={eye} alt="..." />
                    <p>View active organization</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/device-enroll"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={puzle} alt="..." />
                    <p>Manage devices</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li>
                <div className="sidebar_link_head">
                  <img src={eye} alt="..." />
                  <h6>Encovision </h6>
                </div>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/add-user"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={share} alt="..." />
                    <p>Dashboard</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/user-management"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={house} alt="..." />
                    <p>View all entities</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/device-view"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={plus} alt="..." />
                    <p>Add an entity</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li>
                <div className="sidebar_link_head">
                  <img src={seting} alt="..." />
                  <h6>Account Settings </h6>
                </div>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/auth-profile-setting"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={person} alt="..." />
                    <p>Profile Settings</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/user-detail"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={users} alt="..." />
                    <p>User Managment</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/auth-secure-seting"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={lock} alt="..." />
                    <p>Security Settings</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/organizationn-view"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={logout} alt="..." />
                    <p>Logout</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/enroll-device"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={logout} alt="..." />
                    <p>Logout</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              <li className="sidebar_sub_li">
                <NavLink
                  to="/report-view"
                  activeClassName="active_sidebar_link"
                  className="sidebar_sub_links"
                >
                  <div className="img_name">
                    <img src={logout} alt="..." />
                    <p>Logout</p>
                  </div>
                  <img src={more} alt="..." />
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
