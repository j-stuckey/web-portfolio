import React from 'react';
import styles from './styles/nav.css';

export default function NavBar(props) {
    return (
        <nav>
            <button className={styles.button}>Home</button>
        </nav>
    );
}