import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../../assets/img/color-sharp.png";
import "./skills.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "../progress/Progress";
import { useTranslation } from "react-i18next";
import { Bounce, Slide } from "react-awesome-reveal";
import Animation from "../framer/Animation";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { t } = useTranslation();
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="skill-bx" data-wow-delay="0.3s">
                <Bounce triggerOnce="true" fraction="1">
                  <div>
                    <h2>
                      {" "}
                      {t("nav_skills")
                        .split("")
                        .map((letter, index) => (
                          <Animation key={index}>
                            {letter === " " ? "\u00A0" : letter}
                          </Animation>
                        ))}
                    </h2>
                    <p>
                      {t("skills_skillsf")} <br></br>
                      {t("skills_skillss")}
                    </p>
                  </div>
                </Bounce>
                <Slide triggerOnce="true" direction="right">
                  <div>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                      autoPlay={true}
                      swipeable={true}
                      draggable={true}
                      autoPlaySpeed={2000}
                    >
                      <div className="item">
                        <Progress endValue={90} text="HTML-HTML5" />
                      </div>
                      <div className="item">
                        <Progress endValue={85} text="CSS-CSS3" />
                      </div>
                      <div className="item">
                        <Progress endValue={70} text="SASS" />
                      </div>
                      <div className="item">
                        <Progress endValue={65} text="JavaScript" />
                      </div>
                      <div className="item">
                        <Progress endValue={74} text="Bootstrap" />
                      </div>
                      <div className="item">
                        <Progress endValue={78} text="React js" />
                      </div>
                    </Carousel>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Imag" />
    </section>
  );
};
export default Skills;
