import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlog, deleteBlogPost } from './actions/blog';
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

	onDelete(id, post) {
		if (
			window.confirm(
				`Are you sure you want to delete the post "${post.title}"`
			)
		) {
			this.props.dispatch(deleteBlogPost(id));
			this.props.dispatch(getBlog());
		}
	}

	render() {
		let { posts } = this.props;

		if (posts) {
			this.posts = this.props.posts.map((post, index) => {
				return (
					<div key={index} className={styles.post}>
						<h3 className={styles.title}>{post.title}</h3>
						<p>{post.posted}</p>
						<div
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>
						{this.props.loggedIn ? (
							<button
								value={post.id}
								onClick={e =>
									this.onDelete(e.target.value, post)
								}
							>
								Delete
							</button>
						) : null}
						<div className={styles.spacer} />
					</div>
				);
			});
		}

		return (
			<React.Fragment>
				{this.props.loggedIn ? (
					<button
						onClick={e => this.logOut()}
						className={styles.logout}
					>
						Log out
					</button>
				) : null}
				<div className={styles.container}>
					<Link
						to={this.props.loggedIn ? '/blog/new-post' : '/login'}
					>
						New Post
					</Link>
					{this.posts}
				</div>
			</React.Fragment>
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
