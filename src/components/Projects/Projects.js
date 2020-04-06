import React from 'react';
import ReactApps from './ReactApps/ReactApps';
import RestApis from './RestApis/RestApis';

const Projects = ({ data }) => {
  return (
    <div>
      <ReactApps />
      <RestApis />
    </div>
  );
};

export default Projects;
