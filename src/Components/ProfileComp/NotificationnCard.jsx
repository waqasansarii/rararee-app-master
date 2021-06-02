import React from 'react'
import Button from '../Btn/Btn'
import { useHistory } from 'react-router-dom'
// material ui 
import Switch from '@material-ui/core/Switch'
// assets 
import back from '../../Assets/Icon-arrow-right.png'



const NotificationSettingCard = () => {

    const history = useHistory()
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className='profile_setting_card_container'>
            <div className="profile_seting_card_div">
                <div className="proSetting_head_div noti_card_head_div">
                    <div onClick={() => history.push('/account-setting')}>
                        <img src={back} alt="img" />
                        <h6>Notification Settings</h6>
                    </div>
                    <Button className='upcoming_btn' value='Save Changes' />
                </div>
                <div className='profile_setting_inps_div notification_card_div'>
                    <div className='profile_setting_inp_img notifications_card'>
                        <h6>Notification Settings</h6>
                        <ul className="notification_ul">
                            <li>
                                <div className="head_select_div">
                                    <h6>Rants</h6>
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga

                                </p>
                            </li>
                            <li>
                                <div className="head_select_div">
                                    <h6>Raves</h6>
                                    <Switch
                                        checked={state.checkedA}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedA"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga
                                </p>
                            </li>
                            <li>
                                <div className="head_select_div">
                                    <h6>Surveys</h6>
                                    <Switch
                                        checked={state.checkedC}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedC"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga
                                </p>
                            </li>
                            <li>
                                <div className="head_select_div">
                                    <h6>Proposals</h6>
                                    <Switch
                                        checked={state.checkedD}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedD"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga
                                </p>
                            </li>
                        </ul>
                        <Button className='upcoming_btn' value='Save Changes' />

                    </div>
                </div>

            </div>

        </div>

    )
}

export default NotificationSettingCard