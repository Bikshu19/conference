import React from "react";
import Important from "../components/Important";
import TimeLine from "../components/TimeLine";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";

function Conference() {
  return (
    <div>
      <Homenav />
      <TimeLine />
      <Important />
      <Footer />
    </div>
  );
}

export default Conference;
