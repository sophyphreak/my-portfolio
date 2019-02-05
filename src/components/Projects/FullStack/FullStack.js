import React from 'react';
import SingleProject from '../SingleProject';
import fullStackProjects from './fullStackProjects';

const FullStack = ({ images }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>full stack projects</h1>
    <section
      id="full-stack-projects"
      className="full-stack-projects__container"
    >
      {fullStackProjects.map((project, index) => {
        const image = images.find(
          img => img.node.relativePath === project.imagePath
        );
        return <SingleProject key={index} image={image} {...project} />;
      })}
    </section>
  </div>
);

export default FullStack;
