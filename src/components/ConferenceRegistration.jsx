import React from "react";

const ConferenceRegistration = () => {
  const steps = [
    {
      title: "Click",
      description: (
        <>
          Click on the following URL:{" "}
          <a
            href="https://atalacademy.aicte-india.org/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            https://atalacademy.aicte-india.org/login
          </a>
        </>
      ),
    },
    {
      title: "Click",
      description: "Click on FDPs",
    },
    {
      title: "Select",
      description: "Select: VAANI → February → All → Face to face",
    },
    {
      title: "Press",
      description: (
        <>
          Press <code>Ctrl + F</code> and search for{" "}
          <strong>FDP No: 2935459418</strong>. You will see the said Conference.
        </>
      ),
    },
    {
      title: "Click",
      description:
        "Click on the  button to register for the mentioned conference.",
    },
    {
      title: "Upload",
      description: "Upload the NOC and submit the Confirm button.",
    },
    {
      title: "Upload NOC",
      description: (
        <>
          Upload NOC. For Format click here:{" "}
          <a
            href="https://shorturl.at/iJC0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            https://shorturl.at/iJC0
          </a>
        </>
      ),
    },
  ];

  return (
    <section className="text-secondary py-5">
      <div className="container">
        <h1 className="text-center text-primary mb-4">
          Conference Registration
        </h1>
        <p className="text-center mb-4">
          <strong>Eligibility:</strong> Faculty members, research scholars,
          postgraduate students from AICTE-approved institutions, and industry
          professionals are eligible to apply.
        </p>
        <p className="text-center mb-5">
          <strong>Registration Fee:</strong> Nil
        </p>

        {steps.map(({ title, description }, idx) => (
          <div
            key={idx}
            className="d-flex flex-column flex-sm-row align-items-center border-bottom pb-4 mb-4 mx-auto"
            style={{ maxWidth: "60%" }}
          >
            <div
              className={`flex-shrink-0 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center ${
                idx % 2 === 1 ? "order-sm-2" : ""
              }`}
              style={{
                width: 128,
                height: 128,
                fontSize: 48,
                fontWeight: "700",
                userSelect: "none",
              }}
            >
              {idx + 1}
            </div>
            <div
              className={`flex-grow-1 mt-3 mt-sm-0 ms-sm-4 text-center text-sm-start ${
                idx % 2 === 1 ? "order-sm-1" : ""
              }`}
              style={{ fontSize: "1.1rem" }}
            >
              <h2 className="h5 text-dark mb-2">{title}</h2>
              <p className="mb-0">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConferenceRegistration;
