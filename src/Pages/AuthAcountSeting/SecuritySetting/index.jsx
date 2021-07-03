import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import AuthSecuritySettingCard from "./AuthSecureSetting";
import './style.css'
const AuthSecuritySetting = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="authority_right_md">
          <AuthSecuritySettingCard />
      </div>
    </div>
  );
};

export default AuthSecuritySetting;
