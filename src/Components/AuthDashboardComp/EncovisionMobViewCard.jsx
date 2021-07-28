import React from "react";
// assets
import location from "../../Assets/Icon material-location-on.png";
import user from "../../Assets/Rectangle 1010.png";
import block from "../../Assets/Icon metro-blocked.png";
import eye from "../../Assets/Icon awesome-eyeg.png";

const EncovisionMobViewCard = () => {
  return (
    <div className="enco_mobView_card_container">
      <div className="enco_mobView_card_md">
        <div className="enco_mobView_card">
          <div className="enco_card_head_sec">
            <div className="member_info">
              <img src={user} alt="..." />
              <div className="table_member_info">
                <h6>Hospital Name Pvt/Ltd</h6>
                <div className="table_member_location">
                  <img src={location} alt="..." />
                  <p>Area, Region, Togo, Nigeria. </p>
                </div>
              </div>
            </div>
            <div>
              <img className="table_action_eye" src={eye} alt="..." />
              <img className="table_action_block" src={block} alt="..." />
            </div>
          </div>
          <div className="enco_card_more_info">
            <div className="enco_card_infos">
              <p className="enco_card_head">Member Since</p>
              <h6>May 21, 2021</h6>
              <p className="enco_card_lastP">05:00 PM UTC</p>
            </div>
            <div className="enco_card_infos">
              <p className="enco_card_head">Total Tests</p>
              <h6>May 21, 2021</h6>
            </div>
            <div className="enco_card_infos">
              <p className="enco_card_head">Entity ID/Type</p>
              <h6>123456789</h6>
              <p className="enco_card_lastP">Hospital</p>
            </div>
          </div>
        </div>
        <div className="enco_mobView_card">
          <div className="enco_card_head_sec">
            <div className="member_info">
              <img src={user} alt="..." />
              <div className="table_member_info">
                <h6>Hospital Name Pvt/Ltd</h6>
                <div className="table_member_location">
                  <img src={location} alt="..." />
                  <p>Area, Region, Togo, Nigeria. </p>
                </div>
              </div>
            </div>
            <div>
              <img className="table_action_eye" src={eye} alt="..." />
              <img className="table_action_block" src={block} alt="..." />
            </div>
          </div>
          <div className="enco_card_more_info">
            <div className="enco_card_infos">
              <p className="enco_card_head">Member Since</p>
              <h6>May 21, 2021</h6>
              <p className="enco_card_lastP">05:00 PM UTC</p>
            </div>
            <div className="enco_card_infos">
              <p className="enco_card_head">Total Tests</p>
              <h6>May 21, 2021</h6>
            </div>
            <div className="enco_card_infos">
              <p className="enco_card_head">Entity ID/Type</p>
              <h6>123456789</h6>
              <p className="enco_card_lastP">Hospital</p>
            </div>
          </div>
        </div>
        <div className="enco_mobView_card">
          <div className="enco_card_head_sec">
            <div className="member_info">
              <img src={user} alt="..." />
              <div className="table_member_info">
                <h6>Hospital Name Pvt/Ltd</h6>
                <div className="table_member_location">
                  <img src={location} alt="..." />
                  <p>Area, Region, Togo, Nigeria. </p>
                </div>
              </div>
            </div>
            <div>
              <img className="table_action_eye" src={eye} alt="..." />
              <img className="table_action_block" src={block} alt="..." />
            </div>
          </div>
          <div className="enco_card_more_info">
            <div className="enco_card_infos">
              <p className="enco_card_head">Member Since</p>
              <h6>May 21, 2021</h6>
              <p className="enco_card_lastP">05:00 PM UTC</p>
            </div>
            <div className="enco_card_infos">
              <p className="enco_card_head">Total Tests</p>
              <h6>May 21, 2021</h6>
            </div>
            <div className="enco_card_infos">
              <p className="enco_card_head">Entity ID/Type</p>
              <h6>123456789</h6>
              <p className="enco_card_lastP">Hospital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncovisionMobViewCard;
