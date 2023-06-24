import { Col } from "react-bootstrap";

import { Github, Globe } from "react-bootstrap-icons";
import "./ProjectCard.css";
export const ProjectCard = ({ title, description, imgUrl, Glink, Llink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>

        <div className="links">
          <a
            href={Glink}
            target="_blank"
            rel="noopener noreferrer"
            className="left"
          >
            <div>
              <Github size={40} />
            </div>
          </a>
          <a
            href={Llink}
            target="_blank"
            rel="noopener noreferrer"
            className="right"
          >
            <div>
              <Globe size={40} />
            </div>
          </a>
        </div>
      </div>
    </Col>
  );
};
export default ProjectCard;
