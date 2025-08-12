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
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-danger">Important Dates</h2>
          <p className="text-muted">
            Stay on top of all deadlines and mark your calendar for these key
            dates.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {dates.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex align-items-center">
                  <div
                    className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#e9f2ff",
                    }}
                  >
                    <FaCalendarAlt size={22} color="#0d6efd" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{item.event}</h6>
                    <small className="text-primary">{item.date}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
