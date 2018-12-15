import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import BlogForm from './Blog-Form';
import './styles/new-post.module.css';

export class NewPost extends React.Component {
	render() {
		if (!this.props.loggedIn) {
			return <Redirect to="/blog" />;
		}

		return <BlogForm />;
	}
}

const mapStateToProps = state => {
	return {
		hasAuthToken: state.auth.authToken !== null,
		loggedIn: state.auth.currentUser !== null
	};
};

export default connect(mapStateToProps)(NewPost);
