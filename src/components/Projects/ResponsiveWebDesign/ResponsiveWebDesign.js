import React from 'react';
import SingleProject from '../SingleProject';
import projectList from './projectList';

const ResponsiveWebDesign = ({ images }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>responsive web design</h1>
    <h3 style={{ textAlign: 'center' }}>built in react + gatsby</h3>
    <section
      id="responsive-web-design"
      className="front-end-projects__container"
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

export default ResponsiveWebDesign;
