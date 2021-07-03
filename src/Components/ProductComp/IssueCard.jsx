import React, { useState } from "react";
import { useHistory } from "react-router";
import DeleteProbModal from "../Modal/DeleteProbModal";
// assets 
import slider1 from "../../Assets/Rectangle 95@3x.png";
import user from "../../Assets/user.png";
import location from "../../Assets/location.png";
import toggle from "../../Assets/Group 3659.png";
import edit from "../../Assets/Group 3655.png";
import numImg from '../../Assets/Group 3593.png'

const IssueCard = ({ list, className, togleImg, numIm, Cuser,display }) => {

  // edit delete toggle state and function 

  let [togle, setTogle] = useState(false);
  const history = useHistory();

  const handleTogle = () => {
    setTogle(!togle)
  }

  return (
    <React.Fragment>

      {/* list props pass if card use in any component  */}

      {!list ? (

        // cards style of issues 

        <div className={`issue_card_container  ${display} `}>
          <div className={`card issue_card ${className}`} onClick={() => { history.push("/rant") }}>
            <div className="issue_card_img">
              <img src={slider1} className="card-img-top" alt="..." />
              <img className={`card_num `} src={numImg} alt="img" />
            </div>
            <div className="issue_card_body">
              <div className="card_title_div issue_Card_title">
                <h5>
                  <strong> Title of issues </strong>
                </h5>
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
              </p>
              <div className="location_div issue_loc">
                <img src={location} alt="img" />
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="user_card_detail_div issue_card_user">

              {/* username dont show when issues create current user  */}

              {Cuser ?
                <div>
                  <img src={user} alt="img" />
                  <p>username</p>
                </div>
                : null
              }
              <div>
                <p className='issue_dat_p'>May, 1, 2021</p>
              </div>
            </div>
          </div>
          <div className={`card issue_card ${className}`} onClick={() => { history.push("/rant") }}>
            <div className="issue_card_img">
              <img src={slider1} className="card-img-top" alt="..." />
              <img className="card_num" src={numImg} alt="img" />
            </div>
            <div className="issue_card_body">
              <div className="card_title_div issue_Card_title">
                <h5>
                  <strong> Title of issues </strong>
                </h5>
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
              </p>
              <div className="location_div issue_loc">
                <img src={location} alt="img" />
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="user_card_detail_div issue_card_user">
              {/* username dont show when issues create current user  */}

              {Cuser ?
                <div>
                  <img src={user} alt="img" />
                  <p>username</p>
                </div>
                : null
              }
              <div>
                <p className='issue_dat_p'>May, 1, 2021</p>
              </div>
            </div>
          </div>
          <div className={`card issue_card ${className} `} onClick={() => { history.push("/rant") }}>
            <div className="issue_card_img">
              <img src={slider1} className="card-img-top" alt="..." />
              <img className="card_num" src={numImg} alt="img" />
            </div>
            <div className="issue_card_body">
              <div className="card_title_div issue_Card_title">
                <h5>
                  <strong> Title of issues </strong>
                </h5>
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
              </p>
              <div className="location_div issue_loc">
                <img src={location} alt="img" />
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="user_card_detail_div issue_card_user">
              {/* username dont show when issues create current user  */}

              {Cuser ?
                <div>
                  <img src={user} alt="img" />
                  <p>username</p>
                </div>
                : null
              }
              <div>
                <p className='issue_dat_p'>May, 1, 2021</p>
              </div>
            </div>
          </div>
        </div>
      ) : (

        // list style of issues 

        <div className="proposal_list_body issue_list_style">
          <div className="mob_list_issue_style">

            <div className="list_style_img">
              <img src={slider1} className="card-img-top" alt="..." />
              <img className="list_card_num" src={numImg} alt="img" />
            </div>

            <div className="list_issue_body">
              <div className="card_title_di proposal_Card_titl isseu_list_title">
                <h5>
                  <strong> Title of issues </strong>
                </h5>

                {/* toggle show only in current users issues  */}

                {togleImg ? (
                  <div className="toggle_div">
                    <img onClick={() => setTogle(!togle)} src={toggle} alt="img" />
                    {togle ? (
                      <div className="edit_div">
                        <img className="edit_img2" onClick={handleTogle} src={edit} alt="img" />
                        <hr className="togle_hr" />
                        <DeleteProbModal
                          name="Delete Problem?"
                          para="Are you sure you want to delete this probem?"
                          func={handleTogle}
                        />
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="user_card_detail_div proposal_card_user pro_survey_user list_user">
                    <div>
                      <p className="list_issue_user">username</p>
                      <img src={user} alt="img" />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <p className="card-text issue_list_para">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy 
              </p>
              </div>
              <div className="pro_list_loc">
                <div className="proposal_list issue_list_loc">
                  <div>
                    <img src={location} alt="img" />
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
                <div className="list_date issue_list_data">
                  <p>May, 1, 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pro_list_loc_mob">
            <div className="proposal_list issue_list_loc">
              <div>
                <img src={location} alt="img" />
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="list_date issue_list_data">
              <p>May, 1, 2021</p>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default IssueCard;
