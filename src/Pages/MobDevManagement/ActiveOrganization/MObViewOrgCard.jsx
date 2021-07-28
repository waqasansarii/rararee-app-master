import React from "react";
import block from "../../../Assets/Icon metro-blocked.png";
import eye from "../../../Assets/Icon awesome-eyeg.png";
import bin from "../../../Assets/Icon metro-bin.png";

const MObViewOrgCard = () => {
  return (
    <div className="mobV_org_card_container">
      <div className="mobV_orgCard_md">
        {[1, 2, 3, 4, 5].map((val, id) => (
          <div className="mobV_orgCard" key={id}>
            <div className="orgCard_head">
              <div className="table_member_info uM_contact_info">
                <h6>PlMS Hospital.</h6>
                <div className="table_member_code">
                  <p>feiiv343 </p>
                </div>
              </div>
              <div>
                <img className="table_action_eye" src={eye} alt="..." />
                <img className="table_action_block " src={block} alt="..." />
                <img className="table_action_bin" src={bin} alt="..." />
              </div>
            </div>
            <div className="mobV_orgCard_body">
              <div className="orgCard_info_sec1">
                <div className="orgCard_info">
                  <p className="orgInfo_head">NO OF DEVICES</p>
                  <h6>4657</h6>
                </div>
                <div className="orgCard_info">
                  <p className="orgInfo_head">KEY CONTACT</p>
                  <div className="table_member_info uM_contact_info">
                    <h6>Enrico Pfeffer</h6>
                    <div className="table_member_code">
                      <p>Jose_Ankunding@hotmail.com </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="orgCard_info_sec2">
                <div className="orgCard_info">
                  <p className="orgInfo_head">ACTIVE SINCE</p>
                  <h6>April 12</h6>
                </div>
                <div className="orgCard_info">
                  <p className="orgInfo_head">LAST ACTIVE</p>
                  <h6>18 Day(s) Ago</h6>
                </div>
                <div className="orgCard_info">
                  <p className="orgInfo_head">REF. ID</p>
                  <div className="table_member_code">
                    <p> 1234657</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MObViewOrgCard;
