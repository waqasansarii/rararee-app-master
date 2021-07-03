import React from "react";
import user from "../../../Assets/Rectangle 1010.png";
import block from "../../../Assets/Icon metro-blocked.png";
import eye from "../../../Assets/Icon awesome-eyeg.png";
import more from "../../../Assets/Path 6915.png";
import bin from "../../../Assets/Icon metro-bin.png";

const Table = () => {
  return (
    // <div>
    <div className="management_table_container">
      <table className="proposal_view_table enroll_D_table">
        <thead>
          <th>Device IMEI/ID</th>
          <th>Organization Name/ID</th>
          <th>Allocated Address</th>
          <th>
            {/* Action Since <img src={more} alt="..." />{" "} */}
            Holder Name/ID
          </th>
          <th>Activation Date</th>
          <th>Last Active</th>
          <th>
            Status <img src={more} alt="..." />
          </th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="table_member_info uM_contact_info">
                <h6>253.82.140.177</h6>
                <div className="table_member_code">
                  <p>12568469 </p>
                </div>
              </div>
            </td>
            <td>
              <div className="table_member_info uM_contact_info">
                <h6>Pakistani Air Force Hospital Unit II</h6>
                <div className="table_member_code">
                  <p>12568469 </p>
                </div>
              </div>
            </td>
            <td>
              <h6>North Brendon, NZ</h6>
              <p>-47.3836, -104.1327</p>
              {/* <h6>5435</h6> */}
            </td>
            <td>
              <div className="table_member_info uM_contact_info">
                <h6>Ms. Jada Aufderhar</h6>
                <div className="table_member_code">
                  <p>feiiv343 </p>
                </div>
              </div>
            </td>
            <td>
              <h6>March 10,2021</h6>
              <p>2:15pm</p>
            </td>
            <td>
              <h6>18 Days ago</h6>
            </td>
            <td>Active</td>
            <td>
              <img className="table_action_eye" src={eye} alt="..." />
              <img className="table_action_block " src={block} alt="..." />
              <img className="table_action_bin" src={bin} alt="..." />
            </td>
          </tr>
          <tr>
            <td>
              <div className="table_member_info uM_contact_info">
                <h6>253.82.140.177</h6>
                <div className="table_member_code">
                  <p>12568469 </p>
                </div>
              </div>
            </td>
            <td>
              <div className="table_member_info uM_contact_info">
                <h6>Pakistani Air Force Hospital Unit II</h6>
                <div className="table_member_code">
                  <p>12568469 </p>
                </div>
              </div>
            </td>
            <td>
              <h6>North Brendon, NZ</h6>
              <p>-47.3836, -104.1327</p>
              {/* <h6>5435</h6> */}
            </td>
            <td>
              <div className="table_member_info uM_contact_info">
                <h6>Ms. Jada Aufderhar</h6>
                <div className="table_member_code">
                  <p>feiiv343 </p>
                </div>
              </div>
            </td>
            <td>
              <h6>March 10,2021</h6>
              <p>2:15pm</p>
            </td>
            <td>
              <h6>18 Days ago</h6>
            </td>
            <td>Active</td>
            <td>
              <img className="table_action_eye" src={eye} alt="..." />
              <img className="table_action_block " src={block} alt="..." />
              <img className="table_action_bin" src={bin} alt="..." />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    // </div>
  );
};

export default Table;
