import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import Aboutvijj from "../components/aboutvij/aboutvijcom"
function Aboutvij() {
  return (
    <div>
      <Homenav />
      <div style={{"margin":"60px"}}>
<Aboutvijj/>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutvij;
