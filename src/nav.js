import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/nav.css';

export default class NavBar extends React.Component {
    navButton(){
        console.log('button pressed');
    }

    render() {
        return (
            <nav className={styles.navbar} >
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        );
    }
}