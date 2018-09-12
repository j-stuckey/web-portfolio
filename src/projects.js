import React from 'react';
import ProjectCard from './project-card';
import styles from './styles/projects.css';
import msImage from './images/ms-image1.png';

export default function Projects(props) {
    return (
        <main className={styles.container}>
            <ProjectCard name={"Hearbuds"} />

            <ProjectCard name={"Learn Emojis"} />

            <ProjectCard 
                name={"Movie Surfer"}
                src={msImage}
                alt={"login page"}
            />
        </main>
    );
}
