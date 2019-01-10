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
          <NavbarBrand href="/">andrew horn</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about-me">about me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#full-stack-projects">
                  full stack projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#front-end-projects">front end projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#api-projects">api projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#technologies">technologies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
