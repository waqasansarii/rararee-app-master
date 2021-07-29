import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../Pages/Forms/Signup";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Login from "../Pages/Forms/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Pricing from "../Pages/Pricing/Pricing";
import PostHome from "../Pages/Post/PostHome";
import PostReport from "../Pages/Post/PostReport";
import PostReceive from "../Pages/Post/PostReceive";
import PostProposal from "../Pages/PostConsensus/PostProposal";
import PostConLoc from "../Pages/PostConsensus/PostConLoc";
import PostConOpt from "../Pages/PostConsensus/PostConOpt";
import PostConsensusTime from "../Pages/PostConsensus/PostConsensusTime";
import PostConsensusReceive from "../Pages/PostConsensus/PostConsensusReceive";
import Rant from "../Pages/Rant/Rant";
import Proposal from "../Pages/Proposal/Proposal";
import ParticipatoryBudget from "../Pages/ParticipatoryBudget/ParticipatoryBudget";
import PartBudgetDetails from "../Pages/ParticipatoryBudget/PartBudgetDetails";
import Home from "../Pages/Home/Home";
import Forget from "../Pages/Forms/forget";
import TermAndCond from "../Pages/TermAndCond/TermAndCond";
import Blog from "../Pages/Blogs/Blog";
import SelectBlog from "../Pages/Blogs/OneBlogPage";
import Product from "../Pages/Products/Product";
import Authority from "../Pages/Bussinus/Authority";
import BusinessInfo from "../Pages/Bussinus/BusinessInfo";
import BusinessUploadImg from "../Pages/Bussinus/Upload_img";
import AuthorityInfo from "../Pages/Bussinus/AuthorityInfo";
import ConfirmRegistration from "../Pages/Bussinus/ConfirmRegistraion";
import Profile from "../Pages/Profile/Profile";
import AccountSetting from "../Pages/Profile/AccountSetting";
import ProfileSetting from "../Pages/Profile/ProfileSetting";
import SecuritySetting from "../Pages/Profile/SecuritySetting";
import NotificationSetting from "../Pages/Profile/NotificationSetting";
import Survey from "../Pages/Survey/Survey";
import PostSurveyTemplate from "../Pages/PostSurvey/PostSurveyTemplate";
import SurveyHealth from "../Pages/PostSurvey/SurveyHealth";
import PostSurveyLocation from "../Pages/PostSurvey/PostSurveyLocation";
import PostSurveyReward from "../Pages/PostSurvey/SurveyReward";
import PostSurveyReceive from "../Pages/PostSurvey/PostSurveyReceive";
import SurveyListPage from "../Pages/Survey/SurveyListPage";
import PostUploadImg from "../Pages/Post/PostUploadImg";
import ParticipatoryTime from "../Pages/ParticipatoryBudget/ParticipatoryTime";
import PartBudgetBenefits from "../Pages/ParticipatoryBudget/PartBudgetBenefits";
import Participate from "../Pages/Participate/Participate";
import AuthSumery from "../Pages/AuthorityDashboard/AuthSumery";
import AuthViewProposal from "../Pages/AuthProposal/ProposalTable/AuthProposal";
import UserManagement from "../Pages/AuthAcountSeting/UserManagment/Index";
import ActiveOrganization from "../Pages/MobDevManagement/ActiveOrganization";
import EnrollDevices from "../Pages/MobDevManagement/EnrollDevice/index";
import AuthProfileSetting from "../Pages/AuthAcountSeting/ProfileSeting";
import AuthSecuritySetting from "../Pages/AuthAcountSeting/SecuritySetting";
import ViewProposalPage from "../Pages/AuthProposal/ViewProposal";
import OrganizationEnrollment from '../Pages/MobDevManagement/EnrollOrganization/index'
import OrganizationViewPage from "../Pages/MobDevManagement/OrganizeViewPage";
import DeviceEnrollment from "../Pages/MobDevManagement/DeviceEnrollment";
import AddAUser from '../Pages/AuthUser/AddUser/Index'
import AuthCreateProposal from "../Pages/AuthProposal/CreateProposal";
import ReportDetail from '../Pages/AuthReport/ReportDetail/index'
import ReportDetailTwo from "../Pages/AuthReport/ReportDetailTwo";
import ReportView from "../Pages/AuthReport/ReportView";
import UserDetail from "../Pages/AuthUser/UserDetail";
import DeviceView from "../Pages/MobDevManagement/DeviceViewPage";
const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/overview" component={Pricing} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/post" component={PostHome} />
          <Route exact path="/post-upload" component={PostUploadImg} />
          <Route exact path="/post-report" component={PostReport} />
          <Route exact path="/post-receive" component={PostReceive} />
          <Route exact path="/consensus" component={PostProposal} />
          <Route exact path="/consensus-report" component={PostConLoc} />
          <Route exact path="/consensus-options" component={PostConOpt} />
          <Route exact path="/consensus-time" component={PostConsensusTime} />
          <Route
            exact
            path="/consensus-receive"
            component={PostConsensusReceive}
          />
          <Route exact path="/proposal" component={Proposal} />
          <Route exact path="/rant" component={Rant} />
          <Route exact path="/participatory" component={ParticipatoryBudget} />
          <Route
            exact
            path="/participatory-budget"
            component={PartBudgetDetails}
          />
          <Route
            exact
            path="/participatory-benefits"
            component={PartBudgetBenefits}
          />
          <Route
            exact
            path="/participatory-time"
            component={ParticipatoryTime}
          />
          <Route path="/forget" component={Forget} />
          <Route path="/terms" component={TermAndCond} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={SelectBlog} />
          <Route path="/product" component={Product} />
          <Route path="/business-authority" component={Authority} />
          <Route path="/business-info" component={BusinessInfo} />
          <Route path="/business-logo" component={BusinessUploadImg} />
          <Route path="/authority-info" component={AuthorityInfo} />
          <Route path="/business-confirm" component={ConfirmRegistration} />
          <Route path="/profile" component={Profile} />
          <Route path="/account-setting" component={AccountSetting} />
          <Route path="/profile-setting" component={ProfileSetting} />
          <Route path="/security-setting" component={SecuritySetting} />
          <Route path="/notification-setting" component={NotificationSetting} />
          <Route exact path="/survey/:id" component={Survey} />
          <Route exact path="/survey/:id/:id" component={SurveyListPage} />
          <Route path="/post-survey-tamplate" component={PostSurveyTemplate} />
          <Route path="/survey-health" component={SurveyHealth} />
          <Route path="/survey-location" component={PostSurveyLocation} />
          <Route path="/survey-reward" component={PostSurveyReward} />
          <Route path="/survey-submit" component={PostSurveyReceive} />
          <Route path="/participate" component={Participate} />
          <Route path='/auth-dashboard' component={AuthSumery} />
          <Route path='/auth-proposal' component={AuthViewProposal} />
          <Route path='/user-management' component={UserManagement} />
          <Route path='/active-organization' component={ActiveOrganization} />
          <Route path='/enroll-device' component={EnrollDevices} />
          <Route path='/auth-profile-setting' component={AuthProfileSetting} />
          <Route path='/auth-secure-seting' component={AuthSecuritySetting} />
          <Route path='/auth-view-proposal' component={ViewProposalPage} />
          <Route path='/organizationn-enroll' component={OrganizationEnrollment} />
          <Route path='/organizationn-view' component={OrganizationViewPage} />
          <Route path='/device-enroll' component={DeviceEnrollment} />
          <Route path='/add-user' component={AddAUser} />
          <Route path='/create-proposal'  component={AuthCreateProposal}/>
          <Route path='/report-detail' component={ReportDetail} />
          <Route path='/report-detail-two' component={ReportDetailTwo} />
          <Route path='/report-view' component={ReportView} />
          <Route path='/user-detail' component={UserDetail} />
          <Route  path='/device-view' component={DeviceView} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </React.Fragment>
  );
};

export default Routes;
