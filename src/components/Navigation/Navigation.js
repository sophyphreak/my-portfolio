import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import sectionData from './sectionData';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand href="/">Andrew Horn</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggle} href="#about-me">
                  About Me
                </NavLink>
              </NavItem>
              {sectionData.map((section, index) => (
                <NavItem>
                  <NavLink
                    onClick={this.toggle}
                    href={section.link}
                    key={index}
                  >
                    {section.name}
                  </NavLink>
                </NavItem>
              ))}
              <NavItem>
                <NavLink onClick={this.toggle} href="#online">
                  Online
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
