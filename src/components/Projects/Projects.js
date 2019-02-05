import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactApps from './ReactApps/ReactApps';
import InformationSecurityAndQualityAssurance from './InformationSecurityAndQualityAssurance/InformationSecurityAndQualityAssurance';
import ApisAndMicroservices from './ApisAndMicroservices/ApisAndMicroservices';
import JavascriptAlgorithmsAndDataStructures from './JavascriptAlgorithmsAndDataStructures/JavascriptAlgorithmsAndDataStructures';
import ResponsiveWebDesign from './ResponsiveWebDesign/ResponsiveWebDesign';
import ThirdPartyApis from './ThirdPartyApis/ThirdPartyApis';
import createImagesObject from './createImagesObject';

const Projects = ({ data }) => {
  const images = createImagesObject(data);
  return (
    <div>
      <ReactApps images={images.reactApps} />
      <InformationSecurityAndQualityAssurance
        images={images.informationSecurityAndQualityAssurance}
      />
      <ApisAndMicroservices images={images.apisAndMicroservices} />
      <JavascriptAlgorithmsAndDataStructures
        images={images.javascriptAlgorithmsAndDataStructures}
      />
      <ResponsiveWebDesign images={images.responsiveWebDesign} />
      <ThirdPartyApis images={images.thirdPartyApis} />
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
