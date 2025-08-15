import React, { useState, useEffect } from "react";

function Gallery() {
  const originalImages = [
    "/icraic2it-2-scaled.jpg",
    "/icraic2it-3-scaled.jpg",
    "/icraic2it-4-scaled.jpg",
    "/icraic2it-6-scaled.jpg",
    "/icraic2it-7-scaled.jpg",
    "/icraic2it-8-scaled.jpg",
    "/icraic2it-9-scaled.jpg",
    "/icraic2it-10-scaled.jpg",
    "/icraic2it-11-scaled.jpg",
    "/icraic2it-12-scaled.jpg",
    "/icraic2it-13-scaled.jpg",
    "/icraic2it-17-scaled.jpg",
    "/icraic2it-18-scaled.jpg",
    "/icraic2it-19.jpg",
    "/icraic2it-20-scaled.jpg",
    "/icraic2it-21-scaled.jpg",
    "/icraic2it-22-scaled.jpg",
    "/icraic2it-23-scaled.jpg",
    "/icraic2it-24-scaled.jpg",
    "/icraic2it-26-scaled.jpg",
    "/icraic2it-27-scaled.jpg",
    "/icraic2it-28-scaled.jpg",
    "/icraic2it-29-scaled.jpg",
    "/icraic2it-30-scaled.jpg",
    "/icraic2it-31-scaled.jpg",
    "/icraic2it-32-scaled.jpg",
    "/icraic2it-33-scaled.jpg",
    "/icraic2it-34-scaled.jpg",
    "/icraic2it-36-scaled.jpg",
    "/icraic2it-37-scaled.jpg",
    "/icraic2it-38-scaled.jpg",
    "/icraic2it-39-scaled.jpg",
    "/icraic2it-40-scaled.jpg",
    "/icraic2it-41-scaled.jpg",
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(originalImages);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Event Gallery</h1>
      {images.length === 0 ? (
        <p style={styles.empty}>No images to display.</p>
      ) : (
        <div className="gallery-grid">
          {images.map((src, idx) => (
            <a
              key={`${src}-${idx}`}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-card"
            >
              <img src={src} alt={`Conference ${idx + 1}`} loading="lazy" />
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        .gallery-card {
          display: block;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-card:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  empty: {
    textAlign: "center",
    color: "#666",
  },
};

export default Gallery;
