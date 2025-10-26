import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const {theme, toggleTheme} = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 200;

      sections.forEach((sec) => {
        if (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          setActive(set.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm
      ${theme === "light" ? "navbar-light bg-white" : "navbar-dark bg-dark"}`}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-primary">My</span>Portfolio
        </Link>

        {/* Dark/light */}
        <button onClick={toggleTheme}
        className="btn btn-outline-secondary ms-auto me-2">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobile(!isMobile)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar collapse ${isMobile ? "show" : ""}`}
          id="navbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {location.pathname === "/" ? (
              <>
                {["home", "about", "skills", "projects", "contact"].map(
                  (section) => (
                    <li className="nav-item" key={section}>
                      <ScrollLink
                        className={`nav-link ${
                          active === section ? "active text-primary" : ""
                        }`}
                        to={section}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setIsMobile(false)}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </ScrollLink>
                    </li>
                  )
                )}
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => setIsMobile(false)}
                  >
                    Home
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/projects"
                onClick={() => setIsMobile(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => setIsMobile(false)}
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
