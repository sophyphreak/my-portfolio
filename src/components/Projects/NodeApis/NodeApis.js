import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const NodeApis = () => (
  <SingleSection
    title="Node Apis"
    subtitle="Built in Express"
    projectList={projectList}
    sectionId="node-apis"
  />
);

export default NodeApis;
