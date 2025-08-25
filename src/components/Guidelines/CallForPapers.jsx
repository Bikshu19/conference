import React, { useState } from "react";

export default function ProductDetail() {
  const [isTelugu, setIsTelugu] = useState(false);

  const englishText = `
    We warmly invite academicians, researchers, and industry
    professionals to submit their original, unpublished, and
    high-quality research papers to unlock the transformative
    potential of Quantum AI and Deep-Tech for the next era of
    intelligence.

    Manuscripts should be approximately 8–10 pages in the prescribed
    format. All accepted and presented papers will be published in
    the online conference proceedings with an ISBN number:
    978-93-343-7220-5.
  `;

  const teluguText = `
    మేము అకడమిక్, పరిశోధకులు మరియు పరిశ్రమ నిపుణులను తమ 
    అసలు, ప్రచురించని, మరియు ఉన్నత-నాణ్యత పరిశోధన పత్రాలను సమర్పించమని హృదయపూర్వకంగా ఆహ్వానిస్తున్నాము, 
    తదుపరి బుద్ధిమంతమైన యుగానికి Quantum AI మరియు Deep-Tech యొక్క పరివర్తనాత్మక సామర్థ్యాన్ని ఆన్‌లాక్ చేయడానికి.

    మాన్యుస్క్రిప్ట్‌లు సుమారు 8–10 పేజీలలో నిర్దిష్ట ఫార్మాట్‌లో ఉండాలి. 
    అన్ని అంగీకృత మరియు ప్రదర్శిత పత్రాలు ISBN నంబర్‌తో ఆన్‌లైన్ కాన్ఫరెన్స్ ప్రక్రియల్లో ప్రచురించబడతాయి: 978-93-343-7220-5.
  `;

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Product Image */}
          <div className="col-lg-6 text-center">
            <img
              src="./conferencetopicspics/papers.jpg"
              alt="product"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </div>

          {/* Product Info */}
          <div className="col-lg-6">
            {/* Heading */}
            <h1 className="display-5 fw-bold mb-3" style={{ color: "#141E46" }}>
              Call for Papers
            </h1>

            {/* Language Toggle Button - under heading */}
            <div className="mb-3">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setIsTelugu(!isTelugu)}
                style={{
                  borderRadius: '20px',
                  backgroundColor: isTelugu ? 'green' : 'red',
                  border: 'none'
                }}
              >
                {isTelugu ? "English" : "తెలుగు"}
              </button>
            </div>

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
            <p className="text-muted lh-lg">{isTelugu ? teluguText : englishText}</p>

            {/* CTA Button */}
          </div>
        </div>
      </div>
    </section>
  );
}
