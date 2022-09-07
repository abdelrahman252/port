import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [val, setVal] = useState("Send");
  const btn = document.getElementById("button");

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal("Sending...");
    emailjs
      .sendForm(
        "service_96zcp44",
        "template_5xqu3sw",
        e.target,
        "xOB280Hm7-8shfZNJ"
      )
      .then(() => {
        setVal("Sent Successfully! 𓆩♡𓆪");
        btn.style.background = "green";
        clearFields();
        setTimeout(() => {
          setVal("Send");
          btn.style.background = "white";
        }, 3000);
      })
      .catch((err) => {
        setTimeout(() => {
          setVal("Send Again");
          btn.style.background = "red";
        }, 3000);
      });
  };
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secName, setSecName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const clearFields = () => {
    setFirstName("");
    setSecName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="contact" id="Contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__swing" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__backInRight" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          type="text"
                          required
                          placeholder="First Name"
                          name="name"
                          className="form-int"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          value={secName}
                          onChange={(e) => setSecName(e.target.value)}
                          type="text"
                          placeholder="Last Name"
                          name="name"
                          className="form-int"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Email Address"
                          name="user_email"
                          className="form-int"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          type="tel"
                          placeholder="Phone No."
                          name="phone"
                          className="form-int"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows="6"
                          placeholder="Message"
                          name="message"
                        ></textarea>
                        <input
                          type="submit"
                          id="button"
                          className="submit"
                          value={val}
                        />
                      </Col>
                      {/* {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      } */}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
