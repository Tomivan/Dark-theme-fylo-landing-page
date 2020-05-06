import React from 'react';
import './productive.css'
function Productive() {
    return(
    <>
    <div className="productive">
        <img src={require('../../assets/images/illustration-stay-productive.png')} alt="" className="stay-productive"/>
         <h1>Stay productive, wherever you are</h1>
         <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
            storage needs.</p>
         <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
            attachments required.</p>
        <a href=""> See how Fylo works</a> <img src={require('../../assets/images/icon-arrow.svg')} alt="" className="arrow"/>  
    
    </div>
    </>
    )
}

export default Productive