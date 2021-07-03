import React from "react";

const DeviceDetail = () => {
  return (
    <div className="device_detail_conatainer">
      <div className="dvc_dtl_md">
        <div className="slt_org_head">
          <h6>Device Details</h6>
          <button className="cus_grn_btn" style={{fontSize:'.9rem'}}>Upload CSV File</button>
        </div>
        <div className="dvc_enrl_dtl_inp">
          <h6>Device Details</h6>
          <input type="text" placeholder="Device IMEI Number" />
        </div>
        <div className="dvc_enrl_dtl_inp">
          <h6>Holder Details</h6>
          <div>
            <input type="text" placeholder="Email Address" />
            <select name="" id="">
              <option value="">Owned By</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetail;
