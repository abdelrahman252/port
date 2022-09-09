import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import ProjectCard from "../ProjectCard/ProjectCard";

import porto from "../../assets/img/PORTO.PNG";
import shopping from "../../assets/img/shopping.PNG";

import ai from "../../assets/img/ai.PNG";
import admin from "../../assets/img/admin.PNG";
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
import wordpress from "../../assets/img/wordpress.PNG";
import wordpress2 from "../../assets/img/wordpress2.PNG";
import quiz from "../../assets/img/quiz.PNG";
import movies from "../../assets/img/movies.PNG";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.css";
import { useState } from "react";

const Projects = () => {
  const Reprojects = [
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
      title: "E-Commerce Startup",
      description: "Design & Development",
      imgUrl: wordpress2,
      Glink: "https://github.com/abdelrahman252/",
      Llink: "https://solvest.org/",
    },
    {
      title: "E-Commerce Startup",
      description: "Design & Development",
      imgUrl: wordpress,
      Glink: "https://github.com/abdelrahman252/",
      Llink: "https://tachodx.net/",
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
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomInDown" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Built with patience and hard work</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                size={12}
                variant="pills"
                className="nav-pills mb-5 justify-content-between align-items-center"
                id="pills-tab"
              >
                <Nav.Item sm={6} md={6}>
                  <Nav.Link eventKey="first">React js</Nav.Link>
                </Nav.Item>
                <Nav.Item sm={6} md={6}>
                  <Nav.Link eventKey="second">JavaScript</Nav.Link>
                </Nav.Item>
                <Nav.Item sm={6} md={6}>
                  <Nav.Link eventKey="third">Landing Pages</Nav.Link>
                </Nav.Item>
                <Nav.Item sm={6} md={6}>
                  <Nav.Link eventKey="forth">WordPress </Nav.Link>
                </Nav.Item>
                <Nav.Item sm={6} md={6}>
                  <Nav.Link eventKey="fifth">Google Sites </Nav.Link>
                </Nav.Item>
              </Nav>
              <TrackVisibility>
                {({ isVisible }) => (
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__backInLeft" : ""
                    }
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
                          Load More
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
                          Load More
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
                          Load More
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
                  </Tab.Content>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="bg" src={colorSharp2} />
    </section>
  );
};
export default Projects;
