import React from 'react';
import styles from './index.module.css';
import projects from './project-data';
import ProjectLeft from './ProjectLeft';

export default function Projects(props) {
	return (
		<main className={styles.container}>
			<ProjectLeft data={projects.hearbuds} />

			<ProjectLeft data={projects.learnEmojis} />
		</main>
	);
}
