import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import Footer from './components/Footer';
import Content from './components/Content';

import About from './pages/About';
import Contact from './pages/Contact';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Andrew Nijmeh",
      headerLinks: [

        { title: 'Home', path: '/home'},
        { title: 'About Me', path: '/about'},
        { title: 'Contact', path: '/contact' },
        { title: 'Projects', path:'/projects' },
        { title: 'Skills', path: '/skills' }

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
      
      },

      skills: {
        title: "Skills"
      }

    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Andrew Nijmeh</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/skills">Skills</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} />} />
          <Route path="/skills" render={() => <SkillsPage title={this.state.skills.title} />} />
          
          
          <Footer />

        </Container>
      </Router>
    );
  }
}



