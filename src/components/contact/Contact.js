import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const btn = document.getElementById("button");

  const handleSubmit = (e) => {
    e.preventDefault();
    btn.value = "Sending...";
    emailjs
      .sendForm(
        "service_96zcp44",
        "template_5xqu3sw",
        e.target,
        "xOB280Hm7-8shfZNJ"
      )
      .then(() => {
        btn.value = "Sent Successfully! 𓆩♡𓆪";
        btn.style.background = "green";
        setTimeout(() => {
          btn.value = "Send";
          btn.style.background = "white";
        }, 3000);
      })
      .catch((err) => {
        btn.value = "Send Again";
      });
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
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="name"
                          className="form-int"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="name"
                          className="form-int"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="user_email"
                          className="form-int"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          name="phone"
                          className="form-int"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                        ></textarea>
                        <input
                          type="submit"
                          id="button"
                          className="submit"
                          value="Send"
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
