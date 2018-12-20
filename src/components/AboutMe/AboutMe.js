import React from 'react';
import { Jumbotron } from 'reactstrap';

const AboutMe = () => {
  return (
    <div>
      <Jumbotron>
        <div className="padding-md">
        <br />
        <h1 className="display-3">Hey there!</h1>
        <p className="lead">Congrats, you've stumbled onto my portfolio. I hope you enjoy your stay!</p>
        <hr className="my-2" />
        <br />
        <br />
        <br />
        <h3>I'm Andrew Horn, a React developer.</h3>
        <h3>也会中文</h3>
        <br />
        </div>
      </Jumbotron>
    </div>
  );
};

export default AboutMe;
