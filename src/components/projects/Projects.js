import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import ProjectCard from "../ProjectCard/ProjectCard"
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import porto from "../../assets/img/PORTO.PNG";
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
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Projects.css"

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
      Glink: "https://github.com/abdelrahman252/hero",
      Llink: "https://abdelrahman252.github.io/hero/",
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
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>

                <div className={isVisible ? "animate__animated animate__zoomInDown" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav size={12} variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item sm={6} md={4}>
                  <Nav.Link eventKey="first">React js</Nav.Link>
                </Nav.Item>
                <Nav.Item sm={6} md={4}>
                  <Nav.Link eventKey="second">JavaScript</Nav.Link>
                </Nav.Item >
                <Nav.Item sm={6} md={4}>
                  <Nav.Link eventKey="third">Landing Pages</Nav.Link>
                </Nav.Item>
              </Nav>
              <TrackVisibility>
                {({ isVisible }) =>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Reprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          JSprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          Landprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>}
              </TrackVisibility>
            </Tab.Container>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="bg" src={colorSharp2}></img>
    </section>
  )
}
export default Projects