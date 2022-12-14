import React from 'react';

// export resume page
export default function Resume() {
    return (
        <>
                <h2>My Resume</h2>
            <div className='resume-div'>
                {/* resume link */}
                <button>
                    <a href='https://docs.google.com/document/d/1O8CMEfeUqQn1rI-o2eXsUCifCOsN7H8jIOcjnHS0MH4/edit?usp=sharing' id='resume' target="_blank" rel="noreferrer">Click here to view my resume</a>
                </button>
                <ul>
                    <li>
                        Currently studying full stack web development through a coding bootcamp
                    </li>
                    <li>
                        Skilled in writing HTML, JavaScript, and CSS to create Web Applications in full MERN stack development
                    </li>
                    <li>
                        Familiar with both Windows and Mac OS X operating systems and software including Visual Studio Code, Adobe Photoshop, Animate,  Dreamweaver, Microsoft Office (Word, Excel, PowerPoint, and Outlook), Insomnia, MySQL Workbench, and MS Dynamics CRM
                    </li>
                    <li>
                        Experience utilizing multiple social media platforms for marketing purposes, including LinkedIn, Twitter, Facebook, and YouTube
                    </li>
                    <li>
                        Able to provide constructive input on how to effectively manage online resources and streamline operating procedures; excellent communication skills and ability to collaborate with multiple departments
                    </li>
                    <li>
                        Fast learner who enjoys taking on new challenges and learning new skills
                    </li>
                </ul>
            </div>
        </>
    );
}