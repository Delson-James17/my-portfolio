import { Container } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <h2 className="footer-text">
          <b>©2025</b> Delson James Tubiera
        </h2>
        <div className="footer-socials">
          <a href="https://web.facebook.com/del.son17" className="social-link"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/delson-james-tubiera-0612b0250/" className="social-link"><FaLinkedin /></a>
          <a href="https://github.com/Delson-James17" className="social-link"><FaGithub /></a>
        </div>
      </Container>
    </footer>
  );
}
