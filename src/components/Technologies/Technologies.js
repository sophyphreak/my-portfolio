import React from 'react';
import { Col } from 'reactstrap';
import SingleTechCategory from './SingleTechCategory';
import techData from './techData';

export default class Technologies extends React.Component {
  render() {
    return (
      <section className="tech tech-container" id="technologies">
        <h4 className="tech__title">technologies I have experience in:</h4>
        <br />
        <div className="tech-container">
          {
            techData.map(({ techCategory, list }) => (
              <Col sm="3">
                <SingleTechCategory techCategory={techCategory} list={list} />
              </Col>
            )) 
          }
        </div>
      </section>
    );
  }
}