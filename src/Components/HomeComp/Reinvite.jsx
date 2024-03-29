import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
// assets
import girl from "../../Assets/Layer 2@2x.png";
import polygon1 from "../../Assets/Polygon 3@2x.png";
import polygon2 from "../../Assets/Polygon 2@2x.png";
import cros1 from "../../Assets/Group 26@2x.png";
import cros2 from "../../Assets/Group 25@3x.png";
// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
} from "swiper/core";
import ReinviteSlideTwoSection from "./ReinviteSlideTwoSection";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, Mousewheel]);

const Reinvite = () => {
  // const ref1 = useRef(null)
  //  var y = ref1.current

  return (
    <div className="reinvite_container">
      <Swiper navigation={true} pagination className='heroSection_slider'
       autoHeight={true}
       >
        <SwiperSlide className='bgSlide1'>
          <div className="reinvite_main_div">
            <div className="reinvite_head_div">
              <div className="img_detail_div">
                <img className="polygon1_img" src={polygon1} alt="img" />
                <div className="reinvite_detail_div">
                  <h2 className="reinventing_head">
                    Reinventing
                    <strong style={{ color: "#19c2a0", marginLeft: "5px" }}>
                      Citizen
                    </strong>{" "}
                    Engagement
                  </h2>
                  <p className="reinventing_para">
                    We are delivering citizen benefits remotely and at scale to
                    improve quality of life for people in cities and rural areas
                    across Sub-Sahara Africa
                  </p>
                  <Link className="Sign_up_today_link" to="/signup">
                    Sign Up today
                  </Link>
                  <img className="polygon2_img" src={polygon2} alt="img" />
                </div>
              </div>
            </div>
            <div className="reinvite_img_div">
              <div className="cros_img_div">
                <img className="cros1_home" src={cros1} alt="img" />
                <img className="cros2_home" src={cros2} alt="img" />
              </div>
              <ul className="see_world_ul" id="see_world_ul">
                <Swiper
                  // pagination
                  spaceBetween={0}
                  slidesPerView={3}
                  centeredSlides
                  initialSlide={1}
                  direction={"vertical"}
                  mousewheel
                  className="myGirls_slider swiper_vertical"
                  style={{ paddingLeft: 5, paddingRight: 5 }}
                >
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li1">Change how you see the world! 😃 </li>
                  </SwiperSlide>
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li2">
                      You are a citizen of Global Village! 😄
                    </li>
                  </SwiperSlide>
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li1">Change how you see the world! 🌎 </li>
                  </SwiperSlide>
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li1">Change how you see the world! 😄 </li>
                  </SwiperSlide>
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li1">Change how you see the world! 🌏 </li>
                  </SwiperSlide>
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li1">Change how you see the world! 😵 </li>
                  </SwiperSlide>
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li1">Change how you see the world! 😃 </li>
                  </SwiperSlide>
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li1">Change how you see the world! 🌏 </li>
                  </SwiperSlide>
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li1">Change how you see the world! 😵 </li>
                  </SwiperSlide>
                  <SwiperSlide className="li_swiper_slides">
                    <li className="li1">Change how you see the world! 😃 </li>
                  </SwiperSlide>
                </Swiper>
              </ul>
              <img className="girl_img" src={girl} alt="img" />
              <img className="polygon3_img" src={polygon2} alt="img" />
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
            <ReinviteSlideTwoSection />
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reinvite;
