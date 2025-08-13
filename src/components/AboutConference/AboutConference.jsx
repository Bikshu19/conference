import React from "react";
import "./AboutConference.css"; // CSS file

const AboutConference = () => {
  return (
    <section className="container-fluid p-0">
      {/* Hero Section with Image and Typing Text */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/conf1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-container">
          <h1 className="typewriter">Welcome to Conference</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container my-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="styled-heading">About the Conference</h2>

        <div className="conference-intro">
  <p className="conference-text">
    The <span className="highlight-bold">International Conference</span> on{" "}
    <span className="highlight-warning">Quantum AI</span> and{" "}
    <span className="highlight-warning">Deep-Tech Innovations</span> for{" "}
    <span className="highlight-success">Next-Gen Intelligence</span> (QUADNEXT-2026) 
    is scheduled to be held from <span className="highlight-date">February 6–7, 2026</span>, 
    at <span className="highlight-location">NRI Institute of Technology, Anagiripalli, Vijayawada, India</span>.
  </p>
</div>


        <div className="event-info-card">
  <p className="event-text">
    This <span className="highlight-dark">grand event</span> aims to bring together
    <span className="highlight-accent"> academicians</span>, 
    <span className="highlight-accent"> research scholars</span>, 
    <span className="highlight-accent"> industry professionals</span>, 
    technologists, policymakers, and students from 
    <span className="highlight-accent"> technical institutions</span>, 
    universities, and research laboratories across the globe 
    to share their <span className="highlight-focus">research outcomes</span> 
    and <span className="highlight-focus">innovations</span>.
  </p>
</div>


<div className="container-fluid w-100 px-0">
  <div className="bg-light border-start border-4 border-info rounded-0 shadow-sm p-4 mb-4">
    <p className="mb-0 fs-5 text-secondary">
      <span className="fw-bold text-info">QUADNEXT-2026</span> offers an unparalleled platform
      for global experts to connect and communicate, fostering a strong link between theory
      and practice. The conference will explore diverse research perspectives and innovations
      through interdisciplinary and domain-specific approaches.
    </p>
  </div>
</div>



        <div className="container-fluid w-100 px-0">
  <div className="bg-light border-start border-4 border-primary shadow-sm p-4 mb-4">
    <p className="mb-0 fs-5 text-secondary">
      As the world advances towards the{" "}
      <span className="text-primary fw-semibold">next generation</span> of intelligence,
      the integration of quantum computing with AI and deep technologies is unlocking
      unprecedented capabilities in automation, optimization, decision-making, and real-time
      problem-solving. This conference serves as a unique platform to deliberate on recent
      advancements, share breakthrough research, and foster collaborations for futuristic
      innovations in science, engineering, and technology.
    </p>
  </div>
</div>
<div className="container-fluid w-100 px-0 mt-5">
  <div className="bg-light border-top border-3 border-primary p-4 text-center shadow-sm end-section">
    <p className="text-muted fst-italic mb-0 fs-5">
      Eminent keynote speakers from around the world have been invited to share their
      experiences, research results, and insights on future directions. We cordially invite
      you to participate and make this conference a grand success.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutConference;
