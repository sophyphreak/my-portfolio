import React from 'react';
import SingleProject from '../SingleProject';
import projectList from './projectList';

const InformationSecurityAndQualityAssurance = ({ images }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>
      information security and quality assurance
    </h1>
    <h3 style={{ textAlign: 'center' }}>built in node + express</h3>
    <section
      id="information-security-and-quality-assurance"
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

export default InformationSecurityAndQualityAssurance;
