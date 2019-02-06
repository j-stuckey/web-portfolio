import React from 'react';
import styles from './styles/projects.module.css';
import Projects from './projects';

export default function ProjectLeft(props) {
	const project = props.data;
	return (
		<div className={styles.container}>
			<a href={props.data.links.live}>
				<img
					className={styles.img}
					src={project.img.src}
					alt={props.data.img.alt}
				/>
			</a>
			<section className={styles.card}>
				<header className={styles.header}>
					<h3 className={styles.title}>{project.title}</h3>
					<p>{props.data.description}</p>
				</header>

				<h4>Tech stack: {project.techStack}</h4>
			</section>
		</div>
	);
}
