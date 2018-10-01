import React from 'react';
import styles from './styles/projects.css';

export default function Projects(props) {
    return (
        <main className={styles.container}>
            <section className={styles.card}>
                <header className={styles.header}>

                    <h3 className={styles.title}>Hearbuds</h3>
                    <h4 className={styles.role}>Front-end Developer</h4>
                </header>

                <p>Hearbuds allows users to find concerts in their area 
                    and find people to go with. The app is made for people
                    who love live music and want to stay connected to the
                    music scene in their area. We built this application 
                    because we love music and wanted to have an ear to the
                    music scene and make it easier for others.</p>

                <div className={styles.divider}/>
                <a href="https://hearbuds-client.firebaseapp.com/">
                    <img src="https://github.com/j-stuckey/hearbuds-client/raw/master/screenshots/desktop-dashboard.png"/>
                </a>

                <h5 className={styles.header}>Tech Stack</h5>

                <ul className={styles.tech}>
                    <li>HTML5, CSS3, Javascript</li>
                    <li>React & Redux</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                    <li>JSON Web Token</li>
                    <li>Deployed with Firebase</li>
                </ul>
                <div className={styles.demo}>

                    <p>Demo login info:</p>
                    <p>Username: demouser1</p>
                    <p>Password: password123</p>
                </div>
                <a href={"https://hearbuds-client.firebaseapp.com/"} target="_blank" className={styles.button}>Live App</a>
                <a href={"https://github.com/j-stuckey/hearbuds-client"} target="_blank" className={styles.button}>Github Repo</a>
            </section>

            <section className={styles.card}>
                <header className={styles.header}>
                    <h3 className={styles.title}>Learn Emojis</h3>
                    <h4 className={styles.role}>Full Stack Developer</h4>
                </header>

                <p>Can't find the right words? Use Emojis instead! 
                    This app improves your emoji vocabulary so that you
                    can write less and say more! This app was built 
                    originally to help us understand a learning technique called
                    <span className={styles.italic}> Spaced Repetition </span>
                    and how to implement the algorithm.
                </p>

                <div className={styles.divider}/>
                <a href="https://spacedrep-client.herokuapp.com/">
                    <img src="https://github.com/thinkful-ei21/courtney-james-spacedRepitition-client/blob/master/src/images/readmeImgs/emoji-desktop.png?raw=true"/>
                </a>

                <h5 className={styles.header}>Tech Stack</h5>

                <ul className={styles.tech}>
                    <li>HTML5, CSS3, Javascript</li>
                    <li>React & Redux</li>
                    <li>Redux Form</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>JSON Web Token</li>
                    <li>Passport.js</li>
                    <li>Deployed with Heroku</li>
                </ul>

                <div className={styles.demo}>

                    <p>Demo login info:</p>
                    <p>Username: demouser1</p>
                    <p>Password: password123</p>
                </div>

                <a href="https://spacedrep-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={styles.button}>Live App</a>
                <a href="https://github.com/j-stuckey/courtney-james-spacedRepitition-client" target="_blank" rel="noopener noreferrer" className={styles.button}>Github Repo</a>
            </section>

            <section className={styles.card}>
                <header className={styles.header}>
                    <h3 className={styles.title}>Movie Surfer</h3>
                    <h4 className={styles.role}>Full Stack Developer</h4>
                </header>

                <p>
                    This was my first full stack project using React/Redux and Node.
                    The app allows users to search a movie database,
                    and categorize movies and tv shows into lists. I created this
                    project because I had always wondered how movie applications
                    gather and organize data. 
                </p>
                <a href="https://james-moviesurfer-client.herokuapp.com/">
                    <img src="https://github.com/thinkful-ei21/james-capstone-client/raw/master/images/search.png"/>
                </a>

                <h5 className={styles.header}>Tech Stack:</h5>

                <ul className={styles.tech}>
                    <li>HTML5, CSS3, Javascript</li>
                    <li>React and Redux</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>JSON Web Token</li>
                    <li>Passport Authentication</li>
                </ul>

                <div className={styles.demo}>

                    <p>Demo login info:</p>
                    <p>Username: demouser1</p>
                    <p>Password: password123</p>
                </div>

                <a href="https://james-moviesurfer-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={styles.button}>Live App</a>
                <a href="https://github.com/j-stuckey/james-capstone-client" target="_blank" rel="noopener noreferrer" className={styles.button}>Github Repo</a>

            </section>
        </main>
    );
}
