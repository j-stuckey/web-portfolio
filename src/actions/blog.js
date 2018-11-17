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
