import React, { useState } from 'react';

// export portfolio page
export default function Portfolio() {
    const [projects] = useState([
        {
            name: 'GitInit to Win It',
            link: 'https://blooming-reef-74951.herokuapp.com/', 
            repo: 'https://github.com/frieskevin/board-game-tracker',
            description: "This is a group project done for class. It is a PWA that allows users to track board game scores and comment on other users' board game sessions.",
            languages: 'React, Node.js, HTML, CSS, JavaScript, MongoDB'
        },
        {
            name: 'Xdream',
            link: 'https://nameless-falls-05978.herokuapp.com/',
            repo: 'https://github.com/llacourciere/Xdream',
            description: 'This is a group project done for class. It is an online dream journal that allows users to create public or private dream notes.',
            languages: 'JavaScript, HTML, CSS, Node.js, Handlebars'
        },
        {
            name: 'GetFlix and Chill',
            link: 'https://apatheticjedi.github.io/get-flix-and-chill/',
            repo: 'https://github.com/apatheticjedi/get-flix-and-chill',
            description: 'This is a group project done for class. It allows users to get a randomly generated movie title and cannabis strain pulled from 2 different APIs',
            languages: 'HTML, CSS, JavaScript, jQuery'
        },
        {
            name: 'Tech Blog',
            link: 'https://pure-meadow-28605.herokuapp.com/',
            repo: 'https://github.com/apatheticjedi/tech-blog-site',
            description: 'This is an example tech blog that allows a user to create a profile, login, post content, and comment on posts.',
            languages: 'JavaScript, HTML, CSS, Node.js'
        },
        {
            name: 'Weather Dashboard App',
            link: 'https://apatheticjedi.github.io/weather-dashboard-app/',
            repo: 'https://github.com/apatheticjedi/weather-dashboard-app',
            description: 'This is a weather application that allows a user to enter a city name to get the current and 5-day forecast of weather.',
            languages: 'HTML, CSS, JavaScript, jQuery'
        },
        {
            name: 'Social Network API Example',
            link: 'https://www.youtube.com/watch?v=U8jEF9ueE-0&ab_channel=David',
            repo: 'https://github.com/apatheticjedi/social-network-api',
            description: "This is an API back-end for a social network application that allows users to login, create a friend list of other users, create thoughts, and react to friends' thoughts.",
            languages: 'JavaScript, Node.js, MongoDB'
        },
        {
            name: 'Time Bandits Board Game Website',
            link: 'https://apatheticjedi.github.io/boardgame-website-time-bandits/',
            repo: 'https://github.com/apatheticjedi/boardgame-website-time-bandits',
            description: 'This is the first website I designed as a final project for a web design class. It is for a fictional boardgame that includes an animated slideshow and a contact page.',
            languages: 'HTML, CSS, JavaScript'
        }
    ])
    // create project divs w/ links from [projects]
    return (
        <>
            <h2>Portfolio</h2>
            <div className='container'>
            {projects.map((project, i) => (
                <div
                    className="projects"
                    key={i}
                >
                    <img src={require(`../../assets/projects/${i}.png`)} alt={project.name} />
                    <div className="overlay">
                        <div className="project-title">
                            <p>
                                <strong>{project.name}</strong><br /><br />{project.languages}
                            </p>
                            <p>{project.description}</p>
                            <a href={project.repo} id="github-link" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a><a href={project.link} target="_blank" rel="noreferrer"><i className="fa-solid fa-link" id="project-link"></i></a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
}
