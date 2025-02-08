import { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaLinkedin, FaFacebook, FaWhatsapp, FaViber } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "../css/Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_khegx5h",  
      "template_a6ahf1z", 
      form.current,
      "8koKvlV87sbBjCKV1" // Replace with your EmailJS Public Key
    ).then(
        (result) => {
            Swal.fire({
              icon: "success",
              title: "Message Sent!",
              text: "Your message has been sent successfully.",
              confirmButtonColor: "#4CAF50",
            });
             form.current.reset();
          },
          
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Failed to Send!",
              text: "Please try again later.",
              confirmButtonColor: "#d33",
            });
          }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="contact-info">
            <h2 className="contact-heading">DO YOU HAVE A PROJECT TO DISCUSS?</h2>
            <p className="get-in-touch">GET IN TOUCH 💬</p>

            <div className="contact-details">
              <h4>CONTACT</h4>
              <div>
              <a href="mailto:delsonjames17@gmail.com" className="contact-email">delsonjames17@gmail.com</a> 
              </div>
              <div>
              <a href="tel:+639089309958" className="contact-number">📞 Call: 09089309958</a>
              </div>
            </div>
            

            <div className="social-media">
              <h4>SOCIAL MEDIA</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/delson-james-tubiera-0612b0250/" className="icon"><FaLinkedin /></a>
                <a href="https://web.facebook.com/del.son17" className="icon"><FaFacebook /></a>
                <a href="https://wa.me/639089309958" className="icon"><FaWhatsapp /></a>
                <a href="viber://chat?number=+639089309958" className="icon"><FaViber /></a> 
              </div>
            </div>
          </Col>

          <Col md={6}>
            <h4 className="form-heading">CONTACT FORM</h4>
            <Form ref={form} onSubmit={sendEmail} className="contact-form">
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="from_name" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="from_email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" required />
              </Form.Group>

              <Button type="submit" className="glowing-btn">SEND</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
