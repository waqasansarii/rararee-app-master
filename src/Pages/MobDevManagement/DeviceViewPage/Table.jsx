import React from "react";
import user from "../../../Assets/Rectangle 1010.png";
import block from "../../../Assets/Icon awesome-edito.png";
import eye from "../../../Assets/Icon awesome-eyeg.png";
import more from "../../../Assets/Path 6914.png";

const Table = () => {
  return (
    <div>
      <div className="proposals_table_container DD_table_container">
        <table className="proposal_view_table user_m_table">
          <thead>
            <th>Application Details</th>
            <th>Installation Date</th>
            <th>
              Status <img src={more} alt="..." />{" "}
            </th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="member_info">
                  <img src={user} alt="..." />
                  <div className="table_member_info">
                    <h6>userName</h6>
                    <div className="table_member_code">
                      <p style={{textDecoration:'none',color:'#5F677C'}}>gd0rfej7 </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>March 10,2021</h6>
                <p>2:15pm</p>
              </td>
              <td>
                <h6>Installed</h6>
              </td>
              <td>
                <img className="table_action_eye" src={eye} alt="..." />
                <img
                  className="table_action_block padding_edit"
                  src={block}
                  alt="..."
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className="member_info">
                  <img src={user} alt="..." />
                  <div className="table_member_info">
                    <h6>userName</h6>
                    <div className="table_member_code">
                      <p style={{textDecoration:'none',color:'#5F677C'}}>gd0rfej7 </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>March 10,2021</h6>
                <p>2:15pm</p>
              </td>
              <td>
                <h6>Installed</h6>
              </td>
              <td>
                <img className="table_action_eye" src={eye} alt="..." />
                <img
                  className="table_action_block padding_edit"
                  src={block}
                  alt="..."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;