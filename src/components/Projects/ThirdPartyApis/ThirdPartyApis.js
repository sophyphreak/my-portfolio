import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const ThirdPartyApis = ({ images }) => (
  <SingleSection
    title="working with third-party apis"
    subtitle="built in react"
    projectList={projectList}
    sectionId="third-party-apis"
    images={images}
  />
);

export default ThirdPartyApis;
