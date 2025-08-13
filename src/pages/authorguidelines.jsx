import React from "react";
import PaperSubmissionGuidelines from "../components/Guidelines/PaperSubmissionGuidelines";
import ConferenceTopics from "../components/Guidelines/ConferenceTopics";
import CallForPapers from "../components/Guidelines/CallForPapers";
import ImportantDates from "../components/Guidelines/ImportantDates";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";

function Authorguidelines() {
  return (
    <div>
      <Homenav />
      <div style={{ margin: "120px" }}>
        <CallForPapers />
        <ConferenceTopics />
        <PaperSubmissionGuidelines />
        <ImportantDates />
      </div>
      <Footer />
    </div>
  );
}

export default Authorguidelines;
