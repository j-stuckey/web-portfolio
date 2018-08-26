import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    navButton(){
        console.log('button pressed');
    }

    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact Me</Link>
            </nav>
        );
    }
}