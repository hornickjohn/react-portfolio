import React from 'react';
import ResumeDoc from '../../port_file/JohnHornickResume.docx';

export default function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <a href={ResumeDoc} download><button>Download Full Version</button></a>
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
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
            <h3>Other</h3>
            <ul>
                <li>C#</li>
                <li>.NET</li>
                <li>Java</li>
                <li>Unity</li>
                <li>git</li>
            </ul>
        </div>
    );
}