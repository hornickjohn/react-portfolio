import React from 'react';
import GHLogo from '../port_img/ghlogo.png';
import DeployedLogo from '../port_img/deployedlogo.png';

function Project(props) {
    function getRepoLinkTag(link) {
        if(!link) {return;}
        let margin = "60%";
        if(!props.project.deployedLink) { margin="40%"; }
        return (<a href={link} style={{marginRight:margin, marginBottom:'8%'}} target="_blank">
        <img src={GHLogo} alt="Github Repo" title="Github Repo" />
        </a>);
    }
    function getDeployedLinkTag(link) {
        if(!link) {return;}
        let margin = "20%";
        if(!props.project.repoLink) { margin="40%"; }
        return (<a href={link} style={{marginRight:margin, marginBottom:'8%'}} target="_blank">
        <img src={DeployedLogo} alt="Deployed Product" title="Deployed Product" />
        </a>);
    }

    return(
    <div className="card">
        <figure className="hovereffect">
            <img src={props.project.img} alt={props.project.imgAlt} />
            <div className="fc">{props.project.name}<br /><span>{props.project.techs}</span><br /><span>{props.project.year}</span></div>
            {getRepoLinkTag(props.project.repoLink)}
            {getDeployedLinkTag(props.project.deployedLink)}
        </figure>
    </div>
    );
}

export default Project;