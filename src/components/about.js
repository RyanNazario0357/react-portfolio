import React from 'react';

const imgStyle = {
    padding: '20px'
}

const linkStyle = {
    color: 'red'
}

function About() {
    return(
        <div class="jumbotron">
  <h1 class="display-4">About Me</h1>
  <img class="headshot" src="https://github.com/RyanNazario0357/react-portfolio/raw/main/public/images/headshot.jpg" alt="headshot" style={imgStyle}></img>
  <p class="lead">Dedicated Entry level developer. Actively a Keiser University student with an asssociates in MIS and pursuing my bachelors.</p>
  <hr class="my-4"></hr>
  <p></p>
  <p class="lead">
  <button type="button" class="btn btn-dark"><a href="https://github.com/RyanNazario0357/react-portfolio/raw/main/public/images/RyanNazarioResume.jpg
           " style={linkStyle}>View Full Resume</a></button>
  </p>
</div>
    )
}

export default About;