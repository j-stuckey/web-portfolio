import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { blogReducer } from './reducers/blog';

export const store = createStore(
	combineReducers({
		blog: blogReducer
	}),
	applyMiddleware(thunk)
);
