import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import AboutConference from "../components/AboutConference/AboutConference";

function Aboutcon() {
  return (
    <div>
      <Homenav />
      <div style={{"margin":"90px"}}>
          <AboutConference />
      </div>
      
      <Footer />
    </div>
  );
}

export default Aboutcon;
