import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { Col, Row, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Animation from "../framer/Animation";

const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };
  const { t } = useTranslation();
  return (
    <Col lg={12}>
      <Slide direction="up" triggerOnce="true">
        <div className="newsletter-bx animate__animated animate__slideInUp">
          <Row>
            <Col xl={6} sm={12}>
              <h3>
                {t("news_f")
                  .split("")
                  .map((letter, index) => (
                    <Animation key={index}>
                      {letter === " " ? "\u00A0" : letter}
                    </Animation>
                  ))}
                <br></br> &{" "}
                {t("news_s")
                  .split("")
                  .map((letter, index) => (
                    <Animation key={index}>
                      {letter === " " ? "\u00A0" : letter}
                    </Animation>
                  ))}
              </h3>
              {status === "sending" && <Alert>Sending...</Alert>}
              {status === "error" && <Alert variant="danger">{message}</Alert>}
              {status === "success" && (
                <Alert variant="success">{message}</Alert>
              )}
            </Col>
            <Col xl={6} sm={12}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("contact_em")}
                  />
                  <button type="submit">{t("news_submit")}</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Slide>
    </Col>
  );
};

export default Newsletter;
