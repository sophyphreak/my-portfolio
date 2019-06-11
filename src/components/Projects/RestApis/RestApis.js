import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const RestApis = ({ images }) => (
  <SingleSection
    title="rest apis"
    subtitle="built in node + express"
    projectList={projectList}
    sectionId="rest-apis"
    images={images}
  />
);

export default RestApis;
