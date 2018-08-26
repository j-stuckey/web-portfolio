import React from 'react';

export default class NavBar extends React.Component {
    navButton(){
        console.log('button pressed');
    }

    render() {
        return (
            <nav>
                <button onClick={() => this.navButton()}>Home</button>
                <button>Projects</button>
                <button>Contact Me</button>
            </nav>
        );
    }
}