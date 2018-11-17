import React from 'react';
import styles from './styles/login.css';
import { login } from './actions/auth';
import { connect } from 'react-redux';

export class Login extends React.Component {
	click(e) {
		e.preventDefault();

		const user = {
			username: e.target.username.value,
			password: e.target.password.value
		};

		this.props.dispatch(login(user)).then(() => {
			this.props.history.push('/blog');
		});
	}

	render() {
		return (
			<form onSubmit={e => this.click(e)} className={styles.container}>
				<label htmlFor="username">Username</label>
				<input type="text" className={styles.input} name="username" />

				<label htmlFor="password">Password</label>
				<input
					type="password"
					className={styles.input}
					name="password"
				/>

				<button className={styles.button}>Log In</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(Login);
