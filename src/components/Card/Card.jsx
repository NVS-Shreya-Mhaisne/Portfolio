import React from "react";
import "./Card.css";

const Card = ({ title, image, desc, link }) => {
  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="project-img">
        <img src={image} alt={title} />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h2>{title}</h2>
        <p>{desc}</p>

        <div className="project-buttons">
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn live">
            Live Demo
          </a>
          <button className="btn details">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
