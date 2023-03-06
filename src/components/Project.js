import React from 'react';

function Project(props) {
    function getRepoLinkTag(link) {
        if(!link) {return;}
        let margin = "60%";
        if(!props.project.deployedLink) { margin="40%"; }
        return (<a href={link} style={{marginRight:margin, marginBottom:'8%'}} target="_blank">
        <img src="./port_img/ghlogo.png" alt="Github Repo" title="Github Repo" />
        </a>);
    }
    function getDeployedLinkTag(link) {
        if(!link) {return;}
        let margin = "20%";
        if(!props.project.repoLink) { margin="40%"; }
        return (<a href={link} style={{marginRight:margin, marginBottom:'8%'}} target="_blank">
        <img src="./port_img/deployedlogo.png" alt="Deployed Site" title="Deployed Site" />
        </a>);
    }

    return(
    <div className="card">
        <figure className="hovereffect">
            <img src={"./port_img/" + props.project.img} alt={props.project.imgAlt} />
            <div className="fc">{props.project.name}<br /><span>{props.project.techs}</span></div>
            {getRepoLinkTag(props.project.repoLink)}
            {getDeployedLinkTag(props.project.deployedLink)}
        </figure>
    </div>
    );
}

export default Project;