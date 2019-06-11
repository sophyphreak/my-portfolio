import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Online from './Online/Online';
import '../scss/style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AboutMe />
        <Projects />
        <Online />
      </div>
    );
  }
}

export default App;
