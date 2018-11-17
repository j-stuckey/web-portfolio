import React from 'react';
import styles from './styles/contact.module.css';
import resume from './assets/resume.pdf';

export default function ContactForm(props) {
	return (
		<section className={styles.section}>
			<h5 className={styles.title}>Contact me</h5>

			<div className={styles.box}>
				<a
					href="mailto:jstuckey@rutgers.edu"
					className={styles.contact}
					target="_blank"
					rel="noopener noreferrer"
				>
					jstuckey@rutgers.edu
				</a>
				<a
					href="https://github.com/j-stuckey"
					className={styles.contact}
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
				<a
					href="https://www.linkedin.com/in/james-stuckey-5b1179b9/"
					className={styles.contact}
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
				<a
					href={resume}
					className={styles.contact}
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</a>
			</div>
		</section>
	);
}
