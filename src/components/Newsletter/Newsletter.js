import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

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

  return (
    <Col lg={12}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible
                ? "newsletter-bx animate__animated animate__slideInUp"
                : "newsletter-bx"
            }
          >
            <Row>
              <Col xl={6} sm={12}>
                <h3>
                  Subscribe to My Newsletter<br></br> & Never miss latest
                  updates
                </h3>
                {status === "sending" && <Alert>Sending...</Alert>}
                {status === "error" && (
                  <Alert variant="danger">{message}</Alert>
                )}
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
                      placeholder="Email Address"
                    />
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        )}
      </TrackVisibility>
    </Col>
  );
};

export default Newsletter;
