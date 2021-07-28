import React from "react";
import location from "../../../Assets/Icon material-location-on.png";
import more from "../../../Assets/Path 6914.png";
import user from "../../../Assets/Rectangle 1010.png";
import updown from "../../../Assets/Group 5015.png";

const Table = () => {
  return (
    <div className="proposals_table_container AR_detail_table_container">
      <table className="proposal_view_table AR_detail_table">
        <thead>
          <th>Ticket ID</th>
          <th>Description/Location</th>
          <th>
            Upload Date <img src={updown} alt="..." />{" "}
          </th>
          <th>
            Status <img src={more} alt="..." />
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="ar_user_table_info">
                <h6>1234567</h6>
                <div className="ar_user_table_name">
                  <img src={user} alt="..." />
                  <p>username </p>
                </div>
              </div>
            </td>
            <td>
              <div className="prop_table_member_info AR_loc_m">
                <h6>Pothole in Sector G-10</h6>
                <div className="prop_table_member_location Ar_loc">
                  <img src={location} alt="..." />
                  <p>Area, Region, Togo, Nigeria. </p>
                </div>
              </div>
            </td>
            <td className="proposal_creat_date">
              <h6>May 16 2020</h6>
              <p>05:00 PM UTC</p>
            </td>
            <td>
              <h6>New</h6>
            </td>
          </tr>
          <tr>
            <td>
              <div className="ar_user_table_info">
                <h6>1234567</h6>
                <div className="ar_user_table_name">
                  <img src={user} alt="..." />
                  <p>username </p>
                </div>
              </div>
            </td>
            <td>
              <div className="prop_table_member_info AR_loc_m">
                <h6>Pothole in Sector G-10</h6>
                <div className="prop_table_member_location Ar_loc">
                  <img src={location} alt="..." />
                  <p>Area, Region, Togo, Nigeria. </p>
                </div>
              </div>
            </td>
            <td className="proposal_creat_date">
              <h6>May 16 2020</h6>
              <p>05:00 PM UTC</p>
            </td>
            <td>
              <h6>New</h6>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
