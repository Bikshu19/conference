import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import Important from "../components/ConferenceCommitte/Important"
import TimeLine from "../components/ConferenceCommitte/TimeLine"

function Conference() {
  return (
    <div>
      <Homenav />
<<<<<<< HEAD
      <div style={{ marginTop: "120px" }}>
        <TimeLine />
        <Important />
      </div>
=======
      <TimeLine/>
      <Important/>
>>>>>>> 1ba62c1aefd9eea14789b673847c900f8ee4b4f2
      <Footer />
    </div>
  );
}

export default Conference;
