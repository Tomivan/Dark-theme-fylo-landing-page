import React from 'react';
import './heading.css';

function Heading() {
    return(
        <div className="Heading">
         <img src={require('../../assets/images/illustration-intro.png')} alt="" className="heading-image"/>
         <h1> All your files in one secure location, accessible anywhere.</h1>
         <p>Fylo stores all your most important files in one secure location. Access them wherever 
         you need, share and collaborate with friends family, and co-workers.</p>
         <button>Get Started</button>
       </div>
    )
}

export default Heading