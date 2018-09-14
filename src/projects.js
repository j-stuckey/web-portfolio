import React from 'react';
import styles from './styles/projects.css';
import msImage from './images/ms-image1.png';

export default function Projects(props) {
    return (
        <main className={styles.container}>
            <section className={styles.card}>

                <h3 className={styles.title}>Hearbuds</h3>
                <h4 className={styles.role}>Front-end Developer</h4>

                <p>Hearbuds allows users to find concerts in their area 
                    and find people to go with. It's built for anyone who loves
                    music and going to shows. It's built for people who want
                    to connect to the music scene and their community. We built
                    this application because we love music and wanted to 
                    have an ear to the music scene and make it easier for others.</p>
                <div className={styles.demo}>

                    <p>Demo login info:</p>
                    <p>Username: demouser1</p>
                    <p>Password: password123</p>
                </div>
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

                <div className={styles.demo}>

                    <p>Demo login info:</p>
                    <p>Username: demouser1</p>
                    <p>Password: password123</p>
                </div>

                <a href="https://spacedrep-client.herokuapp.com/" target="_blank">Live App</a>
                <a href="https://github.com/thinkful-ei21/courtney-james-spacedRepitition-client" target="_blank">Github Repo</a>
                <img />
            </section>

            <section className={styles.card}>
                <h3 className={styles.title}>Movie Surfer</h3>
                <h4 className={styles.role}>Full Stack Developer</h4>

                <div className={styles.demo}>

                    <p>Demo login info:</p>
                    <p>Username: demouser1</p>
                    <p>Password: password123</p>
                </div>

                <a href="https://spacedrep-client.herokuapp.com/" target="_blank">Live App</a>
                <a href="https://github.com/thinkful-ei21/courtney-james-spacedRepitition-client" target="_blank">Github Repo</a>
                <img />

            </section>
        </main>
    );
}
