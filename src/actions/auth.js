import jwtDecode from 'jwt-decode';
import { saveAuthToken, clearAuthToken } from '../local-storage';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
	type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
	type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
	type: AUTH_SUCCESS,
	currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = err => ({
	type: AUTH_ERROR,
	err
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthTokenInfo = (authToken, dispatch) => {
	const decodedToken = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
	dispatch(authSuccess(decodedToken.user));
	saveAuthToken(authToken);
};
// passing in history from this.props.history
export const login = (user, history) => dispatch => {
	dispatch(authRequest());

	return fetch(`${API_BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			username: user.username,
			password: user.password
		})
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => {
			return res.json();
		})
		.then(({ authToken }) => storeAuthTokenInfo(authToken, dispatch))
		.catch(err => {
			const { status } = err;
			const message =
				status === 401
					? 'Incorrect username or password'
					: 'Unable to login, please try again';
			dispatch(authError(message));
			// return Promise.reject(
			//     new SubmissionError({
			//         _error: message
			//     })
			// );
		});
};

export const refreshAuthToken = () => (dispatch, getState) => {
	dispatch(authRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/auth/refresh`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({ authToken }) => storeAuthTokenInfo(authToken, dispatch))
		.catch(err => {
			dispatch(authError(err));
			dispatch(clearAuth());
			clearAuthToken(authToken);
		});
};
