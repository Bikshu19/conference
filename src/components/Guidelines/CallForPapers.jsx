import React from "react";

export default function ProductDetail() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Product Image */}
          <div className="col-lg-6 text-center">
            <img
              src="./s3.webp"
              alt="product"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Product Info */}
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold mb-3 text-primary">
              Call for Papers
            </h1>

            {/* Ratings */}
            <div className="d-flex align-items-center mb-4">
              <div className="text-warning fs-5 me-2">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted lh-lg">
              We warmly invite academicians, researchers, and industry
              professionals to submit their original, unpublished, and
              high-quality research papers to unlock the transformative
              potential of Quantum AI and Deep-Tech for the next era of
              intelligence.
              <br />
              <br />
              Manuscripts should be approximately 8–10 pages in the prescribed
              format. All accepted and presented papers will be published in
              the online conference proceedings with an ISBN number:
              <strong> 978-93-343-7220-5</strong>.
            </p>

            {/* CTA Button */}
            <button className="btn btn-primary btn-lg px-4 mt-3 shadow-sm">
              Submit Your Paper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}