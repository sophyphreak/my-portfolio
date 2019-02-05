import React from 'react';
import SingleProject from '../SingleProject';
import projectList from './projectList';

const ReactApps = ({ images }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>react apps</h1>
    <h3 style={{ textAlign: 'center' }}>full stack and front end</h3>
    <section id="react-apps" className="front-end-projects__container">
      {projectList.map((project, index) => {
        const image = images.find(
          img => img.node.relativePath === project.imagePath
        );
        return <SingleProject key={index} image={image} {...project} />;
      })}
    </section>
  </div>
);

export default ReactApps;
