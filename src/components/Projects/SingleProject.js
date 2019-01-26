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

const SingleProject = ({ title, demo, image, subtitle, text, github }) => (
  <Col lg="4" md="6" sm="12" className="padding-sm">
    <Card>
      <CardBody>
        <CardTitle style={{ fontFamily: 'monospace' }}>
          <h3>{title}</h3>
        </CardTitle>
      </CardBody>
      <a href={demo} target="_blank" rel="noopener noreferrer">
        <Img fluid={image.node.childImageSharp.fluid} />
      </a>
      <CardBody>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <hr />
        <CardText>
          <strong>{text}</strong>
        </CardText>
        <div className="link-buttons__container">
          <Button color="primary" href={demo} target="_blank">
            see demo
          </Button>
          <Button color="primary" href={github} target="_blank">
            github repo
          </Button>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default SingleProject;
