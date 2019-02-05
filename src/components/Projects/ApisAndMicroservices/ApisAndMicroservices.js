import React from 'react';
import SingleProject from '../SingleProject';
import projectList from './projectList';

const ApisAndMicroservices = ({ images }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>apis and microservices</h1>
    <h3 style={{ textAlign: 'center' }}>built in node + express</h3>
    <section
      id="apis-and-microservices"
      className="back-end-projects__container"
    >
      {projectList.map((project, index) => {
        const image = images.find(
          img => img.node.relativePath === project.imagePath
        );
        return <SingleProject key={index} image={image} {...project} />;
      })}
    </section>
  </div>
);

export default ApisAndMicroservices;
