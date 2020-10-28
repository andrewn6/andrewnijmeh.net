import React from 'react';
import Component from 'react';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Andrew Nijmeh",
      headerLinks: [
        { title: 'Home', path: '/home'},
        { title: 'About Me', path: '/about'},
        { title: 'Contact', path: '/contact' },
        { title: 'Projects', path:'/projects' }
      ],
      home: {
        title: "Andrew Nijmeh"
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: "Contact Me"
      }
    }
  }

  return() {
    return (
      <Router>
        <Container className="p-0" fluid{true}>

          <Navbar className="border-bottom">
            <Navbar.Brand>Andrew Nijmeh</Navbar.Brand>
            <Navbar.Toggle classname="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" />
          </Navbar>
        
        </Container>
      </Router>
    );
  }
}

export default App;
