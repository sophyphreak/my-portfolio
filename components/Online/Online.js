import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFreeCodeCamp,
} from '@fortawesome/fontawesome-free-brands';
import { Button } from '@chakra-ui/react';

const Online = () => (
  <section id="online">
    <div className="online__container">
      <Button
        colorScheme="whiteAlpha"
        className="online__button"
        href="https://github.com/sophyphreak"
      >
        <FontAwesomeIcon icon={faGithub} color="black" size="2x" />
      </Button>
      <Button
        colorScheme="whiteAlpha"
        className="online__button"
        href="https://www.linkedin.com/in/daxuepl-ah/"
      >
        <FontAwesomeIcon icon={faLinkedin} color="black" size="2x" />
      </Button>
      <Button
        colorScheme="whiteAlpha"
        className="online__button"
        href="https://www.freecodecamp.org/sophyphreak"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} color="black" size="2x" />
      </Button>
    </div>
  </section>
);

export default Online;
