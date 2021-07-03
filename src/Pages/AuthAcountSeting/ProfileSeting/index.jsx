import React from "react";
import Sidebar from "../../../Components/AuthDashboardComp/Sidebar";
import AuthProfileSettingCard from "./setingCard";
import './style.css'
const AuthProfileSetting = () => {
  return (
    <div className="authority_container">
      <div className="authority_left_md">
        <Sidebar />
      </div>
      <div className="authority_right_md">
          <AuthProfileSettingCard />
      </div>
    </div>
  );
};

export default AuthProfileSetting;
