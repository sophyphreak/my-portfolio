import React from 'react';
import SingleProject from './SingleProject';
import fullStackProjectsInfo from './projectsInfo/fullStackProjectsInfo';
import frontEndProjectsInfo from './projectsInfo/frontEndProjectsInfo';

const Projects = () => (
  <div>
  <h1 style={{ textAlign: "center"}}>full stack projects</h1>
    <section id="full-stack-projects" className="full-stack-projects__container">
      {
        fullStackProjectsInfo.map(projectInfo => <SingleProject {...projectInfo} />)
      }
    </section>
  <h1 style={{ textAlign: "center"}}>front end projects</h1>

    <section id="front-end-projects" className="front-end-projects__container">
      {
        frontEndProjectsInfo.map(projectInfo => <SingleProject {...projectInfo} />)
      }
    </section>
    <section id="api-projects" className="projects__container">
    
    </section>
  </div>
);

export default Projects;