import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const footerSections = [
  {
    title: "Section 1",
    links: [
      { label: "Home", href: "#" },
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "About", href: "#" },
    ],
  },
  {
    title: "Section 2",
    links: [
      { label: "Home", href: "#" },
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "About", href: "#" },
    ],
  },
  {
    title: "Section 3",
    links: [
      { label: "Home", href: "#" },
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer-with-bg position-relative text-white">
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="container py-4 position-relative">
        <div className="row justify-content-center text-center">
          {/* Logo */}
          <div className="col-12 col-md-auto mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-bootstrap-fill mb-2"
              viewBox="0 0 16 16"
            >
              <path d="M5.062 12.805c.456.122 1.049.193 1.751.193 1.888 0 3.093-.892 3.093-2.377 
              0-1.13-.837-1.906-2.041-2.055v-.07c.898-.17 1.602-.905 1.602-1.859 
              0-1.347-1.072-2.168-2.8-2.168-.72 0-1.357.083-1.726.183v8.153zM8.563 
              6.78c0 .867-.658 1.39-1.799 1.39-.46 0-.77-.036-1.049-.09V5.43c.245-.06.53-.086.9-.086 
              1.062 0 1.948.494 1.948 1.436zm.253 3.543c0 .96-.85 1.5-2.19 
              1.5-.372 0-.64-.027-.872-.075V8.692c.198-.046.494-.083.867-.083 
              1.345 0 2.195.56 2.195 1.714z"/>
              <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 
              4 0 0 1-4-4V4z"/>
            </svg>
            <small className="d-block mb-3">&copy; 2021 Company, Inc</small>
          </div>

          {/* Footer links */}
          {footerSections.map((section, i) => (
            <div className="col-6 col-md-3 text-center" key={i}>
              <h5>{section.title}</h5>
              <ul className="list-unstyled text-small">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a className="text-white-50" href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="d-flex justify-content-center mt-4">
          <a className="text-white mx-3" href="#"><i className="fab fa-twitter fa-lg"></i></a>
          <a className="text-white mx-3" href="#"><i className="fab fa-instagram fa-lg"></i></a>
          <a className="text-white mx-3" href="#"><i className="fab fa-facebook fa-lg"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
