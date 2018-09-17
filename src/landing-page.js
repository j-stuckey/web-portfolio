import React from 'react';
import styles from './styles/landing-page.css';

export default function LandingPage(props){

    return (
        <div>

        <section className={styles.section}>
            
            {/* <img src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b73970e97b923e72be9355cb15099091&auto=format&fit=crop&w=1247&q=80" className={styles.section}/> */}
        </section>
            <h1 className={styles.content}>"Alone we can do so little, together we can do so much."</h1>
            <h3 className={styles.content}>- Hellen Keller</h3>
        </div>
    );
}