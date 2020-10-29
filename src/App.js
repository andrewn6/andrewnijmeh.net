import React from 'react';
import Component from 'react';
import Router from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Garrett Love</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/contact" render={() => <ProjectsPage title={this.state.projects.title} />} />
          
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
