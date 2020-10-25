import React from 'react';
import Component from 'react';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Andrew Nijmeh",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About Me', path: '/'},
        { title: 'Contact', path: '/' },
        { title: 'Projects', path:'/' }

      ]
    }
  }
  return() {
    return (
      <div>Hello</div>
    );
  }
}
export default App;
