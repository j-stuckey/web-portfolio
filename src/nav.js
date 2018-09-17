import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/nav.css';

export default class NavBar extends React.Component {
    render() {
        return (
                <nav className={styles.navbar} id={"navbar"}>
                    
                    <Link to="/" className={styles.name} id={"name"}>
                        James Stuckey
                    </Link>
                        
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About me</Link>
                    <Link to="/contact">Contact me</Link>

                </nav>
        );
    }
}
