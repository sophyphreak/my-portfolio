import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Technologies extends React.Component {
  render() {
    return (
      <section className="tech" id="technologies">
        <h4 className="tech__title">Technologies I have experience in:</h4>
        <br />
        <div className="tech-container">
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">langauges</ListGroupItem>
              <ListGroupItem>javascript es6</ListGroupItem>
              <ListGroupItem>css</ListGroupItem>
              <ListGroupItem>html</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">front end</ListGroupItem>
              <ListGroupItem>react</ListGroupItem>
              <ListGroupItem>webpack</ListGroupItem>
              <ListGroupItem>babel</ListGroupItem>
              <ListGroupItem>bootstrap</ListGroupItem>
              <ListGroupItem>materialui</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">back end</ListGroupItem>
              <ListGroupItem>node</ListGroupItem>
              <ListGroupItem>express</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">database</ListGroupItem>
              <ListGroupItem>mongodb</ListGroupItem>
              <ListGroupItem>firebase</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">hosting</ListGroupItem>
              <ListGroupItem>digitalocean + dokku</ListGroupItem>
              <ListGroupItem>heroku</ListGroupItem>
              <ListGroupItem>now</ListGroupItem>
              <ListGroupItem>surge</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">react libraries</ListGroupItem>
              <ListGroupItem>react-quill</ListGroupItem>
              <ListGroupItem>reactstrap</ListGroupItem>
              <ListGroupItem>react-dates</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">node libraries</ListGroupItem>
              <ListGroupItem>nodemailer</ListGroupItem>
              <ListGroupItem>dotenv</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">testing</ListGroupItem>
              <ListGroupItem>jest</ListGroupItem>
              <ListGroupItem>enzyme</ListGroupItem>
              <ListGroupItem>mocha</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">version control</ListGroupItem>
              <ListGroupItem>git</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">routing</ListGroupItem>
              <ListGroupItem>react-router</ListGroupItem>
              <ListGroupItem>next</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">cleanliness</ListGroupItem>
              <ListGroupItem>prettier</ListGroupItem>
              <ListGroupItem>eslint</ListGroupItem>
              <ListGroupItem>husky</ListGroupItem>
            </ListGroup>
            <ListGroup className="padding-sm">
              <ListGroupItem color="info">others</ListGroupItem>
              <ListGroupItem>axios</ListGroupItem>
              <ListGroupItem>moment</ListGroupItem>
              <ListGroupItem>sass</ListGroupItem>
            </ListGroup>
        </div>
      </section>
    );
  }
}