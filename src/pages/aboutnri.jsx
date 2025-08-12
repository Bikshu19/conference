import React from "react";
import AboutCollege from "../components/OrganizingInstitutes/AboutCollege";
import AboutDepartment from "../components/OrganizingInstitutes/AboutDepartment";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
function Aboutnri() {
  return (
    <div>
      <Homenav />
      <AboutCollege />
      <AboutDepartment />
      <Footer />
    </div>
  );
}

export default Aboutnri;
