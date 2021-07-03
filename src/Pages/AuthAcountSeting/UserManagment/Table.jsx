import React from "react";
import user from "../../../Assets/Rectangle 1010.png";
import block from "../../../Assets/Icon awesome-edito.png";
import eye from "../../../Assets/Icon awesome-eyeg.png";
import more from "../../../Assets/Path 6914.png";
import bin from "../../../Assets/Icon metro-bin.png";

const Table = () => {
  return (
    <div>
      <div className="proposals_table_container">
        <table className="proposal_view_table user_m_table">
          <thead>
            <th>User ID</th>
            <th>User Name</th>
            <th>Department</th>
            <th>Phone Number/Email Address</th>
            <th>
              Action Since <img src={more} alt="..." />{" "}
            </th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6>21323</h6>
              </td>
              <td>
                <div className="member_info">
                  <img src={user} alt="..." />
                  <div className="table_member_info">
                    <h6>userName</h6>
                    <div className="table_member_code">
                      <p>gd0rfej7 </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>5435</h6>
              </td>
              <td>
                <div className="table_member_info uM_contact_info">
                  <h6>(317) 909-0902 x42605</h6>
                  <div className="table_member_code">
                    <p>Jose_Ankunding@hotmail.com </p>
                  </div>
                </div>
              </td>
              <td>
                  <h6>March 10,2021</h6>
                  <p>2:15pm</p>
              </td>
              <td>
                <img className="table_action_eye" src={eye} alt="..." />
                <img className="table_action_block padding_edit" src={block} alt="..." />
                <img className='table_action_bin' src={bin} alt="..." />
              </td>
            </tr>
            <tr>
              <td>
                <h6>21323</h6>
              </td>
              <td>
                <div className="member_info">
                  <img src={user} alt="..." />
                  <div className="table_member_info">
                    <h6>userName</h6>
                    <div className="table_member_code">
                      <p>vat53fw </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>5435</h6>
              </td>
              <td>
                <div className="table_member_info uM_contact_info">
                  <h6>(942) 561-2780 x70948</h6>
                  <div className="table_member_code">
                    <p>Jose_Ankunding@hotmail.com </p>
                  </div>
                </div>
              </td>
              <td>
                  <h6>March 10,2021</h6>
                  <p>2:15pm</p>
              </td>
              <td>
                <img className="table_action_eye" src={eye} alt="..." />
                <img className="table_action_block padding_edit" src={block} alt="..." />
                <img className='table_action_bin' src={bin} alt="..." />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
