import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import {
  Button,
  Box,
  Center,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const SingleProject = ({ title, demo, subtitle, github }) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <b>{title}</b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {demo ? (
        <Box>
          <iframe src={demo} width="100%" height="500px" />
        </Box>
      ) : (
        <></>
      )}
      <Box m={1} textAlign="center">
        {subtitle}
      </Box>
      <Center>
        <HStack spacing="24px">
          {demo ? (
            <Button colorScheme="blue" w="6em" h="5em">
              <a href={demo} target="_blank" rel="noreferrer">
                Demo &nbsp;
                <ExternalLinkIcon />
              </a>
            </Button>
          ) : (
            <></>
          )}
          <Button bgColor="white" size="5em">
            <a href={github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="5x" />
            </a>
          </Button>
        </HStack>
      </Center>
    </AccordionPanel>
  </AccordionItem>
);

export default SingleProject;
