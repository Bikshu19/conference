import React from "react";

const AwardsSection = () => {
  return (
    <div>
      {/* Awards Section */}
      <section id="awards" className="awards-section">
        <h2 className="awards-title">Awards</h2>
        <p className="awards-text">
          To encourage meaningful contributions and promote quality research,
          the conference will recognize outstanding presentations through
          awards. Based on evaluations by the committee and the discretion of
          the Conference Chair, the <strong>Best Presentation Award</strong>{" "}
          will be given to the most inspiring, impactful, and professionally
          delivered talk. The selection will be made considering both the
          presentation scores and the quality of the submitted paper.
        </p>
      </section>

      {/* Cards Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-secondary border-opacity-50 rounded overflow-hidden">
                <img
                  src="../awards/award1.jpg"
                  className="card-img-top"
                  alt="blog"
                  style={{ height: "192px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="text-muted text-uppercase small mb-1"></h6>
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                  <div className="d-flex align-items-center flex-wrap">
                    <a
                      href="#"
                      className="text-primary d-inline-flex align-items-center me-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="ms-2 bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
                          .708-.708l4 4a.498.498 0 0 1 0 .707l-4 4a.5.5 0 0 1-.708-.707
                          L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                    <span className="text-muted me-3 small"></span>
                    <span className="text-muted small"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-secondary border-opacity-50 rounded overflow-hidden">
                <img
                  src="https://dummyimage.com/721x401"
                  className="card-img-top"
                  alt="blog"
                  style={{ height: "192px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="text-muted text-uppercase small mb-1"></h6>
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                  <div className="d-flex align-items-center flex-wrap">
                    <a
                      href="#"
                      className="text-primary d-inline-flex align-items-center me-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="ms-2 bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
                          .708-.708l4 4a.498.498 0 0 1 0 .707l-4 4a.5.5 0 0 1-.708-.707
                          L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                    <span className="text-muted me-3 small"></span>
                    <span className="text-muted small"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-secondary border-opacity-50 rounded overflow-hidden">
                <img
                  src="https://dummyimage.com/722x402"
                  className="card-img-top"
                  alt="blog"
                  style={{ height: "192px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="text-muted text-uppercase small mb-1"></h6>
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                  <div className="d-flex align-items-center flex-wrap">
                    <a
                      href="#"
                      className="text-primary d-inline-flex align-items-center me-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="ms-2 bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
                          .708-.708l4 4a.498.498 0 0 1 0 .707l-4 4a.5.5 0 0 1-.708-.707
                          L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                    <span className="text-muted me-3 small"></span>
                    <span className="text-muted small"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsSection;
