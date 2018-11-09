import React from 'react';
import styles from './styles/login.css';

export default class Login extends React.Component {
	click(e) {
		e.preventDefault();

		const user = {
			username: e.target.username.value,
			password: e.target.password.value
		};
	}

	render() {
		return (
			<form onSubmit={e => this.click(e)} className={styles.container}>
				<label htmlFor="username">Username</label>
				<input type="text" className={styles.input} name="username" />

				<label htmlFor="password">Password</label>
				<input type="text" className={styles.input} name="password" />

				<button className={styles.button}>Log In</button>
			</form>
		);
	}
}
