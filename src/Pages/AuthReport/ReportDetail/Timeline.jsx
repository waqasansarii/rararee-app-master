import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
// assets
import step1 from "../../../Assets/Group 5032.png";
import step2 from "../../../Assets/Group 5031.png";
import step3 from "../../../Assets/Group 5033.png";
import step4 from "../../../Assets/Group 5034.png";
import user from "../../../Assets/Rectangle 1010.png";
import cup from "../../../Assets/Icon awesome-hourglass-end.png";
import check from "../../../Assets/Rectangle 1022.png";

export default function ReportTimeline() {
  return (
    <div className="AR_timeline_container">
      <div className="AR_timeline_md">
        <div className="timeline_head">
          <h6>Problem Status</h6>
        </div>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "white" }}>
                <img src={step1} alt="..." />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="step1Head">
                <h6>Recieved</h6>
                <p>April 10, 2021 | 05:00 PM UTC</p>
              </div>
              <div className="timeline_user_info">
                <div className="timeline_user_name">
                  <img src={user} alt="..." />
                  <div className="TL_uName">
                    <h6>UserName</h6>
                    <p>user email/id</p>
                  </div>
                </div>
                <p>123456789</p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "white" }}>
                <img src={step2} alt="..." />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="step1Head">
                <h6 style={{ color: "#9BA3CC" }}>Assigned</h6>
                <p>April 10, 2021 | 05:00 PM UTC</p>
              </div>
              <div className="timeline_user_info">
                <div className="timeline_user_name">
                  <img src={user} alt="..." />
                  <div className="TL_uName">
                    <h6>UserName</h6>
                    <p>user email/id</p>
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "white" }}>
                <img src={step3} alt="..." />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="step1Head">
                <h6 style={{ color: "#9BA3CC" }}>Review</h6>
                <p>April 10, 2021 | 05:00 PM UTC</p>
              </div>
              <div className="timeline_user_info">
                <div className="timeline_user_name">
                  <img className="timeline_step3_img" src={cup} alt="..." />
                  <div className="TL_uName">
                    <h6>Pending User Apprval</h6>
                    <p>
                      Problems pending citizen approval will be automatically
                      resolved if citizen doesn't provide feedback within 14
                      days.
                    </p>
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "white" }}>
                <img src={step4} alt="..." />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="step1Head">
                <h6 style={{ color: "#9BA3CC" }}>Status</h6>
                <p>April 10, 2021 | 05:00 PM UTC</p>
              </div>
              <div className="timeline_user_info">
                <div className="timeline_user_name">
                  <img src={check} alt="..." />
                  <div className="TL_uName">
                    <h6>Resolved</h6>
                    <p>
                      If citizen review the problem as not resolved the problem
                      will be shown here with status as not resolved. The
                      authority can forcefully resolved with a custom message or
                      re-assign.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline_step4_btn">
                <button className="cus_grn_btn">Re-assign</button>
                <button className="cus_grn_btn bg_orng">Close Case</button>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
