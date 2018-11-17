import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from './actions/auth';
import { clearAuthToken } from './local-storage';
import { Redirect } from 'react-router-dom';

import BlogForm from './Blog-Form';
import './styles/new-post.module.css';

export class NewPost extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		if (!this.props.loggedIn) {
			return <Redirect to="/blog" />;
		}

		return (
			<div>
				<div>
					{this.props.loggedIn ? (
						<button onClick={e => this.logOut()}>Log out</button>
					) : null}

					<BlogForm />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		hasAuthToken: state.auth.authToken !== null,
		loggedIn: state.auth.currentUser !== null
	};
};

export default connect(mapStateToProps)(NewPost);
