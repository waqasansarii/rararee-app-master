import React from "react";
// assets 
import location from "../../Assets/Icon material-location-on.png";
import user from "../../Assets/Rectangle 1010.png";
import block from "../../Assets/Icon metro-blocked.png";
import eye from "../../Assets/Icon awesome-eyeg.png";
import more from "../../Assets/Path 6914.png";
import upDown from "../../Assets/Group 5015.png";

const Table = () => {
  return (
    <div>
      <div className="encovision_table_container">
        <div className="table_head_clr"></div>
        <table className="encovision_table">
          <thead>
            <th>Entity ID/Type</th>
            <th>Entity Name/Contact</th>
            <th>
              Total Tests <img src={upDown} alt="..." />
            </th>
            <th>
              Member Since <img src={more} alt="..." />{" "}
            </th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6>21323</h6>
                <p>Hospital</p>
              </td>
              <td>
                <div className="member_info">
                  <img src={user} alt="..." />
                  <div className="table_member_info">
                    <h6>Hospital Name Pvt/Ltd</h6>
                    <div className="table_member_location">
                      <img src={location} alt="..." />
                      <p>Area, Region, Togo, Nigeria. </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>5435</h6>
              </td>
              <td>
                <h6>May 16 2020</h6>
                <p>05:00 PM UTC</p>
              </td>
              <td>
                <img className="table_action_eye" src={eye} alt="..." />
                <img className="table_action_block" src={block} alt="..." />
              </td>
            </tr>
            <tr>
              <td>
                <h6>21323</h6>
                <p>Hospital</p>
              </td>
              <td>
                <div className="member_info">
                  <img src={user} alt="..." />
                  <div className="table_member_info">
                    <h6>Hospital Name Pvt/Ltd</h6>
                    <div className="table_member_location">
                      <img src={location} alt="..." />
                      <p>Area, Region, Togo, Nigeria. </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>5435</h6>
              </td>
              <td>
                <h6>May 16 2020</h6>
                <p>05:00 PM UTC</p>
              </td>
              <td>
                <img className="table_action_eye" src={eye} alt="..." />
                <img className="table_action_block" src={block} alt="..." />
              </td>
            </tr>
            <tr>
              <td>
                <h6>21323</h6>
                <p>Hospital</p>
              </td>
              <td>
                <div className="member_info">
                  <img src={user} alt="..." />
                  <div className="table_member_info">
                    <h6>Hospital Name Pvt/Ltd</h6>
                    <div className="table_member_location">
                      <img src={location} alt="..." />
                      <p>Area, Region, Togo, Nigeria. </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>5435</h6>
              </td>
              <td>
                <h6>May 16 2020</h6>
                <p>05:00 PM UTC</p>
              </td>
              <td>
                <img className="table_action_eye" src={eye} alt="..." />
                <img className="table_action_block" src={block} alt="..." />
              </td>
            </tr>
            <tr>
              <td>
                <h6>21323</h6>
                <p>Hospital</p>
              </td>
              <td>
                <div className="member_info">
                  <img src={user} alt="..." />
                  <div className="table_member_info">
                    <h6>Hospital Name Pvt/Ltd</h6>
                    <div className="table_member_location">
                      <img src={location} alt="..." />
                      <p>Area, Region, Togo, Nigeria. </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>5435</h6>
              </td>
              <td>
                <h6>May 16 2020</h6>
                <p>05:00 PM UTC</p>
              </td>
              <td>
                <img className="table_action_eye" src={eye} alt="..." />
                <img className="table_action_block" src={block} alt="..." />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
