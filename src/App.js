import React, { Component } from 'react';
import NavBar from './nav';
import Projects from './projects';
import ContactForm from './contact';
import LandingPage from './landing-page';
import AboutMe from './aboutme';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Route path="/" component={NavBar} />
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/aboutme" component={AboutMe} />
					<Route exact path="/contact" component={ContactForm} />
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
