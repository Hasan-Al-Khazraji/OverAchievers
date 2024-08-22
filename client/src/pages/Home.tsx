import Hero from "../components/Home/Hero/Hero";
import MeetTheTeam from "../components/Home/meetTheTeam/meetTheTeam";
import WhatWeAre from "../components/Home/whatWeAre/whatWeAre";

export default function Home() {
    return (
      <div className="pt-14 md:pt-28">
        <Hero />
        <WhatWeAre />
        <MeetTheTeam />
      </div>
    );
  }