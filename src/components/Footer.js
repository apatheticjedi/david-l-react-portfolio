import React from 'react';

export default function Footer() {
    return (
        <footer>
            {/* profile links */}
            <ul>
                <li><a href="https://www.linkedin.com/in/davidlundt/">
                <i className="fa-brands fa-linkedin"></i>
                </a></li>
                <li><a href="https://github.com/apatheticjedi">
                <i className="fa-brands fa-github"></i>
                </a></li>
                <li><a href="https://stackoverflow.com/users/19491645/davidl"><i className="fa-brands fa-stack-overflow"></i></a></li>
                <li><a href="mailto:david.lundt@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
            </ul>

            <div>
                <p>&copy; David Lundt 2022</p>
            </div>
        </footer>
    );
}
