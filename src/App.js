import React, { Component } from 'react';
import styles from './styles/app.css';
class App extends Component {
  render() {
    return (
        <React.Fragment>
            
            <header>
                <nav>
                    <button className={styles.button}>Home</button>
                </nav>
            </header>

        </React.Fragment>
    );
  }
}

export default App;
