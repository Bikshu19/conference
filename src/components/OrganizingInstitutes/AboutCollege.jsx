import React, { useEffect, useState } from "react";

const content = {
  en: [
    `Established in 2008 under the patronage of Sri Durga Malleswari Educational Society, Vijayawada, NRI Institute of Technology aims to provide quality technical education while promoting research and development in Science, Engineering, and Management. The institution is located in a calm and serene atmosphere surrounded by lush greenery, ideally situated on a sprawling 20-acre campus of mango groves along the Vijayawada-Nuziveedu State Highway. It is well connected by college buses and public transportation, located approximately 23 km from Vijayawada and 22 km from Gannavaram Airport.`,
    `NRIIT offers eight B.Tech. courses in Engineering: CSE, CSE (AI & ML), CSE (DS), AI & ML, CSE (Telugu Medium), IT, ECE, EEE, Mechanical Engineering, and Civil Engineering. It also offers six postgraduate programmes, including M.Tech. with specializations in Computer Science and Engineering, Digital Electronics and Communication Systems, Power Electronics and Drives, Structural Engineering, and Thermal Engineering, along with an MBA programme.`,
  ],
  te: [
    `విజయవాడలోని శ్రీ దుర్గా మల్లేశ్వరి ఎడ్యుకేషనల్ సొసైటీ ఆధ్వర్యంలో 2008లో స్థాపించబడిన ఎన్ఆర్ఐ ఇనిస్టిట్యూట్ ఆఫ్ టెక్నాలజీ సైన్స్, ఇంజనీరింగ్ మరియు మేనేజ్‌మెంట్ పరిశోధన మరియు అభివృద్ధిని ప్రోత్సహిస్తూ నాణ్యమైన సాంకేతిక విద్యను అందించాలని లక్ష్యంగా పెట్టుకుంది. ఈ సంస్థ ప్రశాంతమైన మరియు నిర్మలమైన వాతావరణంలో, 20 ఎకరాల విస్తీర్ణంలో మామిడి తోటల మధ్య విజయవాడ-నూజివీడు రాష్ట్ర రహదారి పక్కన ఉంది. ఇది కాలేజీ బస్సులు మరియు ప్రజా రవాణా ద్వారా బాగా అనుసంధానించబడి ఉంది, విజయవాడ నుండి సుమారు 23 కిలోమీటర్ల దూరంలో మరియు గన్నవరం విమానాశ్రయం నుండి 22 కిలోమీటర్ల దూరంలో ఉంది.`,
    `NRIIT 8 B.Tech కోర్సులు అందిస్తోంది: CSE, CSE (AI & ML), CSE (DS), AI & ML, CSE (తెలుగు మీడియం), IT, ECE, EEE, మెకానికల్ ఇంజనీరింగ్ మరియు సివిల్ ఇంజనీరింగ్. అదనంగా ఆరు పోస్టు గ్రాడ్యుయేట్ ప్రోగ్రామ్‌లు ఉన్నాయి, ఇందులో M.Tech కంప్యూటర్ సైన్స్ అండ్ ఇంజనీరింగ్, డిజిటల్ ఎలక్ట్రానిక్స్ అండ్ కమ్యూనికేషన్ సిస్టమ్స్, పవర్ ఎలక్ట్రానిక్స్ అండ్ డ్రైవ్స్, స్త్రక్చరల్ ఇంజనీరింగ్, థర్మల్ ఇంజనీరింగ్ స్పెషలైజేషన్స్ మరియు MBA ప్రోగ్రామ్ ఉన్నాయి.`,
  ],
};

const AboutCollege = () => {
  const fullText = "NRI Institute of Technology ";
  const [displayedText, setDisplayedText] = useState("");
  const [lang, setLang] = useState("en"); // default English
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const toggleLang = () => {
    setFade(false);
    setTimeout(() => {
      setLang((prev) => (prev === "en" ? "te" : "en"));
      setFade(true);
    }, 300);
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#2c3e50",
        minHeight: "100vh",
        width: "100vw", // Fix width to viewport width
        overflowX: "hidden", // Hide horizontal overflow
      }}
    >
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        /* Responsive text wrap for h1 */
        h1 {
          white-space: normal !important; /* allow wrapping */
          max-width: 90vw !important; /* prevent overflow */
          overflow-wrap: break-word;
        }
      `}</style>

      {/* Banner */}
      <header
        style={{
          position: "relative",
          width: "100%",
          height: "60vh",
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)),
           url('/Nri/nri1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
          boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.4)",
          animation: "fadeIn 1.5s ease forwards",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            lineHeight: "1.2",
            maxWidth: "900px",
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
            userSelect: "none",
            opacity: displayedText.length ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {displayedText}
        </h1>

        {/* Translate Button */}
        <button
          onClick={toggleLang}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            backgroundColor: "rgba(91, 241, 68, 0.8)",
            border: "none",
            padding: "8px 12px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "600",
            color: "#2c3e50",
          }}
          aria-label="Toggle Language"
          title="Toggle English / Telugu"
        >
          {lang === "en" ? "తెలుగు" : "English"}
        </button>
      </header>

      {/* About Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px 100px 20px", // keep small horizontal padding
          borderRadius: "30px 30px 0 0",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.3s ease",
          transform: fade ? "translateY(0)" : "translateY(20px)",
          animationFillMode: "forwards",
          color: "#34495e",
          lineHeight: "1.75",
          fontSize: "1.15rem",
          textAlign: "justify",
          whiteSpace: "pre-line",
          marginTop: "5vh",
          position: "relative",
          zIndex: 5,
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100%", // full width of parent (which is 100vw)
          boxSizing: "border-box", // ensure padding included in width
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "600",
            marginBottom: "25px",
            textAlign: "center",
            color: "#34495e",
          }}
        >
          About Our College
        </h2>

        {content[lang].map((paragraph, idx) => (
          <p key={idx} style={{ marginBottom: "20px" }}>
            {paragraph}
          </p>
        ))}

        {/* Contact Us Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <button
            style={{
              backgroundColor: "#27ae60",
              border: "none",
              color: "white",
              padding: "12px 28px",
              borderRadius: "30px",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(39, 174, 96, 0.4)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2ecc71")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#27ae60")
            }
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutCollege;
