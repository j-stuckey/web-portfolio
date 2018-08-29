import React from 'react';
import ProjectCard from './project-card';
import styles from './styles/projects.css';

export default function Projects(props) {
    return (
        <main className={styles.container}>

            <ProjectCard name={"Project 1"}/>

            <ProjectCard name={"Project 2"}/>

            <ProjectCard name={"Project 3"}/>

        </main>
    );
}