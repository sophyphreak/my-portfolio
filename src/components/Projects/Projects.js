import React from 'react';
import { Col } from 'reactstrap';
import SingleProject from './SingleProject';
import projectsInfo from './projectsInfo';

const { ebookManagerApp } = projectsInfo;

const Projects = () => (
  <div className="projects__container">
    <Col sm="4">
      <section id="full-stack-projects">
        <SingleProject {...ebookManagerApp} />
      </section>
      <section id="front-end-projects"></section>
      <section id="api-projects"></section>
    </Col>
  </div>
);

export default Projects;