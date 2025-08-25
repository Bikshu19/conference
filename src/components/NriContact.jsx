import React, { useEffect } from "react";

export default function Contact() {
  const lat = 16.66327986299729;
  const lng = 80.73777642559249;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Contact Details */}
      <div className="container py-4 mb-0 text-center">
        <h3 className="mb-4">FOR FURTHER INQUIRIES, PLEASE CONTACT:</h3>

        <div>
          <p className="mb-3 ">Conference Secretariat,</p>
          <p className="mb-3">QUADNEXT-2026,</p>
          <p className="mb-3">NRI Institute of Technology,</p>
          <p className="mb-3">Pothavarappadu, Agiripalli Mandalam</p>
          <p className="mb-3">Krishna District, Andhra Pradesh, India</p>
          <p className="mb-3">
            <strong>Email:</strong>{" "}
            <a href="mailto:quadnext@nriit.edu.in">quadnext@nriit.edu.in </a>
            <br></br>
            <strong>Email:</strong>{" "}
            <a href="mailto:kvsrao@nriit.edu.in">kvsrao@nriit.edu.in </a>
          </p>
          <p className="mb-3">
            <strong>URL:</strong>{" "}
            <a
              href="http://www.nriit.edu.in/QUADNEXT"
              target="_blank"
              rel="noreferrer"
            >
              www.nriit.edu.in/QUADEXT
            </a>
          </p>
        </div>
      </div>

      {/* Map with Red Marker & Label */}
      <div style={{ width: "100%", height: "60vh", marginTop: 0 }}>
        <iframe
          title="Google Map Location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            "NRI Institute of Technology"
          )}&hl=en&z=11&output=embed`}
          allowFullScreen
          style={{ border: 0, width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </>
  );
}
