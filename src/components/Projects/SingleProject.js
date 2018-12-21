import React from 'react';
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from 'reactstrap';

const SingleProject = props => {
  return (
    <Col sm="4" className="padding-sm">
      <Card>
        <CardBody>
          <h2>{props.title}</h2>
        </CardBody>
        <a href={props.demo} target="_blank" rel="noopener noreferrer">
          <CardImg width="100%" src={props.image} alt={props.title} />
        </a>
        <CardBody>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <hr />
          <CardText>{props.text}</CardText>
          <div className="link-buttons__container">
            <Button color="primary" href={props.demo} target="_blank">
              see demo
            </Button>
            <Button color="primary" href={props.github} target="_blank">
              github repo
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SingleProject;
