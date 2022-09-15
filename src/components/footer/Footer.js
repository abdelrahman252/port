import { Container, Row, Col, Navbar } from "react-bootstrap";
import MailchimpForm from "../MailchimpForm/MailchimpForm";

import logo_transparent from "../../assets/img/logo_transparent.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import whatsapp from "../../assets/img/whatsapp.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={12} md={6} xl={6} className="bot">
            <Navbar.Brand href="/">
              <img src={logo_transparent} alt="Logo" />
            </Navbar.Brand>
          </Col>
          <Col
            size={12}
            sm={12}
            md={6}
            xl={6}
            className="text-center text-sm-end"
          >
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abdalrahman-ahmed-024a29230/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/adbeltahmanahmed/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/abdelrahmanahmed2801/">
                <img src={navIcon3} alt="" />
              </a>
              <a
                href="https://wa.me/+201129965148"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} alt="" className="icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
