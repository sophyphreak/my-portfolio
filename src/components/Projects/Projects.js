import React from 'react';
import SingleProject from './SingleProject';
import { StaticQuery, graphql } from 'gatsby';
import fullStackProjectsInfo from './projectsInfo/fullStackProjects/fullStackProjects';
import frontEndProjectsInfo from './projectsInfo/frontEndProjects/frontEndProjects';
import apiProjectsInfo from './projectsInfo/apiProjects/apiProjects';

const Projects = ({ data }) => {
  const images = data.allFile.edges;
  return (
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
      <h1 style={{ textAlign: 'center' }}>front end projects</h1>
      <section
        id="front-end-projects"
        className="front-end-projects__container"
      >
        {frontEndProjectsInfo.map((projectInfo, index) => {
          const image = images.find(
            img => img.node.relativePath === projectInfo.imagePath
          );
          return <SingleProject key={index} image={image} {...projectInfo} />;
        })}
      </section>
      <h1 style={{ textAlign: 'center' }}>rest api projects</h1>
      <section id="api-projects" className="api-projects__container">
        {apiProjectsInfo.map((projectInfo, index) => {
          const image = images.find(
            img => img.node.relativePath === projectInfo.imagePath
          );
          return <SingleProject key={index} image={image} {...projectInfo} />;
        })}
      </section>
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
