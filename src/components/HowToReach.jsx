import React from "react";

function Howtoreach() {
  const features = [
    "Authentic Cliche Forage",
    "Kinfolk Chips Snackwave",
    "Coloring Book Ethical",
    "Typewriter Polaroid Cray",
    "Pack Truffaut Blue",
    "The Catcher In The Rye",
  ];

  return (
    <section className="text-secondary py-3">
      <div className="container py-2">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="h2 fw-medium mb-3 " style={{ color: "#141E46" }}>
            How to Reach
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: 1000 }}>
            Vijayawada is well connected to the rest of India by rail, road, and
            air. Vijayawada International Airport, 13.5 km from the city center,
            connects the city to major destinations such as New Delhi, Mumbai,
            Hyderabad, Chennai, Bengaluru, Visakhapatnam, Tirupati, and more.
            Airlines like Air India, SpiceJet, TrueJet, and Indigo operate
            regular flights. Vijayawada Railway Junction lies on the
            Chennai-Howrah and Chennai-Delhi routes, making it accessible by
            train from all parts of India. Regular bus services, both private
            and government-operated, connect Vijayawada with major cities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Howtoreach;
