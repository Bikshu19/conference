import React from "react";
import { FaCalendarAlt } from "react-icons/fa"; // npm install react-icons

export default function ImportantDatesBootstrap() {
  const dates = [
    { event: "Submission of Manuscripts", date: "24th Dec, 2025" },
    { event: "Notification of Acceptance", date: "12th Jan, 2026" },
    { event: "Registration Deadline", date: "25th Jan, 2026" },
    { event: "Camera Ready Submission", date: "30th Jan, 2026" },
    { event: "Conference Dates", date: "06–07 Feb, 2026" },
  ];

  return (
    <section
      className="py-5"
      style={{ background: "linear-gradient(180deg, #f8f9fa, #ffffff)" }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Important Dates</h2>
          <p className="text-muted fs-5">
            Stay on top of deadlines and mark your calendar for these key
            events.
          </p>
        </div>

        {/* Dates */}
        <div className="row g-4 justify-content-center align-items-stretch">
          {dates.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4 d-flex" key={index}>
              <div className="card h-100 shadow-sm border-0 transition-card flex-fill">
                <div className="card-body d-flex align-items-center p-4">
                  {/* Icon */}
                  <div
                    className="me-3 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#eaf2ff",
                    }}
                  >
                    <FaCalendarAlt size={26} color="#0d6efd" />
                  </div>

                  {/* Text */}
                  <div>
                    <h6 className="fw-bold mb-1">{item.event}</h6>
                    <small className="text-primary fw-semibold">
                      {item.date}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover styling */}
      <style>
        {`
          .transition-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .transition-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
          }
        `}
      </style>
    </section>
  );
}
