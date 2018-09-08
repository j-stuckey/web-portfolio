import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/nav.css';

export default class NavBar extends React.Component {
    navButton() {
        console.log('button pressed');
    }

    render() {
        return (
            <React.Fragment>
                <nav className={styles.navbar}>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Work</Link>
                    <Link to="/aboutme">About me</Link>
                    <Link to="/contact">Contact me</Link>
                </nav>
            </React.Fragment>
        );
    }
}
