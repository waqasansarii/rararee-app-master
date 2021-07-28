import React from "react";
import location from "../../../Assets/Icon material-location-on.png";
import type from "../../../Assets/Group 4966.png";
const MobViewCard = () => {
  return (
    <div className="MV_card_proposal_container">
      <div className="mv_cardProp_md">
        <div className="mobV_prop_card">
          <div className="mobV_propCard_left">
            <h5>Nigeria School Renovation Program.</h5>
            <div className="prop_table_member_location">
              <img src={location} alt="..." />
              <p>Area, Region, Togo, Nigeria. </p>
            </div>
            <div className="proposal_type">
              <img src={type} alt="..." />
              <h6>Consensus Forming</h6>
            </div>
            <h6 className='mobV_propcard_date'>April 10, 2021 | 05:00 PM UTC</h6>
          </div>
          <div className="mobV_propCard_right">
              <button className='prop_ongoing'>Ongoing</button>
              {/* <div className="view_propsals_btns"> */}
                  <button className="View_prop_btn">View</button>
                  <button className="pause_prop_btn">Pause</button>
                  <button className="delete_prop_btn">Delete</button>
                {/* </div> */}
          </div>
        </div>
        <div className="mobV_prop_card">
          <div className="mobV_propCard_left">
            <h5>Nigeria School Renovation Program.</h5>
            <div className="prop_table_member_location">
              <img src={location} alt="..." />
              <p>Area, Region, Togo, Nigeria. </p>
            </div>
            <div className="proposal_type">
              <img src={type} alt="..." />
              <h6>Consensus Forming</h6>
            </div>
            <h6 className='mobV_propcard_date'>April 10, 2021 | 05:00 PM UTC</h6>
          </div>
          <div className="mobV_propCard_right">
              <button className='prop_ongoing'>Ongoing</button>
              {/* <div className="view_propsals_btns"> */}
                  <button className="View_prop_btn">View</button>
                  <button className="pause_prop_btn">Pause</button>
                  <button className="delete_prop_btn">Delete</button>
                {/* </div> */}
          </div>
        </div>
        <div className="mobV_prop_card">
          <div className="mobV_propCard_left">
            <h5>Nigeria School Renovation Program.</h5>
            <div className="prop_table_member_location">
              <img src={location} alt="..." />
              <p>Area, Region, Togo, Nigeria. </p>
            </div>
            <div className="proposal_type">
              <img src={type} alt="..." />
              <h6>Consensus Forming</h6>
            </div>
            <h6 className='mobV_propcard_date'>April 10, 2021 | 05:00 PM UTC</h6>
          </div>
          <div className="mobV_propCard_right">
              <button className='prop_ongoing'>Ongoing</button>
              {/* <div className="view_propsals_btns"> */}
                  <button className="View_prop_btn">View</button>
                  <button className="pause_prop_btn">Pause</button>
                  <button className="delete_prop_btn">Delete</button>
                {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobViewCard;
