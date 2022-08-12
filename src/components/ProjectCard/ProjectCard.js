import { Col } from "react-bootstrap";

import { Github, Globe  } from 'react-bootstrap-icons';
import "./ProjectCard.css"
export const ProjectCard = ({ title, description, imgUrl, Glink, Llink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>

        <div className="links">

          <div className="left">
            <a href={Glink} target="_blank"><Github size={40} /></a>
          </div>
          <div className="right">
            <a href={Llink} target="_blank"><Globe size={40} /></a>
          </div>

        </div>

      </div>
    </Col >
  )
}
export default ProjectCard