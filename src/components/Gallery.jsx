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
    "/icraic2it-41-scaled.jpg"
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(originalImages); // no shuffle, just original order
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Event Gallery</h1>
      {images.length === 0 ? (
        <p style={styles.empty}>No images to display.</p>
      ) : (
        <div style={styles.grid}>
          {images.map((src, idx) => (
            <a
              key={`${src}-${idx}`}
              href={src}
              target="_self"
              style={styles.card}
            >
              <img
                src={src}
                alt={`Conference ${idx + 1}`}
                style={styles.image}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    boxSizing: "border-box",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "8px",
    width: "100%",
  },
  card: {
    width: "100%",
    aspectRatio: "4/3",
    overflow: "hidden",
    display: "block",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
    textDecoration: "none",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  empty: {
    textAlign: "center",
    color: "#666",
  },
};

export default Gallery;
