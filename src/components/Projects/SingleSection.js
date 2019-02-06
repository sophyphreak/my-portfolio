import React from 'react';
import SingleProject from './SingleProject';

const SingleSection = (
  { images, sectionId, title, subtitle, projectList } // props includes { images, etc}
) => (
  <section id={sectionId}>
    <br />
    <br />
    <br />
    <h1 className="project-title">{title}</h1>
    <h3 className="project-subtitle">{subtitle}</h3>
    <div className="projects-container">
      {projectList.map((project, index) => {
        const image = images.find(
          img => img.node.relativePath === project.imagePath
        );
        return <SingleProject key={index} image={image} {...project} />;
      })}
    </div>
  </section>
);

export default SingleSection;
