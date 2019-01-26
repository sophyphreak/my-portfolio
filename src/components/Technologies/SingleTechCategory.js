import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import SingleTech from './SingleTech';

const SingleTechCategory = props => (
  <ListGroup className="padding-sm">
    <ListGroupItem color="info">{props.techCategory}</ListGroupItem>
    {props.list.map((tech, index) => (
      <SingleTech key={index} tech={tech} />
    ))}
  </ListGroup>
);

export default SingleTechCategory;
