import React from "react";

const CustomerCare = () => {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 20,
        fontFamily: "'Poppins', sans-serif",
        background: "#f7f9fb",
        borderRadius: 10,
        boxShadow: "0 8px 24px rgba(31,45,61,0.12)",
        textAlign: "center",
      }}
    >
      {/* Perfect Circle Image */}
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #34db95ff",
          margin: "0 auto 20px auto",
        }}
      >
        <img
          src="./Location/logo.jpg"
          alt="College"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <h2 style={{ marginBottom: 24 }}>College Help Desk</h2>

      <section style={{ textAlign: "left" }}>
        <p>
          <strong>Email:</strong> support@nriinstitute.com
        </p>
        <p>
          <strong>Working Hours:</strong> Mon - Sat, 9 AM to 4:30 PM IST
        </p>
        <p>
          <strong>Address:</strong> NRI Institute of Technology, Agiripalli Rd,
          Vijayawada, Andhra Pradesh 521212
        </p>
      </section>
    </div>
  );
};

export default CustomerCare;
