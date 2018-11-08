import React from 'react';
import styles from './styles/login.css';

export default class Login extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<label>Username</label>
				<input type="text" className={styles.input} />

				<label>Password</label>
				<input type="text" className={styles.input} />

				<button className={styles.button}>Log In</button>
			</div>
		);
	}
}
