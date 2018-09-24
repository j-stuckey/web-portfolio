import React from 'react';
import styles from './styles/landing-page.css';
import portrait from './images/IMG_0727.jpg';

export default function LandingPage(props){

    return (

        <section className={styles.container}>
            <h3 className={styles.title}>Full Stack Developer</h3>
            <img src={portrait} className={styles.portrait} alt="image of person"/> 
            <h3 className={styles.title}>Hi, I'm James.</h3>
            <p className={styles.text}>I'm a software developer in the NYC Area. </p>
            <p className={styles.text}>My tech stack of choice includes Node.js, React and Redux and MongoDB but, I also have experience with Python and Ruby.</p>
            <p className={styles.text}>I love learning new things and solving problems. I'm excited to be a part of creating something amazing because the best things are created through amazing teamwork. </p>
            <p className={styles.text}><a href="/projects" className={styles.button}>View my projects</a></p>
        </section>
        
    );
}