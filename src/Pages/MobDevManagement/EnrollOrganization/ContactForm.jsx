import React from "react";

const ContactForm = () => {
  return (
    <div className="auth_organize_form_container auth_OE_Cform">
      <div className="auth_organizeForm_md auth_contact_form">
        <h6>Key Contact Details</h6>
        <div className="auth_OD_sd">
          <div className="auth_CDI_hW">
            <input type="text" placeholder='Contact First Name' />
            <input type="text" placeholder='Contact Last Name' />
          </div>
          <div className="auth_CD_CNI">
            <input
              type="text"
              style={{ width: "60px", padding: "6px 10px" }}
              name=""
              id=""
            //   value='+92'
              defaultValue='+92'
            />
            <input type="number" />
          </div>
          <input
            className="auth_OEI_FW"
            type="email"
            placeholder="Contact Email Address"
          />
          <input
            className="auth_OEI_FW"
            type="text"
            placeholder="Holder Address"
          />
        </div>
      </div>
      <div className="auth_organizeForm_md auth_OE_CF">
        <h6 className="auth_OE_heading">Device Details</h6>
        <div className="auth_CDI_hW">
          <select name="" id="">
            <option value="">Device Quantity</option>
          </select>
          <input type="date" placeholder="no" />
        </div>
      </div>
      <div className="auth_organizeForm_md auth_OE_CF">
        <h6 className="auth_OE_heading">Geo Coordinates</h6>
        <div className="auth_CDI_hW">
          <input type="text" placeholder='Latitude' />
          <input type="text" placeholder='Longitude' />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
