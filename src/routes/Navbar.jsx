import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <a href='/' className='logo'>Afiq</a>
            </div>
            <div className='navbar-right'>
                <ul className='links'>
                    <li>
                        <button onClick={() => {document.getElementById('about').scrollIntoView({behavior: "smooth"}), window.history.pushState({},"","/#about")}} className='link'>About</button>
                    </li>
                    <li>
                        <button onClick={() => {document.getElementById('projects').scrollIntoView({behavior: "smooth"}), window.history.pushState({},"","/#projects")}} className='link'>Projects</button>
                    </li>
                    <li>
                        <button onClick={() => {document.getElementById('contact').scrollIntoView({behavior: "smooth"}), window.history.pushState({},"","/#contact")}} className='link'>Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar