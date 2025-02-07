import { Container, Row, Col, Button } from "react-bootstrap";
import profileImage from "../assets/profile.png"; 
import TypingText from "./TypingText.jsx";

export default function Hero() {
  return (
    <section className="hero-section text-white d-flex align-items-center w-100">
      <Container fluid className="p-0">
        <Row className="align-items-center g-0 vh-100">
          <Col lg={7} className="text-lg-start d-flex flex-column justify-content-center p-5">
            <h1 className="DescHeader ms-5">Hi, I am <span className="text-success">Delson James !</span></h1>
            <div className="ms-5"><TypingText /></div>
            <div className="d-flex gap-2 ms-5">
              <Button variant="success" >Show Profile</Button>
              <Button variant="outline-light" >Explore More</Button>
            </div>
          </Col>

          <Col lg={5} className="p-0 h-100">
            <img src={profileImage} alt="Profile" className="img-fluid w-100 h-100 object-fit-cover" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
