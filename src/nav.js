import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/nav.module.css';

export default class NavBar extends React.Component {
	render() {
		return (
			<nav className={styles.navbar} id={'navbar'}>
				<Link to="/" className={styles.name} id={'name'}>
					Home
				</Link>

				<Link to="/projects">Projects</Link>

				<Link to="/contact">Contact me</Link>

				{/* <Link to="/blog">Blog</Link> */}
			</nav>
		);
	}
}
