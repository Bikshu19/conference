import React from "react";
import AboutPb from "../components/OrganizingInstitutes/AboutPb";
import PbDepartment from "../components/OrganizingInstitutes/PbDepartment";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";

function Aboutpb() {
  return (
    <div>
      <Homenav />
      <AboutPb />
      <PbDepartment />
      <Footer />
    </div>
  );
}

export default Aboutpb;
