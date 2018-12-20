import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import SingleTech from './SingleTech';

const SingleTechCategory = props => (
  <ListGroup className="padding-sm">
    <ListGroupItem color="info">{props.techCategory}</ListGroupItem>
    {props.list.map(tech => (
      <SingleTech tech={tech} />
    ))}
  </ListGroup>
);

export default SingleTechCategory;
