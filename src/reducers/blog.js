import {
	GET_BLOG_SUCCESS,
	GET_BLOG_REQUEST,
	GET_BLOG_ERROR
} from '../actions/blog';

const initialState = {
	posts: [],
	loading: false,
	error: null
};

export const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BLOG_REQUEST:
			return {
				...state,
				loading: true
			};

		case GET_BLOG_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.blog
			};

		case GET_BLOG_ERROR:
			return {
				...state,
				loading: false,
				error: action.err
			};
		default:
			return state;
	}
};
