import React from 'react';
import styles from './styles/aboutme.css';
import resume from './assets/resume.pdf';

export default function AboutMe(props) {

    return (
        <section className={styles.section}>

            <img src={require('./images/workplace-1246677_1920.jpg')}/>
            
            <div className={styles.text}>
                <p>Hello. I am </p><a href={resume} target="_blank" className={styles.large} rel="noopener noreferrer">James.</a><p> I like building applications, learning new things and solving problems.</p>
                

            </div>
        </section>
    );
}