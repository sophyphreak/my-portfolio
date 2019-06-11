import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import '../scss/style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
