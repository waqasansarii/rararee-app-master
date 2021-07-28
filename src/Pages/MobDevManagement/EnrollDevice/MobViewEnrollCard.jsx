import React from "react";
import block from "../../../Assets/Icon metro-blocked.png";
import eye from "../../../Assets/Icon awesome-eyeg.png";
import bin from "../../../Assets/Icon metro-bin.png";

const MobViewEnrollCard = () => {
  return (
    <div className="mobV_org_card_container">
      <div className="mobV_orgCard_md">
        {[1, 2, 3, 4, 5].map((val, id) => (
          <div className="mobV_orgCard enrol_device_card" key={id}>
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
                  <p className="orgInfo_head">IMEI Number</p>
                  <h6>4657</h6>
                  <p className="orgInfo_head">123456789</p>
                </div>
                <div className="orgCard_info">
                  <p className="orgInfo_head">Allocated Address</p>
                  <div className=" uM_contact_info">
                    <h6>North Brendon, NZ</h6>
                    <div>
                      <p className="orgInfo_head">-47.3836, -104.1327</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="en_device_cardSec2">
                <div className="orgCard_info">
                  <p className="orgInfo_head">Holder Name/ID</p>
                  <div className=" uM_contact_info">
                    <h6>Ms. Jada Aufderhar</h6>
                    <div className="table_member_code">
                      <p>feiiv343 </p>
                    </div>
                  </div>
                </div>
                <div className="orgCard_info">
                  <p className="orgInfo_head">Activation Date</p>
                  <h6>April 7, 2021</h6>
                  <p className="orgInfo_head">05:00 PM UTC</p>
                </div>
              </div>
              <div className="en_device_cardSec3">
                <div className="orgCard_info">
                  <p className="orgInfo_head">Last Active</p>
                  <h6>2 Day(s) ago</h6>
                </div>
                <div className="orgCard_info">
                  <p className="orgInfo_head">Status</p>
                  <h6>Active</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobViewEnrollCard;
