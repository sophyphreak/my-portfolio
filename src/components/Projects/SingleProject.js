import React from 'react';
import { Button, Card, CardImg, CardText, CardBody, 
  CardTitle, CardSubtitle } from 'reactstrap';

const SingleProject = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={props.image} alt={props.title} />
        <CardBody>
          <CardText>{props.text}</CardText>
          <div className="link-buttons__container">
            <Button color="primary" href={props.demo} target="_blank">see demo</Button>
            <Button color="primary" href={props.github} target="_blank">github repo</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleProject;