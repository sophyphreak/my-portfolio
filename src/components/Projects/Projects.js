import React from 'react';
import FullStackApps from './FullStackApps/FullStackApps';
import ReactApps from './ReactApps/ReactApps';
import RestApis from './RestApis/RestApis';

const Projects = ({ data }) => {
  return (
    <div>
      <FullStackApps />
      <ReactApps />
      <RestApis />
    </div>
  );
};

export default Projects;
