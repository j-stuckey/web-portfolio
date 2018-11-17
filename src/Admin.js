import React from 'react';

export default class Dashboard {


	render() {
		return <h1>Welcome Admin</h1>;
	}
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));