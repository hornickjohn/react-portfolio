import { findByLabelText } from '@testing-library/react';
import React from 'react';

export default function Portfolio() {
    return (
        <div id='portfolio-area'>
            <div className="card">
                <a href="https://hornickjohn.github.io/public-host-sweeper/" target="_blank">
                    <figure className="hovereffect">
                        <img src="/port_img/sweeper-image.png" alt="Partial screen grab from a game of Minesweeper." />
                        <div className="fc">Minesweeper Plus<br /><span>Unity/C#</span></div>
                    </figure>
                </a>
            </div>
            <div className="card">
                <a href="https://github.com/hornickjohn/quote-game" target="_blank">
                    <figure className="hovereffect">
                        <img src="/port_img/quote-game-image.png" alt="Images of Trump and Kanye." />
                        <div className="fc">Quote Game<br /><span>HTML/CSS/Javascript</span></div>
                    </figure>
                </a>

            </div>
        </div>
    );
}