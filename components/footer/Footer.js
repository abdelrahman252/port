import { Container, Row, Col, Navbar } from "react-bootstrap";
import MailchimpForm from "../MailchimpForm/MailchimpForm";
import mail from "../../assets/img/mail.svg";

import logo_transparent from "../../assets/img/logo_transparent.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import whatsapp from "../../assets/img/whatsapp.svg";
import "./footer.css";
import { useTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={12} md={6} xl={6} className="bot">
            <Navbar.Brand href="/">
              <Slide direction="left" triggerOnce="true">
                <img src={logo_transparent} alt="Logo" />
              </Slide>
            </Navbar.Brand>
          </Col>
          <Col
            size={12}
            sm={12}
            md={6}
            xl={6}
            className="text-center text-sm-right"
          >
            <Slide direction="right" triggerOnce="true">
              <div className="social-icon foot">
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
                <a
                  href="mailto:abdelrahmanahmed.3456@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mail} alt="" className="icon" />
                </a>
              </div>
            </Slide>
            <Slide direction="right" triggerOnce="true" delay=".1s">
              <p>{t("footer_copy")}</p>
            </Slide>
          </Col>
          <Zoom>
            <p className="text-center fs-2">
              {t("footer_made")}
              <a
                href="mailto:abdelrahmanahmed.3456@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="go"
              >
                {t("footer_name")}
              </a>
            </p>
          </Zoom>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
