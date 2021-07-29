import React, { useLayoutEffect } from "react";
import ProfileCard from "../../Components/ProfileComp/ProfileCard";
import SecuritySettingCard from "../../Components/ProfileComp/SecuritySetCard";
import Footer from "../../Layout/Footer";

const SecuritySetting = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div className="acount_container">
          <div className="acount_main_div">
            <ProfileCard />
            <SecuritySettingCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SecuritySetting;
