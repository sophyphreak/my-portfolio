import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const FlaskApis = () => (
  <SingleSection
    title="Flask Apis"
    subtitle=""
    projectList={projectList}
    sectionId="flask-apis"
  />
);

export default FlaskApis;
