import React from "react";
import search from "../../../Assets/Icon feather-search.png";
import location from "../../../Assets/Icon feather-map-pin.png";
import icon from '../../../Assets/Subtraction 3.png'
import bar from '../../../Assets/Group 5018.png'
const Searchbar = () => {
  return (
    <div>
      <div className="auth_reports_search_md">
        <div className="searhc_proposal_md auth_report_search">
          <img src={search} alt="..." />
          <input type="text" placeholder="Search proposals" />
        </div>
        <div className="searhc_proposal_md device_location_search AR_srch">
          <img src={location} alt="..." />
          <input type="text" placeholder="Search an organization" />
          <p>x</p>
        </div>
        <button className="cus_grn_btn">Search</button>
      </div>
      <div className="AR_result_md">
          <div className="ar_result_left">
            <p> Showing </p> <select name="" id="">
                <option value=""> 100 </option>
            </select>  
            out of <span> 1,100 </span> active problems
          </div>
          <div className="AR_right_img">
             <img src={icon} alt="..." />
             <img src={bar} alt="..." />
          </div>
      </div>
    </div>
  );
};

export default Searchbar;
