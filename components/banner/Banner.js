import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

import "./banner.css";
import { useTranslation } from "react-i18next";
import { JackInTheBox, Slide } from "react-awesome-reveal";
import Animation from "../framer/Animation";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const { t } = useTranslation();
  const toRotate = [" Web Developer", " Web Designer", " UI/UX Designer"];
  const period = 2000;

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
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container className="banner-container">
        <Row className="align-items-center ">
          <Col xs={12} md={6} xl={7} index={index}>
            <Slide triggerOnce="true" direction="left">
              <div>
                <div className="waviy ">
                  <span className="one">{t("porto1")} </span>
                  <span className="to"> {t("porto2")}</span>
                  <span className="thre"> {t("porto3")} </span>
                  <span className="for"> {t("porto4")}</span>
                  <span className="fiv"> {t("porto5")}</span>
                  <span className="six"> {t("porto6")}</span>
                  <span className="seven">{t("porto7")} </span>
                  <span className="eait"> {t("porto8")}</span>
                  <span className="nine"> {t("porto9")}</span>
                  <span className="ten">{t("porto10")} </span>
                  <span className="ele">{t("porto11")}</span>
                  <span className="twe">{t("porto12")}</span>
                  <span className="threet">{t("porto13")} </span>
                  <span className="fourt">{t("porto14")}</span>
                  <span className="fivit">{t("porto15")}</span>
                  <span className="sixth">{t("porto16")} </span>
                  <span className="sevth">{t("porto17")}</span>
                  <span className="eaigh">{t("porto18")}</span>
                  <span className="nint">{t("porto19")}</span>
                  <span className="twent">{t("porto20")}</span>
                  {/* <span className="twent1">{t("porto21")}</span>
                  <span className="twent2">{t("porto22")}</span>
                  <span className="twent3">{t("porto23")}</span>
                  <span className="twent4">{t("porto24")}</span> */}
                </div>

                <Slide direction="left" triggerOnce="true" delay="400ms">
                  <h1>
                    {t("hi")
                      .split("")
                      .map((letter, index) => (
                        <Animation key={index}>
                          {letter === " " ? "\u00A0" : letter}
                        </Animation>
                      ))}
                  </h1>
                  <h1>
                    {t("banner_head")
                      .split("")
                      .map((letter, index) => (
                        <Animation key={index}>
                          {letter === " " ? "\u00A0" : letter}
                        </Animation>
                      ))}
                    <span className="txt-rotate">
                      <span className="wrap">
                        {text.split("").map((letter, index) => (
                          <Animation key={index}>
                            {letter === " " ? "\u00A0" : letter}
                          </Animation>
                        ))}
                      </span>
                    </span>
                  </h1>
                </Slide>
                <Slide direction="left" triggerOnce="true">
                  <p>{t("banner_text")}</p>
                  <a href="#Contact" className={t("move")}>
                    {t("nav_button")
                      .split("")
                      .map((letter, index) => (
                        <Animation key={index}>
                          {letter === " " ? "\u00A0" : letter}
                        </Animation>
                      ))}
                    <ArrowRightCircle size={25} className={t("rotate")} />
                  </a>
                </Slide>
              </div>
            </Slide>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <JackInTheBox>
              <div className="iamge ">
                <img src={headerImg} alt="Header Img" />
              </div>
            </JackInTheBox>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
