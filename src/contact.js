import React from 'react';
import styles from './styles/contact.css';

export default function ContactForm(props) {

    return (
        <section className={styles.section}>

            <h5 className={styles.title}>Contact me</h5>

            <div className={styles.box}>

                <a href="mailto:example@email.com" className={styles.contact} target="_blank">Email</a>
                <a href="mailto:example@email.com" className={styles.contact} target="_blank">Github</a>
                <a href="mailto:example@email.com" className={styles.contact} target="_blank">LinkedIn</a>
                <a href="mailto:example@email.com" className={styles.contact} target="_blank">Resume</a>
            </div>
        </section>
    );
}