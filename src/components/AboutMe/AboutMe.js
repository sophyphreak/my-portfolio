import React from 'react';
import { Jumbotron } from 'reactstrap';

const AboutMe = () => {
  return (
    <section id="about-me">
      <Jumbotron>
        <div className="padding-md">
          <br />
          <h1 className="display-3">hey there!</h1>
          <p className="lead">
            congrats, you've stumbled onto my portfolio. i hope you enjoy your
            stay!
          </p>
          <hr className="my-2" />
          <br />
          <br />
          <br />
          <h3>
            i'm andrew horn, a react developer. i speak english and chinese.
          </h3>
          <h3>中文也会说也会写</h3>
          <hr />
          <br />
          <br />
          <h3>
            if you want the{' '}
            <a
              href="https://resume.andrew-horn-portfolio.life"
              target="_blank"
              rel="noopener noreferrer"
            >
              old-fashioned resume
            </a>
            .
          </h3>
        </div>
      </Jumbotron>
    </section>
  );
};

export default AboutMe;
