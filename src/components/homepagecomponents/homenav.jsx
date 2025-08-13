import React from "react";
import { Link } from "react-router-dom";

function Homenav() {
  return (
    <nav
      className="navbar navbar-expand-lg p-4"
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <img src="./logo-1.png" style={{ width: "150px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation" // white border
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: "invert(1) brightness(2)", // makes icon white
            }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 "
            style={{ color: "#141E46" }}
          >
            {/* Dropdown with custom ▾ arrow */}
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span style={{ fontWeight: "900", color: "#141E46" }}>
                  Conference Info
                </span>
                <span
                  style={{
                    color: "#141E46",
                    marginLeft: "5px",
                    fontSize: "14px",
                  }}
                >
                  ▾
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/location"
                    style={{ color: "#141E46" }}
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/conference"
                    style={{ color: "#141E46" }}
                  >
                    Conference Committe
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/award">
                    Awards
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span style={{ fontWeight: 900, color: "#141E46" }}>
                  Submissions
                </span>
                <span
                  style={{
                    color: "#141E46",
                    marginLeft: "5px",
                    fontSize: "14px",
                  }}
                >
                  ▾
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/authorguidelines">
                    Author Guidelines
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span style={{ fontWeight: 900, color: "#141E46" }}>About</span>
                <span
                  style={{
                    color: "#141E46",
                    marginLeft: "5px",
                    fontSize: "14px",
                  }}
                >
                  ▾
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/aboutnri">
                    About NRIIT
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/aboutpb">
                    About PB
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/aboutcon">
                    About Conference
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/aboutvij">
                    About Vijayawada
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item me-4">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/registration"
              >
                <span style={{ color: "#141E46", fontWeight: "900" }}>
                  Registration
                </span>
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/contact"
              >
                <span style={{ color: "#141E46", fontWeight: "900" }}>
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Homenav;
