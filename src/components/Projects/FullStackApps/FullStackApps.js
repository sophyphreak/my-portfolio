import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const FullStackApps = () => (
  <SingleSection
    title="Full Stack Apps"
    subtitle=""
    projectList={projectList}
    sectionId="full-stack-apps"
  />
);

export default FullStackApps;
