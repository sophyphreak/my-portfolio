import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const ApisAndMicroservices = ({ images }) => (
  <SingleSection
    title="apis and microservices"
    subtitle="built in node + express"
    projectList={projectList}
    sectionId="apis-and-microservices"
    images={images}
  />
);

export default ApisAndMicroservices;
