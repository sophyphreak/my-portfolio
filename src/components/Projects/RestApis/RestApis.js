import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const RestApis = ({ images }) => (
  <SingleSection
    title="Rest Apis"
    subtitle="Built in node + express"
    projectList={projectList}
    sectionId="rest-apis"
  />
);

export default RestApis;
