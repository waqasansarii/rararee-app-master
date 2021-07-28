import React from "react";
// asssets
import location from "../../../Assets/Icon material-location-on.png";
import user from "../../../Assets/Rectangle 1010.png";
const ReportMobViewCard = () => {
  return (
    <div className="report_mobView_card_md">
      <div className="report_mobV_cards">
        {[1, 2, 3, 4, 5].map((val, id) => (
          <div className="report_mobV_card" key={id}>
            <div className="report_mobV_head">
              <h5>Pothole in Sector G-10</h5>
              <p className="report_tag">New</p>
            </div>
            <div className="prop_table_member_location Ar_loc">
              <img src={location} alt="..." />
              <p>Area, Region, Togo, Nigeria. </p>
            </div>
            <h6 className="report_card_num">123456</h6>
            <div className="report_card_user_info">
              <div className="ar_user_table_name">
                <img src={user} alt="..." />
                <p>username </p>
              </div>
              <h6>April 10, 2021 | 05:00 PM UTC</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportMobViewCard;
