import React from 'react';
import Project from '../Project';

export default function Portfolio() {
    const projects = [
        {
            name:'Minesweeper Plus',
            techs:'Unity/C#',
            img:'sweeper-image.png',
            imgAlt:'Partial screen grab from a game of Minesweeper.',
            deployedLink:'https://hornickjohn.github.io/public-host-sweeper',
            key:1
        },
        {
            name:'Quote Game',
            techs:'HTML/CSS/JavaScript',
            img:'quote-game-image.png',
            imgAlt:'Donald Trump and Kanye West.',
            deployedLink:'https://hornickjohn.github.io/quote-game',
            repoLink:'https://github.com/hornickjohn/quote-game',
            key:2
        },
        {
            name:'Review World',
            techs:'Express/Node/Sequelize',
            img:'review-world-image.png',
            imgAlt:'Review stars.',
            repoLink:'https://github.com/hornickjohn/review-world',
            key:3
        }
    ];

    return (
        <div id='portfolio-area'>
            {projects.map(project => <Project key={project.key} project={project}/>)}
        </div>
    );
}