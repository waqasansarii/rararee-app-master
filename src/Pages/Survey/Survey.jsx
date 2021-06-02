import React,{useLayoutEffect} from 'react'
import Button from '../../Components/Btn/Btn'
import { Link, useParams } from 'react-router-dom'
import { surveyResultList } from '../../Data/SurveyResultLIstData'
// assets 
import user from '../../Assets/user.png'
import location from '../../Assets/location.png'
import timer from '../../Assets/timer.png'
import users from '../../Assets/Group 3626.png'
import gift from '../../Assets/Icon awesome-gift.png'
import './Survey.css'

const Survey = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      },[]);

    const { id } = useParams()

    return (
        <div className='survey_page_container'>
            <div className="survey_page_main_div">
                <div className="survey_links_div">
                    <div className='get_blog_one_link textGrey'>
                        Search Result {' > '} <span>Survey</span>
                    </div>
                    <Button className='participate_btn' value='Participate Now!' />
                </div>
                <div className="survey_card_list_">
                    <div className={`proposal_card_body survey_single_card_body `}>
                        <div className='card_title_div proposal_Card_title survey_single_title'>
                            <h5><strong style={{ color: '#1cc1a0' }}> Rising cataract issues in </strong></h5>
                            <div>
                                <p>May, 1, 2021</p>
                            </div>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et
                       </p>
                        <div className='location_div proposal_loc'>
                        </div>
                        <div className='user_card_detail_div  survey_user'>
                            <div className='locatio_main_div'>
                                <img src={location} alt="img" />
                                <span>Lorem ipsum dolor sit</span>
                            </div>
                            <div className='survey_list_user_info_div'>
                                <img src={user} alt="img" />
                                <p>username</p>
                            </div>
                        </div>
                        <p className='survey_hr' />
                        <div className="perticipant_div">
                            <div>
                                <img src={timer} alt="img" />
                                <span>2 Minutes</span>
                            </div>
                            <div>
                                <img className='users_survey' src={users} alt="img" />
                                <span>1500+</span>
                            </div>
                            <div>
                                <img src={gift} alt="img" />
                                <span>50 Loco points</span>
                            </div>
                        </div>
                        <p className='survey_hr_2' />

                        <div className='user_card_detail_div  survey_user survey_mob_user'>
                            <div className='survey_list_user_info_div_mob'>
                                <img src={user} alt="img" />
                                <p>username</p>
                            </div>
                                <div>
                                    <p>May, 1, 2021</p>
                                </div>
                        </div>
                    </div>
                    <div className='survey_list_div'>
                        <ul className="health_analysis_ul survey_caard_ul">
                            {surveyResultList.list.map((val, i) => (
                                <Link key={i} className='card_link' to={`/survey/${id}/${val.id}`}>
                                    <li  >
                                        <p>{val.p}</p>
                                        <div className='health_checkbox'>
                                            <input type="checkbox" name="" id="" />
                                            <span >{val.check1}</span>
                                        </div>
                                        <div className='health_checkbox'>
                                            <input type="checkbox" name="" id="" />
                                            <span>{val.check2}</span>
                                        </div>
                                        <div className='health_checkbox'>
                                            <input type="checkbox" name="" id="" />
                                            <span>{val.check3}</span>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Survey
