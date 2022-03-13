import React, { Component } from 'react';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Online from './Online/Online';
import { Box } from '@chakra-ui/react';

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Box>
            <AboutMe />
            <Online />
            <Projects />
          </Box>
        </main>
      </div>
    );
  }
}

export default App;
