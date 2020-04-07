import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const FlaskApis = () => (
  <SingleSection
    title="Flask Apis"
    subtitle="Built with flask-restful"
    projectList={projectList}
    sectionId="flask-apis"
  />
);

export default FlaskApis;
