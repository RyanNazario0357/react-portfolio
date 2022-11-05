import React from 'react';

import portfolio from '../components/portfolio.json'
import ProjectCards from './projects';

// const titleStyle = {
//     backgroundColor: '#595959',
//     padding: '20px',
//     color: '#ff1a1a'
// }
const padding = {
    padding: '10px'
}

const titleStyle = {
    backgroundColor: 'red',
    padding: '20px'
}

function Wrapper(props) {
    return <div className="wrapper" style={padding}>{props.children}</div>
}
function Portfolio () {
    return(
        <section>

            <Wrapper id="project-data">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} technologies={project.technologies}/>
                ))}
            </Wrapper>
        </section>
    )
}

export default Portfolio;