import React from 'react';

// export about page
export default function About() {
    return (
        <>
            <div className='about'>
                <h2>About Me</h2>
                <img src={require("../../assets/avatar-img.png")} alt="David L avatar" className='avatar' />
                <p className='content'>
                    I am currently attending a coding boot camp through the University of Oregon in Full Stack Web Development. My goal is to become a web developer once I am finished. I have a diverse background in media production, career services, recruiting, and sales. I am looking to apply my creativity and motivation in pursuit of this new career.
                </p>
                <p className='content'>
                    My interests include astronomy, mycology, film production, and board games. I enjoy playing and creating board games in my free time. I also love watching movies.
                </p>
            </div>
            {/* technology icons */}
            <div className='technologies'>
                <h3>Core Proficiencies</h3>
                <div className='tooltip'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html logo' />
                    <span className='tooltiptext'>HTML</span>
                </div>
                <div className='tooltip'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css logo' />
                    <span className='tooltiptext'>CSS</span>
                </div>
                <div className='tooltip'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='javascript logo' />
                    <span className='tooltiptext'>JavaScript</span>
                </div>
                <div className='tooltip'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt='bootstrap logo' />
                    <span className='tooltiptext'>Bootstrap</span>
                </div>
                <div className='tooltip'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='mongodb logo' />
                    <span className='tooltiptext'>MongoDB</span>
                </div>
                <div className='tooltip'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt='express logo' />
                    <span className='tooltiptext'>Express.js</span>
                </div>
                <div className='tooltip'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react logo' />
                    <span className='tooltiptext'>React</span>
                </div>
                <div className='tooltip'>
                    <span className='tooltiptext'>Node.js</span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='node.js logo' />
                </div>
            </div>
        </>
    );
}
