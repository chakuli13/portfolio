import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Portfolio_logo.webp";

function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <img
            src={logo}
            alt="logo"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li>
              <a
                href="#home"
                onClick={() => setActive("home")}
                className={`nav-link ${active === "home" ? "active-link" : ""}`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setActive("about")}
                className={`nav-link ${active === "about" ? "active-link" : ""}`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setActive("projects")}
                className={`nav-link ${active === "projects" ? "active-link" : ""}`}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setActive("contact")}
                className={`nav-link ${active === "contact" ? "active-link" : ""}`}
              >
                Contact
              </a>
            </li>

            <a
              href="https://github.com/chakuli13"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActive("github")}
              className={`icon-link ${active === "github" ? "active-link" : ""}`}
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/chakuli-shembule/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActive("linkedin")}
              className={`icon-link ${active === "linkedin" ? "active-link" : ""}`}
            >
              <FaLinkedin size={20} />
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
