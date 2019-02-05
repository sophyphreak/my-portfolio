import React from 'react';
import SingleProject from '../SingleProject';
import frontEndProjects from './frontEndProjects';

const FrontEnd = ({ images }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>front end projects</h1>
    <section id="front-end-projects" className="front-end-projects__container">
      {frontEndProjects.map((project, index) => {
        const image = images.find(
          img => img.node.relativePath === project.imagePath
        );
        return <SingleProject key={index} image={image} {...project} />;
      })}
    </section>
  </div>
);

export default FrontEnd;
