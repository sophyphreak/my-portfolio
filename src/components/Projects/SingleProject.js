import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from 'reactstrap';

const SingleProject = ({ title, demo, image, subtitle, text, github }) => (
  <Col lg="4" md="6" sm="12" className="padding-sm">
    <a
      href={demo || github}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <Card>
        <CardBody>
          <CardTitle style={{ fontFamily: 'monospace' }}>
            <h3>{title}</h3>
          </CardTitle>
          <hr />
          <CardSubtitle>{subtitle}</CardSubtitle>
          <hr />
          <CardText>
            <strong>{text}</strong>
          </CardText>
          <div className="link-buttons-container">
            {demo && (
              <Button color="primary" href={demo} target="_blank">
                see demo
              </Button>
            )}
            <Button color="primary" href={github} target="_blank">
              github repo
            </Button>
          </div>
        </CardBody>
      </Card>
    </a>
  </Col>
);

export default SingleProject;
