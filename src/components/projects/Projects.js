import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import ProjectCard from "../ProjectCard/ProjectCard";

import porto from "../../assets/img/PORTO.PNG";
import shopping from "../../assets/img/shopping.PNG";
import Animation from "../framer/Animation";
import ai from "../../assets/img/ai.PNG";
import youtube from "../../assets/img/youtube.PNG";
import admin from "../../assets/img/admin.PNG";
import gym from "../../assets/img/gym.PNG";
import cart from "../../assets/img/cart.PNG";
import news from "../../assets/img/news.PNG";
import booking from "../../assets/img/booking.PNG";
import mui from "../../assets/img/mui.PNG";
import aishon from "../../assets/img/aishon.PNG";
import robo from "../../assets/img/robo.PNG";
import hero from "../../assets/img/hero.PNG";
import support from "../../assets/img/support.PNG";
import resto from "../../assets/img/resto.PNG";
import trips from "../../assets/img/trips.PNG";
import varr from "../../assets/img/var.PNG";
import era from "../../assets/img/era.PNG";
import telsa from "../../assets/img/tesla.PNG";
import tiktok from "../../assets/img/tiktok.PNG";
import crypto from "../../assets/img/crypto.PNG";
import containerWordpress from "../../assets/img/containerWordpress.png";
import salaWordpress from "../../assets/img/salaWordpress.png";
import quiz from "../../assets/img/quiz.PNG";
import movies from "../../assets/img/movies.PNG";
import estate from "../../assets/img/estate.PNG";
import colorSharp2 from "../../assets/img/color-sharp2.png";

import "animate.css";

import "./Projects.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Rotate, Slide } from "react-awesome-reveal";

const Projects = () => {
  const Reprojects = [
    {
      title: "AI News Project",
      description: "Design & Development",
      imgUrl: news,
      Glink: "https://github.com/abdelrahman252/news",
      Llink: "https://react-voice-ai-abdo.netlify.app",
    },
    {
      title: "Cart-Ai Startup",
      description: "Design & Development",
      imgUrl: cart,
      Glink: "https://github.com/abdelrahman252/cart-ai",
      Llink: "https://cart-ai-voice-controller.netlify.app",
    },

    {
      title: "Booking Startup",
      description: "Design & Development",
      imgUrl: booking,
      Glink: "https://github.com/abdelrahman252/booking",
      Llink: "https://booking-lama.herokuapp.com/",
    },
    {
      title: "Dashboard Startup",
      description: "Design & Development",
      imgUrl: admin,
      Glink: "https://github.com/abdelrahman252/admin-panel",
      Llink: "https://aboadmin.herokuapp.com/",
    },
    {
      title: "MUI Startup",
      description: "Design & Development",
      imgUrl: mui,
      Glink: "https://github.com/abdelrahman252/mui",
      Llink: "https://abomui.herokuapp.com/",
    },
    {
      title: "Portfolio Startup",
      description: "Design & Development",
      imgUrl: porto,
      Glink: "https://github.com/abdelrahman252/port",
      Llink: "https://abdoport.herokuapp.com/",
    },

    {
      title: "SupportChat Startup",
      description: "Design & Development",
      imgUrl: support,
      Glink: "https://github.com/abdelrahman252/support",
      Llink: "https://abosupport.herokuapp.com/",
    },
    {
      title: "Telsa-Clone Startup",
      description: "Design & Development",
      imgUrl: telsa,
      Glink: "https://github.com/abdelrahman252/tesla-clone",
      Llink: "https://telsa-clone-abdo.netlify.app",
    },
    {
      title: "TikTok-Clone Startup",
      description: "Design & Development",
      imgUrl: tiktok,
      Glink: "https://github.com/abdelrahman252/tiktok-clone",
      Llink: "https://tik-tok-clone-abdo.netlify.app",
    },
    {
      title: "Crypto-Hunting Startup",
      description: "Design & Development",
      imgUrl: crypto,
      Glink: "https://github.com/abdelrahman252/crypto-hunting",
      Llink: "https://crypto-hunting-abdo.netlify.app/",
    },
    {
      title: "Quiz-App Startup",
      description: "Design & Development",
      imgUrl: quiz,
      Glink: "https://github.com/abdelrahman252/quizz",
      Llink: "https://quizhub-abdo.netlify.app/",
    },
    {
      title: "Shopping Startup",
      description: "Design & Development",
      imgUrl: shopping,
      Glink: "https://github.com/abdelrahman252/cart",
      Llink: "https://shopp-ing.netlify.app",
    },
    {
      title: "Movies Startup",
      description: "Design & Development",
      imgUrl: movies,
      Glink: "https://github.com/abdelrahman252/movies",
      Llink: "https://movies-hub-abdo.netlify.app",
    },
    {
      title: "youtube-clone Startup",
      description: "Design & Development",
      imgUrl: youtube,
      Glink: "https://github.com/abdelrahman252/youtube-clone",
      Llink: "https://youtube-clone-abdo.netlify.app",
    },
    {
      title: "GYM Startup",
      description: "Design & Development",
      imgUrl: gym,
      Glink: "https://github.com/abdelrahman252/gym",
      Llink: "https://gym-abdo.netlify.app",
    },
  ];

  const JSprojects = [
    {
      title: "E-Commerce Startup",
      description: "Design & Development",
      imgUrl: aishon,
      Glink: "https://github.com/abdelrahman252/Aishon",
      Llink: "https://abdelrahman252.github.io/Aishon/",
    },
    {
      title: "Template Startup",
      description: "Design & Development",
      imgUrl: hero,
      Glink: "https://github.com/abdelrahman252/fullpage",
      Llink: "https://abdelrahman252.github.io/fullpage/",
    },
    {
      title: "Restaurant Startup",
      description: "Design & Development",
      imgUrl: resto,
      Glink: "https://github.com/abdelrahman252/Resto",
      Llink: "https://abdelrahman252.github.io/Resto/",
    },
    {
      title: "Template Startup",
      description: "Design & Development",
      imgUrl: era,
      Glink: "https://github.com/abdelrahman252/ERA",
      Llink: "https://abdelrahman252.github.io/ERA/",
    },
  ];

  const Landprojects = [
    {
      title: "Trips Startup",
      description: "Design & Development",
      imgUrl: trips,
      Glink: "https://github.com/abdelrahman252/trips",
      Llink: "https://abdelrahman252.github.io/trips/",
    },
    {
      title: "variables Startup",
      description: "Design & Development",
      imgUrl: varr,
      Glink: "https://github.com/abdelrahman252/variables",
      Llink: "https://abdelrahman252.github.io/variables/",
    },
    {
      title: "robots Startup",
      description: "Design & Development",
      imgUrl: robo,
      Glink: "https://github.com/abdelrahman252/robots",
      Llink: "https://abdelrahman252.github.io/robots/",
    },
  ];
  const pressProjects = [
    {
      title: "E-Commerce ",
      description: "Design & Development",
      imgUrl: containerWordpress,
      Glink: "https://github.com/abdelrahman252/",
      Llink: "https://container-eg.shop/",
    },
    {
      title: "E-Commerce ",
      description: "Design & Development",
      imgUrl: salaWordpress,
      Glink: "https://github.com/abdelrahman252/",
      Llink: "https://sala-sa.shop/",
    },
  ];
  const googleProjects = [
    {
      title: "Ai-intro Startup",
      description: "Design & Development",
      imgUrl: ai,
      Glink: "https://github.com/abdelrahman252/",
      Llink: "https://sites.google.com/view/aitachodx/ai",
    },
  ];
  const NextJSProjects = [
    {
      title: "Houses Project",
      description: "Design & Development",
      imgUrl: estate,
      Glink: "https://github.com/abdelrahman252/estate-next-js",
      Llink: "https://estate-next-js.vercel.app/",
    },
  ];
  const [loadmore, setloadmore] = useState(3);
  const [loadmore2, setloadmore2] = useState(3);
  const [loadmore3, setloadmore3] = useState(3);
  const slice = Reprojects.slice(0, loadmore);
  const slice2 = JSprojects.slice(0, loadmore2);
  const slice3 = Landprojects.slice(0, loadmore3);
  const moreLoad = () => {
    setloadmore(loadmore + loadmore);
  };
  const moreLoad2 = () => {
    setloadmore2(loadmore2 + loadmore2);
  };
  const moreLoad3 = () => {
    setloadmore3(loadmore3 + loadmore3);
  };
  const { t } = useTranslation();

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <Rotate triggerOnce="true">
              <div>
                <h2>
                  {t("nav_projects")
                    .split("")
                    .map((letter, index) => (
                      <Animation key={index}>
                        {letter === " " ? "\u00A0" : letter}
                      </Animation>
                    ))}
                </h2>
                <p>{t("project_text")}</p>
              </div>
            </Rotate>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Slide triggerOnce="true" direction="left">
                <Nav
                  size={12}
                  variant="pills"
                  className="nav-pills mb-5 justify-content-between align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item sm={6} md={6}>
                    <Nav.Link eventKey="first">{t("project_react")}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item sm={6} md={6}>
                    <Nav.Link eventKey="sixth">{t("project_next")}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item sm={6} md={6}>
                    <Nav.Link eventKey="second">{t("project_java")}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item sm={6} md={6}>
                    <Nav.Link eventKey="third">{t("project_land")}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item sm={6} md={6}>
                    <Nav.Link eventKey="forth">{t("project_wordp")}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item sm={6} md={6}>
                    <Nav.Link eventKey="fifth">{t("project_google")}</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Slide>
              <Slide triggerOnce="true" direction="up">
                <Tab.Content
                  id="slideInUp"
                  style={{ background: "transparent" }}
                >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {slice.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>

                    <div className="more">
                      <button onClick={() => moreLoad()} className="load">
                        {t("project_load")}
                      </button>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <Row>
                      {slice2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                    <div className="more">
                      <button onClick={() => moreLoad2()} className="load">
                        {t("project_load")}
                      </button>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {slice3.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                    <div className="more">
                      <button onClick={() => moreLoad3()} className="load">
                        {t("project_load")}
                      </button>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="forth">
                    <Row>
                      {pressProjects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <Row>
                      {googleProjects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <Row>
                      {NextJSProjects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Slide>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="bg" src={colorSharp2} />
    </section>
  );
};
export default Projects;
