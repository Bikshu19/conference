import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import ConferenceRegistration from "../components/ConferenceRegistration";

function Registration() {
  return (
    <div>
      <Homenav />
      <div style={{'marginTop':"50px"}}>
        <ConferenceRegistration />
      </div>
      <Footer />
    </div>
  );
}

export default Registration;
