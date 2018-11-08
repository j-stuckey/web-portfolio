import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/blog.css';

class Blog extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<h1>Hello, World.</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(Blog);
