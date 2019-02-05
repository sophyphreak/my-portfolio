import React from 'react';
import SingleSection from '../SingleSection';
import projectList from './projectList';

const InformationSecurityAndQualityAssurance = ({ images }) => (
  <SingleSection
    title="information security and quality assurance"
    subtitle="built in node + express"
    projectList={projectList}
    sectionId="information-security-and-quality-assurance"
    images={images}
  />
);

export default InformationSecurityAndQualityAssurance;
