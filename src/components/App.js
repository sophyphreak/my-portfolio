import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';
import Technologies from './Technologies/Technologies';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import '../App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
