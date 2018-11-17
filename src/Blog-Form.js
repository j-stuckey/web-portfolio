import React from 'react';
import { Redirect } from 'react-router-dom';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class BlogForm extends React.Component {
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

		console.log(post);
		this.setState({
			submitted: true
		});
	}

	render() {
		if (this.state.submitted) {
			return <Redirect to="/blog" />;
		}

		return (
			<form onSubmit={e => this.submit(e)}>
				<label htmlFor="title">Title</label>
				<input name="title" type="text" ref={this.title} />

				<label htmlFor="content">Content</label>
				<textarea name="content" ref={this.content} />

				<button type="submit">Submit</button>
			</form>
		);
	}
}
