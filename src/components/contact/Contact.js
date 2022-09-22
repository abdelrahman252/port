import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [val, setVal] = useState(t("contact_send"));
  const btn = document.getElementById("button");

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal(t("contact_sending"));
    emailjs
      .sendForm(
        "service_96zcp44",
        "template_5xqu3sw",
        e.target,
        "xOB280Hm7-8shfZNJ"
      )
      .then(() => {
        setVal(t("contact_sent"));
        btn.style.background = "green";
        clearFields();
        setTimeout(() => {
          setVal(t("contact_send"));
          btn.style.background = "white";
        }, 2000);
      })
      .catch((err) => {
        setTimeout(() => {
          setVal(t("contact_senderr"));
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
            <img
              className="animate__animated animate__swing"
              src={contactImg}
              alt="Contact Us"
              style={{ transform: "translateX(100px )" }}
            />
          </Col>
          <Col size={12} md={6}>
            <div className="animate__animated animate__backInRight">
              <h2>{t("contact_head")}</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      required
                      placeholder={t("contact_first")}
                      name="name"
                      className="form-int"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      value={secName}
                      onChange={(e) => setSecName(e.target.value)}
                      type="text"
                      placeholder={t("contact_last")}
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
                      placeholder={t("contact_em")}
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
                      placeholder={t("contact_num")}
                      name="phone"
                      className="form-int"
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="6"
                      placeholder={t("contact_mes")}
                      name="message"
                    ></textarea>
                    <input
                      type="submit"
                      id="button"
                      className="submit"
                      value={val}
                    />
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
