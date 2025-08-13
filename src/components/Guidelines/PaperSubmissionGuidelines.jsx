import React from "react";
import { FaArrowDown } from "react-icons/fa";

const PaperSubmissionGuidelines = () => {
  const steps = [
    "Background, Motivation and Objective",
    "Statement of Contribution, Methodology",
    "Results, Discussions and Conclusions",
    "Maximum number of pages: 8 (8.25 × 11 inch paper, single-column template). Paper format: Click here",
    "Telugu is the official language. Papers may be in Telugu or English; translation services provided.",
    "Plagiarism must not exceed 15% (excluding references). Attach the plagiarism report with the paper.",
    "Some papers may be accepted as poster presentations.",
    "Paper Submission Link: Submit here",
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        📄 Paper Submission Guidelines
      </h2>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-lg p-4 w-full text-gray-700 text-lg font-medium hover:bg-gray-50 transition text-center">
              {step.includes("Click here") ? (
                <>
                  Maximum number of pages: <strong>8</strong> (8.25 × 11 inch
                  paper, single-column template). Paper format:{" "}
                  <a
                    href="https://shorturl.at/JzGmG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Click here
                  </a>
                </>
              ) : step.includes("Submit here") ? (
                <a
                  href="https://forms.gle/mTyhLUwubgzpvEHS8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                    Submit Paper
                  </button>
                </a>
              ) : (
                step
              )}
            </div>
            {index < steps.length - 1 && (
              <FaArrowDown className="text-blue-500 text-2xl mt-3 animate-bounce" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperSubmissionGuidelines;
