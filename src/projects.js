import React from 'react';
import styles from './index.module.css';
import projects from './project-data';
import Project from './Project';

export default function Projects(props) {
	// projects will default to left side if `side` prop is not given
	return (
		<main className={styles.container}>
			<Project project={projects.hearbuds} />

			<Project project={projects.learnEmojis} side="right"/>

			<Project project={projects.movieSurfer} />
		</main>
	);
}
