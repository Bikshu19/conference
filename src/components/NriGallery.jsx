import React, { useState } from "react";

export default function HeroSection() {
  const [isTelugu, setIsTelugu] = useState(false);

  const englishText = {
    heading: "Awards",
    paragraph: `
      To encourage meaningful contributions and promote quality research,
      the conference will recognize outstanding presentations through
      awards. Based on evaluations by the committee and the discretion of
      the Conference Chair, the Best Presentation Award will be given to
      the most inspiring, impactful, and professionally delivered talk.
      The selection will be made considering both the presentation scores
      and the quality of the submitted paper.
    `,
  };

  const teluguText = {
    heading: "Awards",
    paragraph: `
      అర్థవంతమైన కృషిని ప్రోత్సహించడానికి మరియు నాణమైన పరిశోధనను ప్రోత్సహించడానికి,
      కాంక్రెన్స్ అద్భుతమైన ప్రదర్శనలను అవార్డుల ద్వారా గుర్తిస్తుంది.
      కమిటీ యొక్క మూల్యాంకనాల మరియు కాన్ఫరెన్స్ చైర్ యొక్క నిర్ణయ ప్రకారం,
      ఉత్తమ ప్రదర్శన అవార్డు అత్యంత ప్రేరణాత్మక, ప్రభావవంతమైన మరియు
      వృత్తిపరంగా సమర్పించబడిన ప్రసంగానికి ఇవ్వబడుతుంది.
      ఎంపిక ప్రదర్శన స్కోర్లు మరియు సమర్పించిన పత్రం నాణ్యతను పరిగణనలోకి తీసుకుని చేయబడుతుంది.
    `,
  };

  return (
    <section className="text-secondary py-10">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        
        {/* Text Content */}
        <div className="flex-grow-1 col-md-6 mb-4 mb-md-0 text-center text-md-start pe-md-4">
          <h1 className="display-5 fw-semibold mb-2" style={{ color: "#141E46" }}>
            {isTelugu ? teluguText.heading : englishText.heading}
          </h1>

          {/* Language Toggle Button under heading */}
          <button
            className="btn btn-sm mb-3"
            style={{ backgroundColor: isTelugu ? 'green' : 'red', color: '#fff' }}
            onClick={() => setIsTelugu(!isTelugu)}
          >
            {isTelugu ? "English" : "తెలుగు"}
          </button>

          <p className="mb-4 lead text-justify">
            {isTelugu ? teluguText.paragraph : englishText.paragraph}
          </p>
        </div>

        {/* Carousel */}
        <div className="col-md-6 col-10 mx-auto">
          <div
            id="heroCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="1000"
          >
            <div className="carousel-inner rounded">
              <div className="carousel-item active" data-bs-interval="1000">
                <img
                  src="./awards/principal.jpg"
                  className="d-block mx-auto img-fluid"
                  style={{ maxWidth: "80%", height: "auto", borderRadius: "10px" }}
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./awards/deen.jpg"
                  className="d-block mx-auto img-fluid"
                  style={{ maxWidth: "80%", height: "auto", borderRadius: "10px" }}
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./awards/award.jpg"
                  className="d-block mx-auto img-fluid"
                  style={{ maxWidth: "80%", height: "auto", borderRadius: "10px" }}
                  alt="Slide 3"
                />
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "#141E46" }}></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "#141E46" }}></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
