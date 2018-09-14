import React from 'react';
import styles from './styles/projects.css';
import msImage from './images/ms-image1.png';

export default function Projects(props) {
    return (
        <main className={styles.container}>
            <section className={styles.card}>

                <h3 className={styles.title}>Hearbuds</h3>
                <h4 className={styles.role}>Front-end Developer</h4>

                <p>Hearbuds allows users to find concerts in their area and find people to go with.</p>
                <a href={"https://hearbuds-client.firebaseapp.com/"} target="_blank">Live App</a>
                <a href={"https://github.com/thinkful-ei21/hearbuds-client"} target="_blank">Github Repo</a>
                <img />
            </section>

            <section className={styles.card}>
                <h3 className={styles.title}>Learn Emojis</h3>
                <h4 className={styles.role}>Full Stack Developer</h4>

                <p>Can't find the right words? Use Emojis instead! 
                    This app improves your emoji vocabulary so that you
                    can write less and say more!
                </p>
                <a href="https://spacedrep-client.herokuapp.com/">Live App</a>
                <a href="https://github.com/thinkful-ei21/courtney-james-spacedRepitition-client" target="_blank">Github Repo</a>
                <img />
            </section>

            <section className={styles.card}>
                <h3 className={styles.title}>Movie Surfer</h3>
                <img />
            </section>
        </main>
    );
}
