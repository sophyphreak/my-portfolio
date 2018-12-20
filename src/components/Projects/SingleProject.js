import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
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
          <CardLink href={props.demo} target="_blank">see demo</CardLink>
          <CardLink href={props.github} target="_blank">github repo</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleProject;