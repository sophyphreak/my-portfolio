import React from 'react';
import SingleProject from './SingleProject';

const formatSectionTitle = sectionId =>
  sectionId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const SingleSection = ({ sectionId, projectList }) => (
  <section id={sectionId} className="space-y-4">
    <h3 className="text-xl font-semibold">{formatSectionTitle(sectionId)}</h3>
    <div className="divide-y divide-border rounded-lg border border-border bg-background">
      {projectList.map((project, index) => (
        <SingleProject key={index} {...project} />
      ))}
    </div>
  </section>
);

export default SingleSection;
