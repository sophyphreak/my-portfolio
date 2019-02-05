import React from 'react';
import SingleProject from '../SingleProject';
import projectList from './projectList';

const ThirdPartyApis = ({ images }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>working with third-party apis</h1>
    <h3 style={{ textAlign: 'center' }}>built in react</h3>
    <section id="third-party-apis" className="front-end-projects__container">
      {projectList.map((project, index) => {
        const image = images.find(
          img => img.node.relativePath === project.imagePath
        );
        return <SingleProject key={index} image={image} {...project} />;
      })}
    </section>
  </div>
);

export default ThirdPartyApis;
