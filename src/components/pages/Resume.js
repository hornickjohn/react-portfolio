import React from 'react';

export default function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <a href="/port_file/sampleresume.docx" download><button>Download Full Version</button></a>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>mySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
        </div>
    );
}