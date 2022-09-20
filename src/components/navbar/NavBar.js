import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo_transparent from "../../assets/img/logo_transparent.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import whatsapp from "../../assets/img/whatsapp.svg";
import mail from "../../assets/img/mail.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const [isActive, setIsActive] = useState(false);
  const addClass = () => {
    setIsActive((current) => !current);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className={isActive ? "bg" : "nav-container"}>
          <Navbar.Brand href="/">
            <img src={logo_transparent} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon " onClick={addClass}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <div className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/abdalrahman-ahmed-024a29230/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/adbeltahmanahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/abdelrahmanahmed2801/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              </div>{" "}
              <HashLink to="#Contact">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
