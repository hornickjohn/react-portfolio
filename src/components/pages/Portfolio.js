import { findByLabelText } from '@testing-library/react';
import React from 'react';

export default function Portfolio() {
    return (
        <div id='portfolio-area'>
            <div className="card">
                <figure className="hovereffect">
                    <img src="/port_img/sweeper-image.png" alt="Partial screen grab from a game of Minesweeper." />
                    <div className="fc">Minesweeper Plus<br /><span>Unity/C#</span></div>
                    <a href="https://hornickjohn.github.io/public-host-sweeper" style={{marginRight:'40%', marginBottom:'8%'}} target="_blank">
                        <img src="/port_img/deployedlogo.png" alt="Deployed Site" title="Deployed Site" />
                    </a>
                </figure>
            </div>
            <div className="card">
                <figure className="hovereffect">
                    <img src="/port_img/quote-game-image.png" alt="Images of Trump and Kanye." />
                    <div className="fc">Quote Game<br /><span>HTML/CSS/Javascript</span></div>
                    <a href="https://github.com/hornickjohn/quote-game" style={{marginRight:'60%', marginBottom:'8%'}} target="_blank">
                        <img src="/port_img/ghlogo.png" alt="Github Repo" title="Github Repo" />
                    </a>
                    <a href="https://hornickjohn.github.io/quote-game" style={{marginRight:'20%', marginBottom:'8%'}} target="_blank">
                        <img src="/port_img/deployedlogo.png" alt="Deployed Site" title="Deployed Site" />
                    </a>
                </figure>
            </div>
        </div>
    );
}