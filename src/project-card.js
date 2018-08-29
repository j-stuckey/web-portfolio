import React from 'react';
import styles from './styles/project-card.css';

export default function ProjectCard(props){
    return (
        <section className={styles.card}>
            <h1 className={styles.title}>{props.name}</h1>
        </section>
    );
}