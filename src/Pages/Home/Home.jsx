import React,{useLayoutEffect} from "react";
import Reinvite from '../../Components/HomeComp/Reinvite'
import WhatWeDo from '../../Components/HomeComp/WhatWeDo'
import VoiceHeard from '../../Components/HomeComp/VoiceHeard'
import Issues from '../../Components/HomeComp/Issues'
import GetInspired from '../../Components/HomeComp/Getinspired'
import Proposal from '../../Components/HomeComp/Proposal'
import Community from '../../Components/HomeComp/Community'
import Survey from '../../Components/HomeComp/Survey'
import Report from '../../Components/HomeComp/Report'
import Partner from '../../Components/HomeComp/Partner'
import JoinCommunity from '../../Components/HomeComp/JoinCommunity'
import HelpCartoon from '../../Components/HomeComp/HelpCartoon'
import Cokkie from '../../Components/Cokkie'
import './Home.css'

const Home = () => {
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <div>
            <Cokkie />
            <HelpCartoon />
            <Reinvite />
            <WhatWeDo />
            <VoiceHeard />
            <Issues />
            <GetInspired />
            <Proposal />
            <Community />
            <Survey />
            <Report />
            <Partner />
            <JoinCommunity />
        </div>
    )
}

export default Home
