import React from 'react';

//TODO remove props if unused
function Navigation(props) {
    return (
        <ul id="page-nav">
            <li>
                <a
                    href="#portfolio"
                    onClick={() => props.changePage('Portfolio')}
                    className={props.currentPage === 'Portfolio' ? 'active' : ''}
                >Portfolio</a>
            </li>
            <li>
                <a
                    href="#about"
                    onClick={() => props.changePage('About')}
                    className={props.currentPage === 'About' ? 'active' : ''}
                >About</a>
            </li>
            <li>
                <a
                    href="#contact"
                    onClick={() => props.changePage('Contact')}
                    className={props.currentPage === 'Contact' ? 'active' : ''}
                >Contact</a>
            </li>
            <li>
                <a
                    href="#resume"
                    onClick={() => props.changePage('Resume')}
                    className={props.currentPage === 'Resume' ? 'active' : ''}
                >Resume</a>
            </li>
        </ul>
    );
}

export default Navigation;