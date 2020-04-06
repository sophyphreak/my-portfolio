import React from 'react';
import SingleProject from './SingleProject';

const SingleSection = ({ sectionId, title, subtitle, projectList }) => (
  <section id={sectionId}>
    <br />
    <br />
    <br />
    <h1 className="project-title">{title}</h1>
    <h3 className="project-subtitle">{subtitle}</h3>
    <div className="projects-container">
      {projectList.map((project, index) => {
        return <SingleProject key={index} {...project} />;
      })}
    </div>
  </section>
);

export default SingleSection;
