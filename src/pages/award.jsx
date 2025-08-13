import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import Awards from "../components/NriGallery";
import ScrollToTop from "../components/ScrollToTop";

function Award() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
<<<<<<< HEAD
      <div style={{ margin: "120px" }}>
        <Awards />
=======
      <div style={{"margin":"120px"}}>
        <Awards/>
>>>>>>> 5b946ebef2cc610f7058d45e19aa4c46c6a561ef
      </div>
      <Footer />
    </div>
  );
}

export default Award;
