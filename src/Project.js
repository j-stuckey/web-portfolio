import React from 'react';
import styles from './styles/projects.module.css';
import Projects from './projects';
import PropTypes from 'prop-types';

export default function Project(props) {
	const project = props.project;

	if (props.side === 'left') {
		return (
			<div className={styles.projectContainer}>
				<a className={styles.anchor} href={project.links.live}>
					<img
						className={styles.img}
						src={project.img.src}
						alt={project.img.alt}
					/>
				</a>

				<section className={styles.card}>
					<header className={styles.header}>
						<h3 className={styles.title}>{project.title}</h3>
						<p>{project.description}</p>
					</header>

					<h4>Tech stack: {project.techStack}</h4>
				</section>
			</div>
		);
	} else if (props.side === 'right') {
		return (
			<div className={styles.projectContainer}>
				<section className={styles.card}>
					<header className={styles.header}>
						<h3 className={styles.title}>{project.title}</h3>
						<p>{project.description}</p>
					</header>

					<h4>Tech stack: {project.techStack}</h4>
				</section>
				<a className={styles.anchor} href={project.links.live}>
					<img
						className={styles.img}
						src={project.img.src}
						alt={project.img.alt}
					/>
				</a>
			</div>
		);
	}
}

Project.defaultProps = {
	side: 'left'
};

Project.propTypes = {
	// project must be on object with this shape
	project: PropTypes.shape({
		title: PropTypes.string.isRequired,
		img: PropTypes.object.isRequired,
		description: PropTypes.string.isRequired,
		// links will be an object with property values `string`
		links: PropTypes.objectOf(PropTypes.string).isRequired,
		techStack: PropTypes.string.isRequired
	})
};
