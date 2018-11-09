export const loadAuthToken = () => {
	// gets the authToken key value pair from
	// browser localStorage object
	return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
	try {
		localStorage.setItem('authToken', authToken);
	} catch (e) {}
};

export const clearAuthToken = () => {
	try {
		localStorage.removeItem('authToken');
	} catch (e) {}
};
