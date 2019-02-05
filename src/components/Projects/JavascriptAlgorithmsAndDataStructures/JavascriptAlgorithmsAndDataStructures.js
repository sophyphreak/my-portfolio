import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const JavascriptAlgorithmsAndDataStructures = ({ images }) => (
  <SingleSection
    title="javascript algorithms and data structures"
    subtitle="built in react"
    projectList={projectList}
    sectionId="javascript-algorithms-and-data-structures"
    images={images}
  />
);

export default JavascriptAlgorithmsAndDataStructures;
