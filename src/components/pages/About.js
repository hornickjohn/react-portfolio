import React from 'react';
import Mepic from '../../port_img/mepic.jpg';

export default function About() {
    return (
        <div className="center-content">
            <div id="about-area">
                <h2>
                    About Me
                </h2>
                <img src={Mepic} alt="" />
                <p>
                    I have been programming for about as long as I can remember! In the early days I made silly little Windows Forms Applications in C# (when the .NET framework was fairly new!), using buttons to format text in labels. As time wore on and I learned about data structures, sorting algorithms, and eventually went on to take multiple CS courses in college. Most recently, I dove into a web development bootcamp to refresh, modernize, and most importantly continue improving my knowledge and practices.
                </p>
                <p>
                    My aspiration is to leverage this lifelong familiarity with technical thinking and my affinity for soaking up new information/skills to make an impact in the world of development. I live for the breaking down and creative solving of problems.
                </p>
            </div>
        </div>
    );
}