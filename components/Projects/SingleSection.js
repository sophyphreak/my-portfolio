import React from 'react';
import SingleProject from './SingleProject';
import { Box, Accordion, Grid } from '@chakra-ui/react';

const SingleSection = ({ sectionId, projectList }) => (
  <section id={sectionId}>
    <Grid gridTemplateColumns="repeat(12, 1fr)" width="100%" height="100%">
      <Box
        gridColumn={{
          base: 'span 0',
          sm: 'span 0',
          md: 'span 0',
          lg: 'span 0',
          xl: 'span 1',
        }}
      />
      <Box
        gridColumn={{
          base: 'span 12',
          sm: 'span 12',
          md: 'span 12',
          lg: 'span 12',
          xl: 'span 10',
        }}
      >
        <Accordion allowToggle>
          {projectList.map((project, index) => (
            <SingleProject key={index} {...project} />
          ))}
        </Accordion>
      </Box>
    </Grid>
  </section>
);

export default SingleSection;
