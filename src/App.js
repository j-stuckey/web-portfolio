import React, { Component } from 'react';
import NavBar from './nav';
import styles from './styles/app.css';

class App extends Component {

  render() {

    return (
        <div className={styles.background}>

            <NavBar />

        </div>
    );
  }
}

export default App;
