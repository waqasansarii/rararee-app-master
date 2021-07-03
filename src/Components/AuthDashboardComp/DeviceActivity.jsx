import React from "react";
import { Link } from "react-router-dom";
// assets
import device from "../../Assets/Icon material-devicesblue.png";

const DeviceActivity = () => {
  return (
    <div className="device_activity_container">
      <div className="device_activity_md">
        <div className="device_activie_head">
          <h5>Recently Activity Feed</h5>
          <Link className='acitivity_link'>View All</Link>
        </div>
        <div className="activity_list_md">
          <div className="activity_lists">
            <img className='blue' src={device} alt="..." />
            <div className="activity_right_content">
              <div className="acitvity_head">
                <h5>Activity Title (For Example, New device Enrollment)</h5>
                <p>April 21,2021 | 05:00 PM UTC</p>
              </div>
              <div className="activity_body">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd
                </p>
              </div>
            </div>
          </div>
          <div className="activity_lists">
            <img className='blue' src={device} alt="..." />
            <div className="activity_right_content">
              <div className="acitvity_head">
                <h5>Activity Title (For Example, New device Enrollment)</h5>
                <p>April 21,2021 | 05:00 PM UTC</p>
              </div>
              <div className="activity_body">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd
                </p>
              </div>
            </div>
          </div>
          <div className="activity_lists">
            <img className='blue' src={device} alt="..." />
            <div className="activity_right_content">
              <div className="acitvity_head">
                <h5>Activity Title (For Example, New device Enrollment)</h5>
                <p>April 21,2021 | 05:00 PM UTC</p>
              </div>
              <div className="activity_body">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd
                </p>
              </div>
            </div>
          </div>
          <div className="activity_lists">
            <img className='blue' src={device} alt="..." />
            <div className="activity_right_content">
              <div className="acitvity_head">
                <h5>Activity Title (For Example, New device Enrollment)</h5>
                <p>April 21,2021 | 05:00 PM UTC</p>
              </div>
              <div className="activity_body">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd
                </p>
              </div>
            </div>
          </div>
          <div className="activity_lists">
            <img className='blue' src={device} alt="..." />
            <div className="activity_right_content">
              <div className="acitvity_head">
                <h5>Activity Title (For Example, New device Enrollment)</h5>
                <p>April 21,2021 | 05:00 PM UTC</p>
              </div>
              <div className="activity_body">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceActivity;
