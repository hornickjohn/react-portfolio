import React from 'react';
import Project from '../Project';
import SweeperImage from '../../port_img/sweeper-image.png';
import WeatherImage from '../../port_img/weatherimage.png';
import QuizImage from '../../port_img/quizimage.png';
import SecurityFrontImage from '../../port_img/securitymapfrontimage.png';
import SecurityBackImage from '../../port_img/securitymapbackimage.png';
import SudokuImage from '../../port_img/sudokuimage.png';
import SudokunosImage from '../../port_img/sudokunosimage.png';
import PortfolioImage from '../../port_img/portfolioimage.png';

export default function Portfolio() {
    const projects = [
        {
            name:'Minesweeper Plus',
            techs:'Unity/C#',
            img:SweeperImage,
            imgAlt:'Partial screen grab from a game of Minesweeper.',
            deployedLink:'https://hornickjohn.github.io/public-host-sweeper',
            year:'2018',
            key:1
        },
        {
            name:'Weather Dashboard',
            techs:'HTML/CSS/JavaScript',
            img:WeatherImage,
            imgAlt:'Screenshot from weather dashboard output.',
            deployedLink:'https://hornickjohn.github.io/weather-dashboard/',
            repoLink:'https://github.com/hornickjohn/weather-dashboard',
            year:'2023',
            key:2
        },
        {
            name:'Diablo 2 Quiz',
            techs:'HTML/CSS/JavaScript',
            img:QuizImage,
            imgAlt:'Highscores table from diablo 2 quiz.',
            repoLink:'https://github.com/hornickjohn/diablo-2-quiz',
            deployedLink:'https://hornickjohn.github.io/diablo-2-quiz/',
            year:'2023',
            key:3
        },
        {
            name:'Security Map',
            techs:'React/Azure Maps/Express/SQL',
            img:SecurityFrontImage,
            imgAlt:'Map with pinned data from security map\'s front end client.',
            deployedLink:'https://securitymap.netlify.app/',
            year:'2023',
            key:4
        },
        // {
        //     name:'Security Map (Back)',
        //     techs:'Node/Express/Sequelize',
        //     img:SecurityBackImage,
        //     imgAlt:'Sample incident table data being queried in MySQL shell.',
        //     repoLink:'https://github.com/SidneyBasa/Team12_Project3_Server',
        //     year:'2023',
        //     key:5
        // },
        {
            name:'This Portfolio',
            techs:'React',
            img:PortfolioImage,
            imgAlt:'Image of a folder overlaid with "you are here."',
            repoLink:'https://github.com/hornickjohn/react-portfolio',
            year:'2023',
            key:6
        },
        {
            name:'Sudoku Code',
            techs:'C#/.NET',
            img:SudokuImage,
            imgAlt:'Screenshot of custom interface for filtering through generated sudoku puzzles.',
            repoLink:'https://github.com/hornickjohn/sudoku-code/',
            year:'2015',
            key:7
        },
        {
            name:'Sudokunos',
            techs:'C#/.NET',
            img:SudokunosImage,
            imgAlt:'Screenshot of interface for generating and interacting with custom alternate sudoku puzzles.',
            repoLink:'https://github.com/hornickjohn/sudokunos',
            deployedLink:'https://www.amazon.com/Sudokunos-Fun-Variation-Classic-Sudoku/dp/1523890878/ref=sr_1_1?crid=XDHN36KWOXSQ&qid=1679438675&sprefix=sudokun%2Caps%2C215&sr=8-1',
            year:'2016',
            key:8
        }
    ];

    return (
        <div id='portfolio-area'>
            {projects.map(project => <Project key={project.key} project={project}/>)}
        </div>
    );
}