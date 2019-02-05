import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const ResponsiveWebDesign = ({ images }) => (
  <SingleSection
    title="responsive web design"
    subtitle="built in react + gatsby"
    projectList={projectList}
    sectionId="responsive-web-design"
    images={images}
  />
);

export default ResponsiveWebDesign;
