import React from 'react';
import { Redirect } from 'react-router-dom';

import styles from './styles/blogform.module.css';
import { connect } from 'react-redux';
import { submitBlogPost } from './actions/blog';

import RichTextEditor from 'react-rte';

export class BlogForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			text: RichTextEditor.createEmptyValue(),
			post: {}
		};

		this.title = React.createRef();
		this.content = React.createRef();
	}

	handleChange(value) {
		this.setState({
			text: value
		});
	}

	onChange = value => {
		this.setState({ text: value });

		console.log(value.toString('html'));

		const post = {
			title: this.title.current.value,
			content: value.toString('html')
		};

		this.setState({ post });

		console.log(post);
		if (this.props.onChange) {
			// Send the changes up to the parent component as an HTML string.
			// This is here to demonstrate using `.toString()` but in a real app it
			// would be better to avoid generating a string on each change.
			this.props.onChange(value.toString('html'));
		}
	};

	submit(e, content) {
		e.preventDefault();

		// grabbing the post content using react refs
		// wonder if there's a better way to do this.

		const post = this.state.post;

		this.setState({
			submitted: true
		});

		this.props.dispatch(submitBlogPost(post));
	}

	render() {
		if (this.state.submitted) {
			return <Redirect to="/blog" />;
		}

		return (
			<React.Fragment>
				<form
					onSubmit={e => this.submit(e, this.content)}
					// onSubmit={() => this.onChange()}
					className={styles.form}
				>
					<h3>New Post</h3>
					<label htmlFor="title">Title</label>
					<input
						name="title"
						type="text"
						ref={this.title}
						className={styles.title}
					/>

					<label htmlFor="content">Content</label>
					{/* <textarea
						name="content"
						// ref={this.content}
						className={styles.content}
					/> */}

					<RichTextEditor
						className={styles.editor}
						value={this.state.text}
						onChange={this.onChange}
						ref={this.content}
					/>
					<button type="submit">Submit</button>
					<a href="/blog">Back</a>
				</form>
			</React.Fragment>
		);
	}
}

export const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(BlogForm);
