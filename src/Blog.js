import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlog } from './actions/blog';
import styles from './styles/blog.module.css';

class Blog extends React.Component {
	componentDidMount() {
		this.props.dispatch(getBlog());
	}

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
		loggedIn: state.auth.currentUser !== null,
		posts: state.blog.posts
	};
};

export default connect(mapStateToProps)(Blog);
