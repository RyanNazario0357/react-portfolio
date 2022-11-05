import React from 'react';

const info = {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
}

const titleStyle = {
    backgroundColor: 'red',
    padding: '10px'
}

const linkStyle = {
    color: 'red'
}
function ProjectCards(props) {
    return (
        <div className="card">
            {/* <div className="img-container">
                <img class="projectImage" alt={props.name} src={props.image}/>
            </div> */}

            <div className="cardContent">
                <h2 className="projectTitle" id="projectTitle" style={titleStyle}>{props.name}</h2>

                <div className="img-container">
                <img class="projectImage" alt={props.name} src={props.image}/>
                </div>

                <p className="projectInfo" id="projectInfo" style={info}>
                <button class="btn btn-dark"><a href={props.deploy} style={linkStyle}>Deployed Application</a></button>
                <br></br>
                <button class="btn btn-dark"><a href={props.github} style={linkStyle}>Application Repository</a></button>
                </p>
                <p className="technologies">
                    <h4>Techologies Used: </h4>
                    {props.technologies}
                </p>
            </div>
        </div>
    )
}

export default ProjectCards;