import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';
import Technologies from './Technologies/Technologies';
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
        <Technologies />
        <Contact />
      </div>
    );
  }
}

export default App;
