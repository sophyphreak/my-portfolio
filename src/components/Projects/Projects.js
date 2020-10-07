import React from 'react';
import ReactApps from './ReactApps/ReactApps';
import FullStackApps from './FullStackApps/FullStackApps';
import FlaskApis from './FlaskApis/FlaskApis';
import NodeApis from './NodeApis/NodeApis';

const Projects = () => {
  return (
    <div>
      <ReactApps />
      <FullStackApps />
      <FlaskApis />
      <NodeApis />
    </div>
  );
};

export default Projects;
