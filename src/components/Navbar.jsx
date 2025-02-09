import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Navbar, Container,  } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo1.png"; // ✅ Make sure this file exists
import "../css/Navbar.css"; // ✅ Make sure this CSS file exists

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar , setShowNavbar] = useState(false);
  const [lastScroll, setLastScroll] = useState(0); 

  useEffect(()=>{
    const handleScroll = () =>{
        if(window.scrollY > 10){
            setShowNavbar(true);    
        }
        else{
            setShowNavbar(false);  
        }
        setLastScroll(window.scrollY);
    }

    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <header className={`header sticky ${showNavbar ? "visible" : "hidden"} ${isOpen ? "menu-open" : ""}`}>
      <Container>
        <Navbar expand="lg" className="d-flex justify-content-between align-items-center">
          <a href="/" className="custom-logo-link">
            <img src={logo} alt="Portfolio Logo" width="100%" height="auto" className="custom-logo" />
          </a>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav-links ${isOpen ? "open" : ""}`}>
            <ul className="portfolio-menu text-white">
              <li><Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link></li>
              <li><Link to="Experience" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Experience</Link></li>
              <li><Link to="portfolio" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Portfolio</Link></li>
              <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </Navbar>
      </Container>
    </header>
  );
}
