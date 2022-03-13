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
      <Button colorScheme="whiteAlpha" className="online__button">
        <a
          href="https://github.com/sophyphreak"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="black" size="2x" />
        </a>
      </Button>
      <Button colorScheme="whiteAlpha" className="online__button">
        <a target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color="black" size="2x" />
        </a>
      </Button>
      <Button colorScheme="whiteAlpha" className="online__button">
        <a
          href="https://www.freecodecamp.org/sophyphreak"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFreeCodeCamp} color="black" size="2x" />
        </a>
      </Button>
    </div>
  </section>
);

export default Online;
