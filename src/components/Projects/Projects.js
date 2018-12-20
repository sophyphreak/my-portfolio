import React from 'react';
import SingleProject from './SingleProject';
import fullStackProjectsInfo from './projectsInfo/fullStackProjectsInfo';
import frontEndProjectsInfo from './projectsInfo/frontEndProjectsInfo';
import apiProjectsInfo from './projectsInfo/apiProjectsInfo';

const Projects = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>full stack projects</h1>
    <section
      id="full-stack-projects"
      className="full-stack-projects__container"
    >
      {fullStackProjectsInfo.map(projectInfo => (
        <SingleProject {...projectInfo} />
      ))}
    </section>
    <h1 style={{ textAlign: 'center' }}>front end projects</h1>
    <section id="front-end-projects" className="front-end-projects__container">
      {frontEndProjectsInfo.map(projectInfo => (
        <SingleProject {...projectInfo} />
      ))}
    </section>
    <h1 style={{ textAlign: 'center' }}>api projects</h1>
    <section id="api-projects" className="api-projects__container">
      {apiProjectsInfo.map(projectInfo => (
        <SingleProject {...projectInfo} />
      ))}
    </section>
  </div>
);

export default Projects;
