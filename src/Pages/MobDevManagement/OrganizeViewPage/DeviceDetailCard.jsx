import React from "react";

const DeviceDetailCard = ({
  uImg,
  head,
  title,
  head2,
  para2,
  head3,
  para3,
  para4,
  para5,
  dd_marginT,
  mClassName
}) => {
  return (
    <div className={`organize_vp_kccard ${mClassName}`}>
      <div className="organize_vp_kccard_sd">
        <h5>{head}</h5>
        <div className="org_vp_kccard_uInfo">
          <img src={uImg} alt="..." />
          <div className="org_vp_kccard_userName">
            <h6>{title}</h6>
            <p className="underline">12568469</p>
          </div>
        </div>
        <div className={`org_vp_kccard_user_contact ${dd_marginT} `}>
          <div className="org_kccard_num">
            <h6>{head2}</h6>
            <p className={`${dd_marginT}`}>{para2}</p>
            {para4 ? <p>{para4}</p> : null}
          </div>
          <div className="org_kccard_num">
            <h6>{head3}</h6>
            <p className={`${dd_marginT}`}>{para3}</p>
            {para5 ? <p>{para5}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetailCard;
