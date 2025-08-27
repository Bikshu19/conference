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
<<<<<<< HEAD
      <div style={{ margin: "120px" }}>
        <CallForPapers />
      </div>
      <ConferenceTopics />
=======
      <div style={{ margin: "80px" }}>
        <CallForPapers />
      </div>
     <div style={{margin:'0px'}}>
       <ConferenceTopics />
      <PaperSubmissionGuidelines />
     </div>
>>>>>>> ec919c86e832dddb708358dc33106f268bd420d5
      <div style={{ margin: "50px" }}>
        <ImportantDates />
      </div>
      <Footer />
    </>
  );
}

export default Authorguidelines;
