import React from 'react'
import hp from "../../../Assets/Mask Group 26.png";

const OrgDetailCard = ({className}) => {
    return (
        <div className={`organize_vp_dcard ${className}`}>
            <div className="organize_vp_dcard_sd">
            <h5>Organization Details</h5>
            <div className="organize_vp_dcard_info">
              <div className="dcard_organize_info">
                <img src={hp} alt="..." />
                <div className="organize_d_info">
                  <h6>Organization name</h6>
                  <p>National Institute of Health.</p>
                  <p className="underline">ADDFA156</p>
                </div>
              </div>
              <div className="organize_vp_type">
                <h6>Organization type</h6>
                <p>Hospital</p>
              </div>
            </div>
            <div className="organize_vp_dcard_addres">
              <div className="Org_vp_adrs_info">
                <h6>Organization Address</h6>
                <p>
                  Street: 69 Ogunlana Drive, Surulere. City: Lagos · Street: 13,
                  Olufowobi St. City: Lawanson
                </p>
              </div>
              <div className="org_vp_othr_adrs">
                <h6>Muncipality</h6>
                <p>Lawanson</p>
              </div>
              <div className="org_vp_othr_adrs">
                <h6>Region</h6>
                <p>Nigeria</p>
              </div>
              <div className="org_vp_othr_adrs">
                <h6>City</h6>
                <p>Nigeria</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default OrgDetailCard
