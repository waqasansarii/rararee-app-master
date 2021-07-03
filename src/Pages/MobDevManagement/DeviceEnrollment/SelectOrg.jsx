import React from "react";
import hp from "../../../Assets/Mask Group 26.png";

const SelectOrg = () => {
  return (
    <div className="slct_org_card_container">
      <div className="slt_org_md">
        <div className="slt_org_head">
          <h6>Select Organization</h6>
          <button className="cus_grn_btn" style={{fontSize:'.9rem'}}>Add an organization</button>
        </div>
        <div className='slt_org_mPara'>
          <p>
            Select an organization to enroll a device. Please add an
            organization before enrolling a device.
          </p>
          <select name="" id="">
            <option value="">Search for an organization</option>
          </select>
        </div>
        <div className="slt_org_list">
            <ul className='slt_org_list_ul'>
                <li>
                    <img src={hp} alt="..." />
                    <div className="org_list_info">
                        <h6>Maroof International Hospital</h6>
                        <p className="underline">123456789</p>
                    </div>
                </li>
                <li>
                    <img src={hp} alt="..." />
                    <div className="org_list_info">
                        <h6>Maroof International Hospital</h6>
                        <p className="underline">123456789</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectOrg;
