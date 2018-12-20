import React from 'react';
import { Jumbotron } from 'reactstrap';

const AboutMe = () => {
  return (
    <div>
      <Jumbotron>
        <div className="padding-md">
        <br />
        <h1 className="display-3">hey there!</h1>
        <p className="lead">congrats, you've stumbled onto my portfolio. i hope you enjoy your stay!</p>
        <hr className="my-2" />
        <br />
        <br />
        <br />
        <h3>i'm andrew horn, a react developer.</h3>
        <h3>中文也会说也会写</h3>
        <br />
        </div>
      </Jumbotron>
    </div>
  );
};

export default AboutMe;
