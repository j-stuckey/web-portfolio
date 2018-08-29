import React, { Component } from 'react';
import NavBar from './nav';
import Projects from './projects';
import ContactForm from './contact';
import About from './about';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './footer';

class App extends Component {

  render() {

    return (
        
            <Router>
                <React.Fragment>

                    <Route path="/" component={NavBar} />
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/aboutme" component={About} />
                    <Route exact path="/contact" component={ContactForm}/>
                    <Route path="/" component={Footer} />
                </React.Fragment>
                
            </Router>
    );
  }
}

export default App;
