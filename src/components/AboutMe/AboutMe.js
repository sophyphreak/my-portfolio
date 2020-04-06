import React from 'react';
import { Jumbotron } from 'reactstrap';

const AboutMe = () => {
  return (
    <section id="about-me">
      <Jumbotron>
        <div className="padding-md">
          <br />
          <h1 className="display-3">Hey there!</h1>
          <p className="lead">
            Congrats, you've stumbled onto my portfolio. I hope you enjoy your
            stay!
          </p>
          <hr className="my-2" />
          <br />
          <br />
          <br />
          <h3>I'm Andrew Horn, a react + python + node developer.</h3>
          <br />
          <br />
        </div>
      </Jumbotron>
    </section>
  );
};

export default AboutMe;
