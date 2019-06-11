import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const ReactApps = ({ images }) => (
  <SingleSection
    title="react apps"
    subtitle="serverless and full stack"
    projectList={projectList}
    sectionId="react-apps"
    images={images}
  />
);

export default ReactApps;
