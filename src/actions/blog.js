import { API_BASE_URL } from '../config';

import { normalizeResponseErrors } from './utils';

export const GET_BLOG_REQUEST = 'GET_BLOG_REQUEST';
export const getBlogRequest = () => ({
	type: GET_BLOG_REQUEST
});

export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS';
export const getBlogSuccess = blog => ({
	type: GET_BLOG_SUCCESS,
	blog
});

export const GET_BLOG_ERROR = 'GET_BLOG_ERROR';
export const getBlogError = err => ({
	type: GET_BLOG_ERROR,
	err
});

export const getBlog = () => dispatch => {
	dispatch(getBlogRequest());
	return fetch(`${API_BASE_URL}/blog`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(blog => dispatch(getBlogSuccess(blog)))
		.catch(err => getBlogError(err));
};

export const SUBMIT_BLOG_POST_REQUEST = 'SUBMIT_BLOG_POST_REQUEST';
export const submitBlogPostRequest = () => ({
	type: SUBMIT_BLOG_POST_REQUEST
});

export const SUBMIT_BLOG_POST_SUCCESS = 'SUBMIT_BLOG_POST_SUCCESS';
export const submitBlogPostSuccess = () => ({
	type: SUBMIT_BLOG_POST_SUCCESS
});

export const SUBMIT_BLOG_POST_ERROR = 'SUBMIT_BLOG_POST_ERROR';
export const submitBlogPostError = err => ({
	type: SUBMIT_BLOG_POST_ERROR,
	err
});

export const submitBlogPost = post => (dispatch, getState) => {
	const authToken = getState().auth.authToken;

	console.log(authToken);
	dispatch(submitBlogPostRequest());
	return fetch(`${API_BASE_URL}/blog`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${authToken}`
		},
		body: JSON.stringify(post)
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(() => dispatch(submitBlogPostSuccess()))
		.then(() => dispatch(getBlog()))
		.catch(err => dispatch(submitBlogPostError(err)));
};

export const DELETE_BLOG_POST_REQUEST = 'DELETE_BLOG_POST';
export const deleteBlogPostRequest = () => ({
	type: DELETE_BLOG_POST_REQUEST
});

export const DELETE_BLOG_POST_SUCCESS = 'DELETE_BLOG_POST_SUCCESS';
export const deleteBlogPostSuccess = () => ({
	type: DELETE_BLOG_POST_SUCCESS
});

export const DELETE_BLOG_POST_ERROR = 'DELETE_BLOG_POST_ERROR';
export const deleteBlogPostError = err => ({
	type: err
});

export const deleteBlogPost = postId => dispatch => {
	dispatch(deleteBlogPostRequest());
	return fetch(`${API_BASE_URL}/blog/${postId}`, {
		method: 'DELETE',
		headers: {
			'content-type': 'application/json'
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(() => dispatch(deleteBlogPostSuccess()))
		.then(() => dispatch(getBlog()))
		.catch(err => dispatch(getBlogError(err)));
};
