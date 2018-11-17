import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlog } from './actions/blog';
import { clearAuth } from './actions/auth';
import { clearAuthToken } from './local-storage';
import styles from './styles/blog.module.css';

class Blog extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	componentDidMount() {
		this.props.dispatch(getBlog());
	}

	render() {
		return (
			<div className={styles.container}>
				<Link to={this.props.loggedIn ? '/blog/new-post' : '/login'}>
					New Post
				</Link>

				{this.props.loggedIn ? (
					<button
						onClick={e => this.logOut()}
						className={styles.logout}
					>
						Log out
					</button>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.currentUser !== null,
		posts: state.blog.posts
	};
};

export default connect(mapStateToProps)(Blog);
