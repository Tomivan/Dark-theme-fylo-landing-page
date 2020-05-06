import React from 'react'
import './nav.css'

function Nav() {
    return(
        <>
        <nav className="nav">
        <img src={require('../../assets/images/logo.svg')} alt="The fylo logo" className="logo"/>
            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Sign In</li>
            </ul>
        </nav>
        </>
    )
}

export default Nav