import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/nav.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className={styles.navbar}>
                    <h3 className={styles.name}>James Stuckey</h3>

                    <Link to="/projects">Work</Link>
                    <Link to="/aboutme">About me</Link>
                    <Link to="/contact">Contact me</Link>
                </nav>
            </React.Fragment>
        );
    }
}
