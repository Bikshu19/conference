import React from "react";
import Hometext from './hometext';
import Hometext1 from './hometext1';
import Hometext2 from './hometext2';
import Homepagebtn from './homepagebtn';

function HomepageComponents() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >

        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active position-relative">
            <img
              src="/hom.jpg"
              className="w-100 d-block d-md-none"
              alt="Small screen"
              style={{
                height: "100vh",
                objectFit: "cover"
              }}
            />
            <img
              src="/Untitled design.jpg"
              className="w-100 d-none d-md-block"
              alt="Large screen"
              style={{
                height: "100vh",
                objectFit: "cover"
              }}
            />

            {/* Gradient overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "linear-gradient(to bottom, #00000053, rgba(255, 255, 255, 1))",
                pointerEvents: "none",
              }}
            />

            {/* Caption */}
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                textAlign: "center",
                whiteSpace: "nowrap",
                color: "white",
              }}
            >
              <h1 className="fw-bold fs-1" style={{ color: '#141E46' }}>QUADNEXT-2026</h1>
              <h2 className="fw-bold fs-1">International Conference</h2>
              <h4 className="fw-bold">On</h4>
              <Hometext />
              <Hometext1 />
              <Hometext2 />
              <p className="lead " style={{ color: '#ff0000ff' ,'fontWeight': 'bold','whiteSpace': 'nowrap'}}>
                — Sponsored by AICTE,New Delhi
              </p>
              <p className="lead " style={{ color: '#ff0000ff' ,'fontWeight': 'bold','whiteSpace': 'nowrap'}}>
                Under VAANI Scheme —
              </p>

              {/* Button directly under paragraph */}
              <Homepagebtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageComponents;
