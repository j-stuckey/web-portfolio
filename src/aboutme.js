import React from 'react';
import styles from './styles/aboutme.css';


export default function AboutMe(props) {

    return (
        <section className={styles.section}>

            <img src={require('./images/workplace-1246677_1920.jpg')}/>
            
            <div className={styles.text}>
                <p>Hello. I am </p><a href="https://docs.google.com/document/d/1-a2JaiRNNneWVwWytYLipJjv3-YjRqu73BylTuNB6jM/edit?usp=sharing" target="_blank" className={styles.large} rel="noopener noreferrer">James.</a><p> I like building applications, learning new things and solving problems.</p>
                

            </div>
        </section>
    );
}