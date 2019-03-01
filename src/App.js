import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './nav';
import Projects from './projects';
import ContactForm from './contact';
import LandingPage from './landing-page';
import Blog from './Blog';
import NewPost from './NewPost';
import LoginForm from './LoginForm';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { refreshAuthToken } from './actions/auth';
import BlogForm from './Blog-Form';

class App extends Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        }
        if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillMount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            // 15 minute refresh period
            15 * 60 * 1000
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="/" component={NavBar} />
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={ContactForm} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/new-post" component={BlogForm} />
                    <Route exact path="/login" component={LoginForm} />
                </React.Fragment>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);
