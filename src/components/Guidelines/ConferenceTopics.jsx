import React from "react";

const OurTeam = () => {
  return (
    <section
      className="text-secondary bg-light py-5"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 1rem",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 1200,
          width: "100%",
        }}
      >
        <div className="text-center w-100 mb-4">
          <h1 className="h2 fw-medium mb-3 text-dark">Conference Topics</h1>
        </div>

        <div
          className="topics-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {/* Member 1 */}
          <TopicCard
            imgSrc="../conferencetopicspics/1.webp"
            alt="Quantum Computing and Quantum Machine Learning"
            title="Quantum Computing and Quantum Machine Learning"
          />
          {/* Member 2 */}
          <TopicCard
            imgSrc="../conferencetopicspics/2.webp"
            alt="Quantum Algorithms for Machine Learning"
            title="Quantum Algorithms for Machine Learning"
          />
          {/* Member 3 */}
          <TopicCard
            imgSrc="../conferencetopicspics/3.webp"
            alt="Quantum-Classical Hybrid Computing Models"
            title="Quantum-Classical Hybrid Computing Models"
          />
          {/* Member 4 */}
          <TopicCard
            imgSrc="../conferencetopicspics/4.webp"
            alt="Quantum Optimization for Big Data Analytics"
            title="Quantum Optimization for Big Data Analytics"
          />
          {/* Member 5 */}
          <TopicCard
            imgSrc="../conferencetopicspics/5.webp"
            alt="Quantum-Enhanced Data Processing and Classification"
            title="Quantum-Enhanced Data Processing and Classification"
          />
          {/* Member 6 */}
          <TopicCard
            imgSrc="../conferencetopicspics/6.webp"
            alt="Quantum Kernel Methods and Feature Engineering"
            title="Quantum Kernel Methods and Feature Engineering"
          />
          {/* Member 7 */}
          <TopicCard
            imgSrc="../conferencetopicspics/7.webp"
            alt="Quantum Internet and Next-Gen Communication"
            title="Quantum Internet and Next-Gen Communication"
          />
          {/* Member 8 */}
          <TopicCard
            imgSrc="../conferencetopicspics/8.webp"
            alt="Artificial General Intelligence(AGI)"
            title="Artificial General Intelligence(AGI)"
          />
          {/* Member 9 */}
          <TopicCard
            imgSrc="../conferencetopicspics/9.webp"
            alt="Large Language Models and Generative AI"
            title="Large Language Models and Generative AI"
          />
          {/* Member 10 */}
          <TopicCard
            imgSrc="../conferencetopicspics/10.webp"
            alt="Deep Learning Architectures and Applications"
            title="Deep Learning Architectures and Applications"
          />
          {/* Member 11 */}
          <TopicCard
            imgSrc="../conferencetopicspics/11.webp"
            alt="Explainable AI for Trustworthy Systems"
            title="Explainable AI for Trustworthy Systems"
          />
          {/* Member 12 */}
          <TopicCard
            imgSrc="../conferencetopicspics/12.webp"
            alt="Ethical AI Design and Governance"
            title="Ethical AI Design and Governance"
          />
          {/* Member 13 */}
          <TopicCard
            imgSrc="../conferencetopicspics/13.webp"
            alt="Human-Centered and Responsible AI"
            title="Human-Centered and Responsible AI"
          />
          {/* Member 14 */}
          <TopicCard
            imgSrc="../conferencetopicspics/14.webp"
            alt="Edge AI and Real-Time Decision Making"
            title="Edge AI and Real-Time Decision Making"
          />
          {/* Member 15 */}
          <TopicCard
            imgSrc="../conferencetopicspics/15.webp"
            alt="Smart Sensors and Embedded Intelligence"
            title="Smart Sensors and Embedded Intelligence"
          />
          {/* Member 16 */}
          <TopicCard
            imgSrc="../conferencetopicspics/16.webp"
            alt="Neuromorphic Computing"
            title="Neuromorphic Computing"
          />

          {/* Member 17 */}
          <TopicCard
            imgSrc="../conferencetopicspics/17.webp"
            alt="Neuromorphic Chips for AI Acceleration"
            title="Neuromorphic Chips for AI Acceleration"
          />

          {/* Member 18 */}
          <TopicCard
            imgSrc="../conferencetopicspics/18.webp"
            alt="Brain-Computer Interfaces"
            title="Brain-Computer Interfaces"
          />

          {/* Member 19 */}
          <TopicCard
            imgSrc="../conferencetopicspics/19.webp"
            alt="AI in Genomics and Precision Medicine"
            title="AI in Genomics and Precision Medicine"
          />

          {/* Member 20 */}
          <TopicCard
            imgSrc="../conferencetopicspics/20.webp"
            alt="Quantum Material and Drug Discovery"
            title="Quantum Material and Drug Discovery"
          />

          {/* Member 21 */}
          <TopicCard
            imgSrc="../conferencetopicspics/21.webp"
            alt="Quantum System Simulation with AI"
            title="Quantum System Simulation with AI"
          />

          {/* Member 22 */}
          <TopicCard
            imgSrc="../conferencetopicspics/22.webp"
            alt="AI in Physics and Chemistry Innovations"
            title="AI in Physics and Chemistry Innovations"
          />

          {/* Member 23 */}
          <TopicCard
            imgSrc="../conferencetopicspics/23.webp"
            alt="Applications in Finance, Healthcare & Logistics"
            title="Applications in Finance, Healthcare & Logistics"
          />

          {/* Member 24 */}
          <TopicCard
            imgSrc="../conferencetopicspics/24.webp"
            alt="AI in Aerospace Navigation"
            title="AI in Aerospace Navigation"
          />

          {/* Member 25 */}
          <TopicCard
            imgSrc="../conferencetopicspics/25.webp"
            alt="AI in Defense and Strategic Technologies"
            title="AI in Defense and Strategic Technologies"
          />

          {/* Member 26 */}
          <TopicCard
            imgSrc="../conferencetopicspics/26.webp"
            alt="AI for Climate Modeling and Sustainability"
            title="AI for Climate Modeling and Sustainability"
          />

          {/* Member 27 */}
          <TopicCard
            imgSrc="../conferencetopicspics/27.webp"
            alt="Quantum Cryptography and Security"
            title="Quantum Cryptography and Security"
          />

          {/* Member 28 */}
          <TopicCard
            imgSrc="../conferencetopicspics/28.webp"
            alt="Quantum Cryptography and AI Security"
            title="Quantum Cryptography and AI Security"
          />

          {/* Member 29 */}
          <TopicCard
            imgSrc="../conferencetopicspics/29.webp"
            alt="Societal Impacts of Quantum AI Technologies"
            title="Societal Impacts of Quantum AI Technologies"
          />

          {/* Member 30 */}
          <TopicCard
            imgSrc="../conferencetopicspics/30.webp"
            alt="Deep-Tech Startups and Innovation Ecosystems"
            title="Deep-Tech Startups and Innovation Ecosystems"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .topics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .topics-grid {
            grid-template-columns: 1fr;
          }
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
        }
      `}</style>
    </section>
  );
};

const TopicCard = ({ imgSrc, alt, title }) => (
  <div
    className="d-flex align-items-center border rounded p-3 h-100 hover-lift"
    style={{
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      gap: "12px",
    }}
  >
    <img
      src={imgSrc}
      alt={alt}
      className="rounded-circle bg-light"
      style={{ width: 64, height: 64, objectFit: "cover" }}
    />
    <div>
      <h2 className="h5 mb-0 text-dark">{title}</h2>
    </div>
  </div>
);

export default OurTeam;
