import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { blogReducer } from './reducers/blog';
import { loadAuthToken } from './local-storage';
import { refreshAuthToken, setAuthToken } from './actions/auth';

export const store = createStore(
	combineReducers({
		blog: blogReducer
	}),
	applyMiddleware(thunk)
);

// Fetches the authToken from the localStorage
// using the function from local-storage.js
const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}
