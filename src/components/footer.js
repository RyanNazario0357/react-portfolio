import React from 'react'; 

const imgStyle = {
    width: '75px',
    height: '75px',
    padding: '10px'
}

const copyStyle = {
    padding: '10px',
    fontWeight: 'bold'
}

function Footer() {
    return(
        <div class="footer" id="footer">
            <a href="https://www.linkedin.com/in/ryan-nazario-garcia-b14637216/">
                <img src="https://github.com/RyanNazario0357/react-portfolio/raw/main/public/images/linkedin.jpg" 
                alt="LinkedIn" 
                style={imgStyle}></img></a>
            <p style={copyStyle}>© RYAN NAZARIO 2022</p>
            <a href="https://github.com/RyanNazario0357?tab=repositories">
                <img src="https://github.com/RyanNazario0357/react-portfolio/raw/main/public/images/github.jpg" 
                alt="Github" 
                style={imgStyle}></img></a>
        </div>
    )
}

export default Footer;