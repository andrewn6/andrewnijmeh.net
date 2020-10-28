import React from 'react';
import Component from 'react';
import './App.css';

// Local importd (assets, css, html etc)
import Assets from './assets';
import Images from './assets/images';

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
        title: "About Me"
      },

      contact: {
        title: "Contact Me"
      },

      projects: {
        title: "My Projects"

      }
    }
  }

  return() {
    return (
      <Router>
        <Container className="p-0" fluid{true}>

          <Navbar className="border-bottom">
            <Navbar.Brand>this.state.title</Navbar.Brand>
            <Navbar.Toggle classname="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" 

            <Nav className="ml-auto">
              <link className="navbar-link" to="/">Home</link>
              
            </Nav>
            </Navbar.Collapse>
          </Navbar>
          // Paths for navbar itmes here.. 

        </Container>
      </Router>
    );
  }
}

export default App;
