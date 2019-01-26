import React from 'react';
import Img from 'gatsby-image';
import {
  Button,
  Card,
  // CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from 'reactstrap';

const SingleProject = props => (
  <Col lg="4" md="6" sm="12" className="padding-sm">
    <Card>
      <CardBody>
        <CardTitle style={{ fontFamily: 'monospace' }}>
          <h3>{props.title}</h3>
        </CardTitle>
      </CardBody>
      <a href={props.demo} target="_blank" rel="noopener noreferrer">
        {props.image.node && (
          <Img fluid={props.image.node.childImageSharp.fluid} />
        )}
      </a>
      <CardBody>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <hr />
        <CardText>
          <strong>{props.text}</strong>
        </CardText>
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

export default SingleProject;
