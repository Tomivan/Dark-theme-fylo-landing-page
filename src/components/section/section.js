import React from 'react';
import './section.css'

function Section() {
    return(
        <div className="sections">
            <img src={require('../../assets/images/icon-access-anywhere.svg')} alt="" className="icon"/>
            <div className="section">
                <h2>Access your files, anywhere</h2>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your 
                    files follow you everywhere.</p>
            </div>
            <img src={require('../../assets/images/icon-security.svg')} alt="" className="icon"/>
            <div className="section">
                <h2> Security you can trust</h2>
                <p>2-factor authentication and user-controlled encryption are just a couple of the security 
                   features we allow to help secure your files.</p>
            </div>
            <img src={require('../../assets/images/icon-collaboration.svg')} alt="" className="icon"/>
            <div className="section">
                <h2>Real-time collaboration</h2>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. 
                   No email attachments required.</p>
            </div>
            <img src={require('../../assets/images/icon-any-file.svg')} alt="" className="icon"/>
            <div className="section">
                <h2>Store any type of file</h2>
                <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                   file types to be securely stored and shared.</p>
            </div>
        </div>
    )
}

export default Section