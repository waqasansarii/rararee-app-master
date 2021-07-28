import React from "react";
import location from "../../../Assets/Icon material-location-on.png";
import more from "../../../Assets/Path 6914.png";
import type from "../../../Assets/Group 4966.png";

const Table = () => {
  return (
    <div>
      <div className="proposals_table_container">
        <table className="proposal_view_table">
          <thead>
            <th>Proposal Title</th>
            <th>
              Type <img src={more} alt="..." />
            </th>
            <th>Creation date</th>
            <th>
              Status <img src={more} alt="..." />{" "}
            </th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="member_info">
                  <div className="prop_table_member_info">
                    <h6>Hospital Name Pvt/Ltd</h6>
                    <div className="prop_table_member_location">
                      <img src={location} alt="..." />
                      <p>Area, Region, Togo, Nigeria. </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="proposal_type">
                  <img src={type} alt="..." />
                  <h6>Consensus Forming</h6>
                </div>
              </td>
              <td className="proposal_creat_date">
                <h6>May 16 2020</h6>
                <p>05:00 PM UTC</p>
              </td>
              <td>
                <h6>Ongoing</h6>
              </td>
              <td>
                <div className="view_propsals_btns">
                  <button className="View_prop_btn">View</button>
                  <button className="pause_prop_btn">Pause</button>
                  <button className="delete_prop_btn">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="member_info">
                  <div className="prop_table_member_info">
                    <h6>Hospital Name Pvt/Ltd</h6>
                    <div className="prop_table_member_location">
                      <img src={location} alt="..." />
                      <p>Area, Region, Togo, Nigeria. </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="proposal_type">
                  <img src={type} alt="..." />
                  <h6>Consensus Forming</h6>
                </div>
              </td>
              <td className="proposal_creat_date">
                <h6>May 16 2020</h6>
                <p>05:00 PM UTC</p>
              </td>
              <td>
                <h6>Ongoing</h6>
              </td>
              <td>
                <div className="view_propsals_btns">
                  <button className="View_prop_btn">View</button>
                  <button className="pause_prop_btn">Pause</button>
                  <button className="delete_prop_btn">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
