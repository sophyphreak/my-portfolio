import React from 'react';
import SingleProject from '../SingleProject';
import backEndProjects from './backEndProjects';

const BackEnd = ({ images }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>back end projects</h1>
    <section id="back-end-projects" className="back-end-projects__container">
      {backEndProjects.map((project, index) => {
        const image = images.find(
          img => img.node.relativePath === project.imagePath
        );
        return <SingleProject key={index} image={image} {...project} />;
      })}
    </section>
  </div>
);

export default BackEnd;
