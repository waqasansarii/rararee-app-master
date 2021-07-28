import React from "react";
import user from "../../../Assets/Rectangle 1010.png";
import block from "../../../Assets/Icon metro-blocked.png";
import eye from "../../../Assets/Icon awesome-eyeg.png";
import more from "../../../Assets/Path 6914.png";
import bin from "../../../Assets/Icon metro-bin.png";

const Table = () => {
  return (
    // <div>
    <div className="management_table_container">
      <table className="proposal_view_table active_mange_table">
        <thead>
          <th>Ref. ID</th>
          <th>Organization Name/ID</th>
          <th>No. of Devices</th>
          <th>
            Active Since <img src={more} alt="..." />
          </th>
          <th>
            {/* Action Since <img src={more} alt="..." />{" "} */}
            Key Contact
          </th>
          <th>
            Last Active <img src={more} alt="..." />
          </th>

          <th>Action</th>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13].map((val, id) => (
            <tr key={id}>
              <td>
                <h6>LJKLDFI</h6>
                <p>5435435</p>
              </td>
              <td>
                <div className="table_member_info uM_contact_info">
                  <h6>PlMS Hospital.</h6>
                  <div className="table_member_code">
                    <p>feiiv343 </p>
                  </div>
                </div>
              </td>
              <td>
                <h6>5435</h6>
              </td>
              <td>
                <h6>March 10,2021</h6>
                <p>2:15pm</p>
              </td>
              <td>
                <div className="table_member_info uM_contact_info">
                  <h6>Enrico Pfeffer</h6>
                  <div className="table_member_code">
                    <p>Jose_Ankunding@hotmail.com </p>
                  </div>
                </div>
              </td>
              <td>
                <h6>18 Days ago</h6>
              </td>
              <td>
                <img className="table_action_eye" src={eye} alt="..." />
                <img className="table_action_block " src={block} alt="..." />
                <img className="table_action_bin" src={bin} alt="..." />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // </div>
  );
};

export default Table;
