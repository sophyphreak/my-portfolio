import React from 'react';
import SingleProject from './SingleProject';

const centered = { textAlign: 'center' };

const SingleSection = (
  { images, sectionId, title, subtitle, projectList } // props includes { images, etc}
) => (
  <section id={sectionId}>
    <h1 style={centered}>{title}</h1>
    <h3 style={centered}>{subtitle}</h3>
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
