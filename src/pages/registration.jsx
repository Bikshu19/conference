import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import ConferenceRegistration from "../components/ConferenceRegistration";
import ScrollToTop from "../components/ScrollToTop";

function Registration() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <div style={{ margin: "70px" }}>
        <ConferenceRegistration />
      </div>
      <Footer />
    </div>
  );
}

export default Registration;
