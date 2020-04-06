import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFreeCodeCamp
} from '@fortawesome/fontawesome-free-brands';

const Online = () => (
  <section id="online">
    <h1 className="online__header">Me Online</h1>
    <div className="online__container">
      <Button className="online__button" href="https://github.com/sophyphreak">
        <FontAwesomeIcon icon={faGithub} /> Github
      </Button>
      <Button
        className="online__button"
        href="https://www.linkedin.com/in/daxuepl-ah/"
      >
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </Button>
      <Button
        className="online__button"
        href="https://www.freecodecamp.org/sophyphreak"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} /> freeCodeCamp
      </Button>
    </div>
  </section>
);

export default Online;
