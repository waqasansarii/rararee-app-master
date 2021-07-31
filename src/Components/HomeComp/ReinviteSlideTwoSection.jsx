import React from "react";
// assets
import bg from "../../Assets/slider bg.png";
import mapImg from "../../Assets/Group 6012.png";
import location from '../../Assets/Icon material-locationW.png'
import shadowImg2 from '../../Assets/slider main shadow.png'
import shadowImg from '../../Assets/slide2 bg.png'

const ReinviteSlideTwoSection = () => {
  return (
    <div className="sliderMap_container">
      <div className="sliderMap_md">
        <div className="sliderMap_sd">
          <div className="sliderMap_left_section">
            <div>
              <h5>Discover, View & Feel!</h5>
              <h1>WASH - AI Driven</h1>
              <p>
                United Nations USDG6 (Ensure access to water and sanitation for
                all)
              </p>
              <div className="sliderMap_btns">
                <button className="cus_grn_btn">Take a tour</button>
                <button className="sliderMap_cusBtn">
                  Share with a friend
                </button>
              </div>
            </div>
            <div className="sliderMap_locations">
                <h1>Near you!</h1>
                <div className="sliderMap_loc">
                    <img src={location} alt="..." />
                    <p>User current location, City, Country </p>
                </div>
                <div className="beforeAfteDiv">
                    <img src={mapImg} alt="..." />
                    <img src={mapImg} alt="..." />
                </div>
                <p className='slideremail'>Source: www.planet.com</p>
            </div>
          </div>
          <div className="sliderMap_right_section">
              <div className='BeforAfter_text'>
                  <p className='afterText'>After</p>
                  <p className='beforeText'>Before</p>

              </div>
            <div className='shadowImg_Container'>
                <img className='shadow_img' src={shadowImg} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReinviteSlideTwoSection;
