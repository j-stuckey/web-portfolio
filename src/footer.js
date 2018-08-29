import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/footer.css';

export default function Footer(props) {
    
    return (
        <footer className={styles.footer}>

            <Link to="/aboutme">About me</Link>
            <Link to="/contact">Contact me</Link>

        </footer>
    );
}