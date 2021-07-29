import React from "react";
import "./style.css";
// material ui
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaCommentAlt, FaShare } from "react-icons/fa";
// assets
import location from "../../../Assets/location.png";
import pols from "../..//../Assets/Group 4952.png";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" className="main_line" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          className={`progres_line ${props.className}`}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box minWidth={35}>
        <Typography
          className="back_clr"
          variant="body2"
          color="textSecondary"
        ></Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const AuthorityProposalCard = ({ headColor, progres, percent, margin }) => {
  const classes = useStyles();
  const [progress] = React.useState(10);

  return (
    <React.Fragment>
      <div className="auth_proposal_conatiner">
        <div className={`auth_view_proposal_card ${margin} `}>
          <div className={`auth_card_M_head ${headColor}`}>
            <h5 className="auth_card_head">Proposal Head</h5>
            <button className="auth_ongoing"> Completed</button>
          </div>
          {/* <div className="auth_ongoing_bd">
          </div> */}
          <div className="auth_card_body">
            <div className="auth_card_body_text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur libero aliquam{" "}
              </p>
            </div>
            <div className="loc_pols_sec">
              <div className="auth_pols">
                <img src={pols} alt="..." />
                <p>Polls</p>
              </div>
              <div className="auth_location auth_vL">
                <img src={location} alt="img" />
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="auth_progres_main_div">
              <div className="auth_progress_div">
                <p>Progress</p>
                <p className={percent}> {progress}%</p>
              </div>
              <div className={classes.root}>
                <LinearProgressWithLabel className={progres} />
              </div>
            </div>
            <div className="auth_vp_date">
              <div className="auth_duration_div">
                <div>
                  <p className="auth_card_date">START DATE</p>
                  <p className="auth_cd_num">April 5</p>
                </div>
                <div>
                  <p className="auth_card_date">END DATE</p>
                  <p className="auth_cd_num">April 5</p>
                </div>
              </div>
              <div className="auth_card_creatin auth_vp_c">
                <p>
                  Creation Date: <strong>April 8, 2021</strong>{" "}
                </p>
              </div>
            </div>
            <div className="auth_vp_card_like">
              <div className="auth_vp_hcs">
                <div className="auth_vp_likes">
                  <button>
                    <AiTwotoneHeart className="auth_vp_icon" />
                    <p>1.5k</p>
                  </button>
                </div>
                <div className="auth_vp_likes">
                  <button>
                    <FaCommentAlt className="auth_vp_icon" />
                    <p>800 Comment</p>
                  </button>
                </div>
                <div className="auth_vp_likes">
                  <button>
                    <FaShare className="auth_vp_icon" />
                    <p>80 shares</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthorityProposalCard;
