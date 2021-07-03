import React from 'react'
import Card from "@material-ui/core/Card";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import userImage from "../../../Assets/Ellipse 226.png";
import shareIcon from "../../../Assets/Icon awesome-share.png";
import location from "../../../Assets/Icon material-location-on.png";
import map from '../../../Assets/Rectangle 1028.png'


const ReportMapCard = () => {
    return (
        <div>
            <div className="Rant_card_div">
            <Card className="RV_card">
              <div className="Rcard_content">
                {" "}
                <h4
                  className="Rtitle_responsive text_bluegreen"
                  style={{ fontSize: "1rem" }}
                >
                  Need A New Road In Nigeria...
                </h4>

              </div>
              <p
                className="Rtext_size_responsive text_darkgray"
                style={{ fontSize: "0.8rem" }}
              >
                May 1 ,2020
              </p>
              <p
                className="Rtext_size_responsive text_lightgray"
                style={{ fontSize: "0.8rem" }}
              >
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo d Lorem ipsum
              </p>

              <div className="Rcard_content">
                <div
                  className="Rtext_size_responsive text_darkgray ms-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  <span>
                    <img
                      className="icon_size_responsive me-2"
                      src={location}
                      alt="..."
                    ></img>
                  </span>
                  &nbsp;Lorem ipsum dolor sit amet, consetet{" "}
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", margin: "0" }}
                >
                  <span>
                    <img
                      className="Ricon_size_responsiveuser"
                      src={userImage}
                      alt="..."
                    ></img>
                  </span>
                  <span
                    className="Rtext_size_responsive text_lightpurple"
                    style={{ padding: "2px", fontSize: "0.8rem" }}
                  >
                    &nbsp;Username
                  </span>
                </div>
              </div>
              <img className='RV_card_map_img' src={map} alt="..." />
              <div id="hr"></div>
              <div className="Rcard_contentLast_row">
                <div>
                  <div
                    className="Rtext_size_responsive text_darkgray fw-bold"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <span className="card_icon_space">
                      <FavoriteOutlinedIcon
                        className="Ricon_size_responsive"
                        style={{ color: "lightgray" }}
                      />
                      &nbsp;
                    </span>
                    1.5K
                  </div>
                </div>
                <div>
                  <div
                    className="Rtext_size_responsive text_darkgray fw-bold"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {" "}
                    <ChatBubbleIcon
                      className="Ricon_size_responsive"
                      style={{ color: "lightgray" }}
                    />
                    &nbsp;800 Comments
                  </div>
                </div>
                <div>
                  <div
                    className="Rtext_size_responsive text_darkgray fw-bold"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {" "}
                    <img
                      className="Ricon_size_responsive"
                      style={{ width: "20px" }}
                      src={shareIcon}
                      alt="..."
                    ></img>
                    &nbsp; 80 Share
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
    )
}

export default ReportMapCard
