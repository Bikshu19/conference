import React, { useState } from "react";
import { Link } from "react-router-dom";

function Homenav() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (name) => {
    setActiveButton(name);
  };

  const getLinkStyle = (name) => ({
    color: activeButton === name ? "#141E46" : "#292626ff",
    fontWeight: "900",
    cursor: "pointer",
  });

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
        {/* Logo */}
        <Link className="navbar-brand text-white" to="/">
          <img src="./logo-1.png" style={{ width: "150px" }} alt="Logo" />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1) brightness(2)" }}
          />
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mx-auto mb-2 mb-lg-0"
            style={{ textAlign: "center" }}
          >
            {/* Conference Info */}
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={getLinkStyle("conference")}
                onClick={() => handleClick("conference")}
              >
                Conference Info ▾
              </a>
              <ul className="dropdown-menu text-center">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/location"
                    style={getLinkStyle("location")}
                    onClick={() => handleClick("location")}
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/conference"
                    style={getLinkStyle("committee")}
                    onClick={() => handleClick("committee")}
                  >
                    Conference Committee
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/award"
                    style={getLinkStyle("award")}
                    onClick={() => handleClick("award")}
                  >
                    Awards, Gallery
                  </Link>
                </li>
              </ul>
            </li>

            {/* Submissions */}
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={getLinkStyle("submissions")}
                onClick={() => handleClick("submissions")}
              >
                Submissions ▾
              </a>
              <ul className="dropdown-menu text-center">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/authorguidelines"
                    style={getLinkStyle("guidelines")}
                    onClick={() => handleClick("guidelines")}
                  >
                    Author Guidelines
                  </Link>
                </li>
              </ul>
            </li>

            {/* About */}
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={getLinkStyle("about")}
                onClick={() => handleClick("about")}
              >
                About ▾
              </a>
              <ul className="dropdown-menu text-center">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/aboutnri"
                    style={getLinkStyle("aboutnri")}
                    onClick={() => handleClick("aboutnri")}
                  >
                    About NRIIT
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/aboutpb"
                    style={getLinkStyle("aboutpb")}
                    onClick={() => handleClick("aboutpb")}
                  >
                    About PB
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/aboutcon"
                    style={getLinkStyle("aboutcon")}
                    onClick={() => handleClick("aboutcon")}
                  >
                    About Conference
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/aboutvij"
                    style={getLinkStyle("aboutvij")}
                    onClick={() => handleClick("aboutvij")}
                  >
                    About Vijayawada
                  </Link>
                </li>
              </ul>
            </li>

            {/* Registration */}
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="/registration"
                style={getLinkStyle("registration")}
                onClick={() => handleClick("registration")}
              >
                Registration
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="/contact"
                style={getLinkStyle("contact")}
                onClick={() => handleClick("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Homenav;
