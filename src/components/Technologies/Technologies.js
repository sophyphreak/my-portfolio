import React from 'react';
import { Col } from 'reactstrap';
import SingleTechCategory from './SingleTechCategory';
import techData from './techData';

export default class Technologies extends React.Component {
  render() {
    return (
      <section id="technologies">
        <br />
        <br />
        <br />
        <div className="tech tech-container">
          <h4 className="tech__title">technologies:</h4>
          <br />
          <div className="tech-container">
            {techData.map(({ techCategory, list }, index) => (
              <Col key={index} lg="3" md="6">
                <SingleTechCategory techCategory={techCategory} list={list} />
              </Col>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
