import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import Important from "../components/ConferenceCommitte/Important";
import TimeLine from "../components/ConferenceCommitte/TimeLine";

function Conference() {
  return (
    <div>
      <Homenav />
      <div>
        <TimeLine />
        <Important />
      </div>

      <Footer />
    </div>
  );
}

export default Conference;
