import React from "react";
import PaperSubmissionGuidelines from "../components/Guidelines/PaperSubmissionGuidelines";
import ConferenceTopics from "../components/Guidelines/ConferenceTopics";
import CallForPapers from "../components/Guidelines/CallForPapers";
import ImportantDates from "../components/Guidelines/ImportantDates";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import ScrollToTop from "../components/ScrollToTop";

function Authorguidelines() {
  return (
    <>
      <ScrollToTop />
      <Homenav />
      <div style={{ margin: "120px" }}>
        <CallForPapers />
      </div>
      <ConferenceTopics />
      <PaperSubmissionGuidelines />
      <div style={{ margin: "50px" }}>
        <ImportantDates />
      </div>
      <Footer />
    </>
  );
}

export default Authorguidelines;
