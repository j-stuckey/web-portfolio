import React from 'react';
import styles from './styles/landing-page.css';
import portrait from './images/IMG_0727.jpg';

export default function LandingPage(props){

    return (

        <section className={styles.container}>
            <h3 className={styles.title}>Full Stack Developer</h3>
            <img src={portrait} className={styles.portrait} alt="image of person"/> 
            <h3 className={styles.title}>Hi, I'm James.</h3>
            <p className={styles.text}>I'm a software developer in the NYC Area. <a href="/projects">View my projects</a></p>
        </section>
        
    );
}