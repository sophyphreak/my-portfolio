import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactApps from './ReactApps/ReactApps';
import RestApis from './RestApis/RestApis';
import createImagesObject from './createImagesObject';

const Projects = ({ data }) => {
  const images = createImagesObject(data);
  return (
    <div>
      <ReactApps images={images.reactApps} />
      <RestApis images={images.restApis} />
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
