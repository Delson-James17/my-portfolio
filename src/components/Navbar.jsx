import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { Navbar, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo1.png";
import "../css/Navbar.css";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: "easeInOutQuad",
      offset: -70,
    });
    setIsOpen(false);
  };

  return (
    <header className={`header sticky ${showNavbar ? "visible" : "hidden"} ${isOpen ? "menu-open" : ""}`}>
      <Container>
        <Navbar expand="lg" className="d-flex justify-content-between align-items-center">
          <a href="/" className="custom-logo-link">
            <img src={logo} alt="Portfolio Logo" className="custom-logo" />
          </a>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav-links ${isOpen ? "open" : ""}`}>
            <ul className="portfolio-menu text-white">
              <li><button onClick={() => handleScrollTo("home")} style={{ cursor: "pointer" }}>Home</button></li>
              <li><button onClick={() => handleScrollTo("skills")} style={{ cursor: "pointer" }}>Skills</button></li>
              <li><button onClick={() => handleScrollTo("experience")} style={{ cursor: "pointer" }}>Experience</button></li>
              <li><button onClick={() => handleScrollTo("portfolio")} style={{ cursor: "pointer" }}>Portfolio</button></li>
              <li><button onClick={() => handleScrollTo("contact")} style={{ cursor: "pointer" }}>Contact</button></li>
            </ul>
          </nav>
        </Navbar>
      </Container>
    </header>
  );
}
