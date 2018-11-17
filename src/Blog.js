import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles/blog.css';

class Blog extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<Link to={this.props.loggedIn ? '/blog/new-post' : '/login'}>
					New Post
				</Link>
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

export default connect(mapStateToProps)(Blog);
