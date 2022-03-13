import React from 'react';
import ReactApps from './ReactApps/ReactApps';
import FullStackApps from './FullStackApps/FullStackApps';
import FlaskApis from './FlaskApis/FlaskApis';
import NodeApis from './NodeApis/NodeApis';
import Go from './Go/Go';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

const Projects = () => {
  return (
    <div>
      <Tabs align="center">
        <TabList>
          <Tab>Frontend React</Tab>
          <Tab>Full Stack React</Tab>
          <Tab>Python</Tab>
          <Tab>Node</Tab>
          <Tab>Go</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ReactApps />
          </TabPanel>
          <TabPanel>
            <FullStackApps />
          </TabPanel>
          <TabPanel>
            <FlaskApis />
          </TabPanel>
          <TabPanel>
            <NodeApis />
          </TabPanel>
          <TabPanel>
            <Go />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Projects;
