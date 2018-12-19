import React, { Component } from 'react';
import Navigation from './Navigation';
import Top from './Top';
import Technologies from './Technologies';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Top />
        <Technologies />
      </div>
    );
  }
}

export default App;
