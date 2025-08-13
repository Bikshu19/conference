import React from "react";

import "./AboutConference.css"; // We'll add custom CSS here

export default function AboutConference() {
  return (
    <section className="text-secondary py-5">
      <div className="container">
        <h1 className="fw-bold display-5 mb-4 text-center">
          About The Conference
        </h1>

        <div className="conference-text">
          {/* Center image with float */}
          <img
            src="./conference.webp"
            alt="Conference"
            className="conference-image"
          />

          <p className="lead">
            The International Conference on Quantum AI and Deep-Tech Innovations
            for Next-Gen Intelligence (QUADNEXT-2026) is scheduled to be held
            from <strong>February 6–7, 2026</strong>, at NRI Institute of
            Technology, Agiripalli, Vijayawada, India.
          </p>

          <p className="lead">
            This grand event aims to bring together academicians, research
            scholars, industry professionals, technologists, policymakers, and
            students from technical institutions, universities, and research
            laboratories across the globe to share their research outcomes and
            innovations.
          </p>

          <p className="lead">
            QUADNEXT-2026 offers an unparalleled platform for global experts to
            connect and communicate, fostering a strong link between theory and
            practice. The conference will explore diverse research perspectives
            and innovations through interdisciplinary and domain-specific
            approaches.
          </p>

          <p className="lead">
            As the world advances towards the next generation of intelligence,
            the integration of quantum computing with AI and deep technologies
            is unlocking unprecedented capabilities in automation, optimization,
            decision-making, and real-time problem-solving.
          </p>

          <p className="lead">
            This conference serves as a unique platform to deliberate on recent
            advancements, share breakthrough research, and foster collaborations
            for futuristic innovations in science, engineering, and technology.
          </p>

          <p className="lead">
            Eminent keynote speakers from around the world have been invited to
            share their experiences, research results, and insights on future
            directions. We cordially invite you to participate and make this
            conference a grand success.
          </p>
        </div>
      </div>
    </section>
  );
}
