import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import Important from "../components/ConferenceCommitte/Important";
import TimeLine from "../components/ConferenceCommitte/TimeLine";
import ScrollToTop from "../components/ScrollToTop";

function Conference() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
<<<<<<< HEAD
      <div>
=======
      <div style={{ margin: "120px" }}>
>>>>>>> ca8630c8db6075167b58e90e01bc0137cf3d0452
        <TimeLine />
        <Important />
      </div>

      <Footer />
    </div>
  );
}

export default Conference;
