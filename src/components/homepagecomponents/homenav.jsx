import React from 'react';

function Homenav() {
  return (
    <nav
      className="navbar navbar-expand-lg p-4"
      style={{
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <img src='./logo.png' style={{'width':'150px'}}/>
        </a>
       <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"// white border
>
  <span
    className="navbar-toggler-icon"
    style={{
      filter: "invert(1) brightness(2)" // makes icon white
    }}
  />
</button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{"color":"#141E46"}}>
            {/* Dropdown with custom ▾ arrow */}
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span style={{ "fontWeight":"900","color":"#141E46" }}>Conference Info</span>
                <span
                  style={{
                    color: "#141E46",
                    marginLeft: "5px",
                    fontSize: '14px'
                  }}
                >
                  ▾
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" style={{"color":"#141E46"}}>
                    Location
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Conference Committe
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Awards,Gallery
                  </a>
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
                <span style={{ fontWeight: 900,"color":"#141E46" }}>Submissions</span>
                <span
                  style={{
                    color: "#141E46",
                    marginLeft: "5px",
                    fontSize: '14px'
                  }}
                >
                  ▾
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Author Guidelines
                  </a>
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
                <span style={{ fontWeight: 900,"color":"#141E46" }}>About</span>
                <span
                  style={{
                    color: "#141E46",
                    marginLeft: "5px",
                    fontSize: '14px'
                  }}
                >
                  ▾
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    About Organizations
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About Conference
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About Vijayawada
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link active text-white" aria-current="page" href="#">
                <span style={{"color":"#141E46","fontWeight":"900"}}>Registration</span>
              </a>
            </li>
<li className="nav-item me-4">
              <a className="nav-link active text-white" aria-current="page" href="#">
                <span style={{"color":"#141E46","fontWeight":"900"}}>Contact</span>
              </a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Homenav;
