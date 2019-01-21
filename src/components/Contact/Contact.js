import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';

const Contact = () => (
  <section id="contact">
    <h1 className="contact__header">contact me</h1>
    <div className="contact__container">
      <Button className="contact__button" href="https://github.com/sophyphreak">
        <FontAwesomeIcon icon={faGithub} /> github
      </Button>
      <Button
        className="contact__button"
        href="https://www.linkedin.com/in/daxuepl-ah/"
      >
        <FontAwesomeIcon icon={faLinkedin} /> linkedIn
      </Button>
    </div>
  </section>
);

export default Contact;
