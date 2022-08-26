import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"
import "./skills.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TrackVisibility from "react-on-screen";

const Skills = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (

    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility>
              {({ isVisible }) =>

                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <div className="skill-bx" data-wow-delay="0.3s">
                    <h2>Skills</h2>
                    <p>You can't use up creativity . <br></br>
                    The more you use , the more you have in your significant mind. 
                    </p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                      <div className="item">
                        <img src={meter1} alt="Imag" />
                        <h5>HTML-HTML5</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="Imag" />
                        <h5>CSS-CSS3</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="Imag" />
                        <h5>SASS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="Imag" />
                        <h5>JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="Imag" />
                        <h5>Bootstrap</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="Imag" />
                        <h5>React js</h5>
                      </div>
                    </Carousel>
                  </div>
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Imag" />
    </section>
  )
}
export default Skills