import React from 'react';
import { Redirect } from 'react-router-dom';

import styles from './styles/blogform.module.css';
import { connect } from 'react-redux';
import { submitBlogPost } from './actions/blog';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { string } from 'prop-types';

export class BlogForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			text: ''
		};

		this.title = React.createRef();
		this.content = React.createRef();
	}

	submit(e) {
		e.preventDefault();

		// grabbing the post content using react refs
		// wonder if there's a better way to do this.

		const post = {
			title: this.title.current.value,
			content: this.content.current.value
		};

		this.setState({
			submitted: true
		});

		this.props.dispatch(submitBlogPost(post));
	}

	handleChange(value) {
		this.setState({
			text: value
		});
	}

	render() {
		if (this.state.submitted) {
			return <Redirect to="/blog" />;
		}

		return (
			<form onSubmit={e => this.submit(e)} className={styles.form}>
				<h3>New Post</h3>
				<label htmlFor="title">Title</label>
				<input
					name="title"
					type="text"
					ref={this.title}
					className={styles.title}
				/>

				<label htmlFor="content">Content</label>
				<textarea
					name="content"
					ref={this.content}
					className={styles.content}
				/>

				<button type="submit">Submit</button>
				<a href="/blog">Back</a>
			</form>
		);
	}
}

export const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(BlogForm);
