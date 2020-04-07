import React from 'react';
import FullStackApps from './FullStackApps/FullStackApps';
import ReactApps from './ReactApps/ReactApps';
import FlaskApis from './FlaskApis/FlaskApis';
import NodeApis from './NodeApis/NodeApis';

const Projects = () => {
  return (
    <div>
      <FullStackApps />
      <FlaskApis />
      <ReactApps />
      <NodeApis />
    </div>
  );
};

export default Projects;
