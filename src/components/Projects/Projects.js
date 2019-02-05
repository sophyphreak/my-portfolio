import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import FullStack from './FullStack/FullStack';
import FrontEnd from './FrontEnd/FrontEnd';
import BackEnd from './BackEnd/BackEnd';

const Projects = ({ data }) => {
  const images = {
    backEnd: [],
    frontEnd: [],
    fullStack: []
  };
  data.allFile.edges.forEach(image => {
    const path = image.node.relativePath;
    if (/back-end/.test(path)) images.backEnd.push(image);
    if (/front-end/.test(path)) images.frontEnd.push(image);
    if (/full-stack/.test(path)) images.fullStack.push(image);
  });
  return (
    <div>
      <FullStack images={images.fullStack} />
      <FrontEnd images={images.frontEnd} />
      <BackEnd images={images.backEnd} />
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      {
        allFile {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Projects data={data} {...props} />}
  />
);
