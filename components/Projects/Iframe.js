import React from 'react';

const Iframe = ({ demo }) => (
  <iframe src={demo} loading="lazy" width="100%" height="600px" />
);

export default Iframe;
