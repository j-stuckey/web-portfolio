import React from 'react';
import styles from './styles/nav.css';

export default function NavBar(props) {
    return (
        <nav className={styles.background}>
            <button className={styles.button}>Home</button>
            <button className={styles.button}>Projects</button>
            <button className={styles.button}>Contact</button>
        </nav>
    );
}