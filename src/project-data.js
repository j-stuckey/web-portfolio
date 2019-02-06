const movieSurfer = {};

const projects = {
	hearbuds: {
		title: 'Hearbuds',
		img: {
			src:
				'https://github.com/j-stuckey/hearbuds-client/raw/master/screenshots/desktop-dashboard.png',
			alt: 'Hearbuds'
		},
		description: `Hearbuds allows users to find concerts in their area and
						find people to go with. The app is made for people who love
						live music and want to stay connected to the music scene in
						their area. We built this application because we love music
						and wanted to have an ear to the music scene and make it
						easier for others. Deployed on Firebase`,
		links: {
			live: 'https://hearbuds-client.firebaseapp.com/',
			client: 'https://github.com/j-stuckey/hearbuds-client',
			server: 'https://github.com/thinkful-ei21/hearbuds-server'
		},
		// techStack: ['HTML5', 'CSS3']
		techStack: `HTML5, CSS3, React, Redux, Node.js, Express, MongoDB, GraphQL, JSON Web Token`
	},
	learnEmojis: {
		title: 'Learn Emojis',
		img: {
			src: 'https://github.com/thinkful-ei21/courtney-james-spacedRepitition-client/blob/master/src/images/readmeImgs/emoji-desktop.png?raw=true',
			alt: 'Learn Emojis'
		},
		description: `Can't find the right words? Use Emojis instead! This app 
					improves your emoji vocabulary so that you can write less
					and say more! This app was built originally to help us
					understand a learning technique called
					Spaced Repetition and how to implement the algorithm.`,
		links: {
			live: 'https://learn-emojis.herokuapp.com/',
			client: 'https://github.com/j-stuckey/courtney-james-spacedRepitition-client',
			server: 'https://github.com/thinkful-ei21/courtney-james-spacedRepetition-server'
		},
		techStack: `HTML5, CSS3, React, Redux, Node.js, Express, MongoDB`
	},
	movieSurfer: {
		title: 'Movie Surfer',
		img: {
			src: 'https://github.com/thinkful-ei21/james-capstone-client/raw/master/images/search.png',
			alt: 'Movie Surfer'
		},
		description: `Can't find the right words? Use Emojis instead! This app 
					improves your emoji vocabulary so that you can write less
					and say more! This app was built originally to help us
					understand a learning technique called
					Spaced Repetition and how to implement the algorithm.`,
		links: {
			live: 'https://james-moviesurfer-client.herokuapp.com/',
			client: 'https://github.com/j-stuckey/james-capstone-client',
			server: 'https://github.com/thinkful-ei21/james-capstone-server'
		}

	}
};

module.exports = projects;
