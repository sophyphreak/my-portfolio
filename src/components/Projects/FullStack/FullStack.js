import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import cookingMeasureConverter from './individualProjects/cookingMeasureConverter';
import ebookManagerApp from './individualProjects/ebookManagerApp';

// this is still just copypasta
// need to fix

const fullStackProjects = [cookingMeasureConverter, ebookManagerApp];

const FullStack = props => (
  <div>
    <h1 style={{ textAlign: 'center' }}>full stack projects</h1>
    <section
      id="full-stack-projects"
      className="full-stack-projects__container"
    >
      {fullStackProjectsInfo.map((projectInfo, index) => {
        const image = images.find(
          img => img.node.relativePath === projectInfo.imagePath
        );
        return <SingleProject key={index} image={image} {...projectInfo} />;
      })}
    </section>
  </div>
);

export default FullStack;
