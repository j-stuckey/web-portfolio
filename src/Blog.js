import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/blog.css';

class Blog extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<a href="/login">New Post</a>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(Blog);
