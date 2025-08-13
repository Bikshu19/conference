import React from "react";

export default function HeroSection() {
  return (
    <section className="text-secondary py-10">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        
        {/* Text Content */}
        <div className="flex-grow-1 col-md-6 mb-4 mb-md-0 text-center text-md-start pe-md-4">
          <h1 className="display-5 fw-semibold mb-3">Awards</h1>
          <p className="mb-4 lead text-justify">
            To encourage meaningful contributions and promote quality research,
            the conference will recognize outstanding presentations through
            awards. Based on evaluations by the committee and the discretion of
            the Conference Chair, the Best Presentation Award will be given to
            the most inspiring, impactful, and professionally delivered talk.
            The selection will be made considering both the presentation scores
            and the quality of the submitted paper.
          </p>
        </div>

        {/* Carousel */}
        <div className="col-md-6 col-10 mx-auto">
          <div
            id="heroCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <img
                  src="./awards/principal.jpg"
                  className="d-block mx-auto img-fluid"
                  style={{
                    maxWidth: "80%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./awards/deen.jpg"
                  className="d-block mx-auto img-fluid"
                  style={{
                    maxWidth: "80%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./awards/award.jpg"
                  className="d-block mx-auto img-fluid"
                  style={{
                    maxWidth: "80%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
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
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
