import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import logo_transparent from "../../assets/img/logo_transparent.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import whatsapp from "../../assets/img/whatsapp.svg";
import mail from "../../assets/img/mail.svg";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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

  const GlobeIcon = ({ width = 24, height = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#fff"
      className="bi bi-globe"
      viewBox="0 0 16 16"
    >
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
  );
  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },

    {
      code: "sp",
      name: "Spanish",
      country_code: "es",
    },
    {
      code: "gm",
      name: "German",
      country_code: "de",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "sa",
    },
  ];
  const { t, i18n } = useTranslation();

  const currentLanguageCode = localStorage.getItem("lng") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
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
                {t("nav_home")}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                {t("nav_skills")}
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
                {t("nav_projects")}
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
                  <span>{t("nav_button")}</span>
                </button>
              </HashLink>
            </div>
          </Navbar.Collapse>

          <Dropdown style={{ marginLeft: "15px" }}>
            <Dropdown.Toggle id="dropdown-basic" className="empty">
              <GlobeIcon />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button
                    className={classNames("dropdown-item", {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => handleChangeLng(code)}
                  >
                    <span
                      className={`fi  fi-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
