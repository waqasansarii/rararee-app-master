import React from "react";
import user from "../../../Assets/Rectangle 1010.png";
import block from "../../../Assets/Icon awesome-edito.png";
// import eye from "../../../Assets/Icon awesome-eyeg.png";
import bin from "../../../Assets/Icon metro-bin.png";

const MobViewDeviceCard = () => {
  return (
    <div className="mobV_org_card_container">
      <div className="mobV_orgCard_md">
        {[1, 2, 3, 4, 5].map((val, id) => (
          <div className="mobV_orgCard" key={id}>
            <div className="orgCard_head">
              <div className="member_info">
                <img src={user} alt="..." />
                <div
                  className="table_member_info"
                  style={{ marginLeft: "10px" }}
                >
                  <h6>userName</h6>
                  <div className="table_member_code">
                    <p style={{ textDecoration: "none", color: "#5F677C" }}>
                      App ID: 1256354{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img className="table_action_block " src={block} alt="..." />
                <img className="table_action_bin" src={bin} alt="..." />
              </div>
            </div>
            <div className="mobV_orgCard_body">
              <div className="orgCard_info_sec2">
                <div className="orgCard_info">
                  <h6>Not Installed</h6>
                </div>
                <div className="orgCard_info">
                  <h6>April 10, 2021 | 05:00 PM UTC</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobViewDeviceCard;
