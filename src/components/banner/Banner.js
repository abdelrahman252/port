import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./banner.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container className="banner-container">
        <Row className="align-items-center ">
          <Col xs={12} md={6} xl={7} index={index}>
            <div>
              <div className="waviy ">
                <span className="one">w</span>
                <span className="to">e</span>
                <span className="thre">l</span>
                <span className="for">c</span>
                <span className="fiv">o</span>
                <span className="six">m</span>
                <span className="seven">e</span> <span className="eait">t</span>
                <span className="nine">o</span> <span className="ten">m</span>
                <span className="ele">y</span> <span className="twe">p</span>
                <span className="threet">o</span>
                <span className="fourt">r</span>
                <span className="fivit">t</span>
                <span className="sixth">f</span>
                <span className="sevth">o</span>
                <span className="eaigh">l</span>
                <span className="nint">i</span>
                <span className="twent">o</span>
              </div>

              <h1>
                {`Hi! I'm Abdelrahman♡`}{" "}
                <span
                  className="txt-rotate"
                  dataperiod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Hello! My name is Abdelrahman Ahmed. I am a self-taught web
                developer who is passionate about programming in general and
                especially web development.
              </p>
              <a href="#Contact">
                Let’s Connect <ArrowRightCircle size={25} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "iamge animate__animated animate__rollIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
