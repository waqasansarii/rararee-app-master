import React from "react";
import block from "../../../Assets/Icon metro-blocked.png";
import eye from "../../../Assets/Icon awesome-eyeg.png";
import bin from "../../../Assets/Icon metro-bin.png";
import user from "../../../Assets/Rectangle 1010.png";

const MobViewUserMngCard = () => {
  return (
    <div className="mobV_org_card_container">
      <div className="mobV_orgCard_md">
        {[1, 2, 3, 4, 5].map((val, id) => (
          <div className="mobV_orgCard mobV_userMng_card" key={id}>
            <div className="orgCard_head">
              <div className="member_info">
                <img className='um_cardUser_img' src={user} alt="..." />
                <div className="table_member_info UM_card_UserInfo">
                  <h6>userName</h6>
                  <div className="table_member_code">
                    <p>gd0rfej7 </p>
                  </div>
                </div>
              </div>
              <div>
                <img className="table_action_eye" src={eye} alt="..." />
                <img className="table_action_block " src={block} alt="..." />
                <img className="table_action_bin" src={bin} alt="..." />
              </div>
            </div>
            <div className="mobV_orgCard_body">
              <div className="orgCard_info">
                <div className="table_member_info uM_contact_info">
                  <h6>Enrico Pfeffer</h6>
                  <div className="table_member_code">
                    <p>Jose_Ankunding@hotmail.com </p>
                  </div>
                </div>
              </div>
              <div className="orgCard_info_sec2">
                <div className="orgCard_info">
                  <h6>Rarare Civic App</h6>
                </div>
                <div className="orgCard_info">
                  <p className="orgInfo_head">April 10, 2021 | 05:00 PM UTC</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobViewUserMngCard;
