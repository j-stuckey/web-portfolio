import React from 'react';
import styles from './styles/projects.css';
import msImage from './images/ms-image1.png';

export default function Projects(props) {
    return (
        <main className={styles.container}>
            <section className={styles.card}>
                <h1 className={styles.title}>Hearbuds</h1>
                <img />
            </section>

            <section className={styles.card}>
                <h1 className={styles.title}>Learn Emojis</h1>
                <img />
            </section>

            <section className={styles.card}>
                <h1 className={styles.title}>Movie Surfer</h1>
                <img />
            </section>
        </main>
    );
}
