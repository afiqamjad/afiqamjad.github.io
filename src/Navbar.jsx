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
                        <a href='/about' className='link'>About</a>
                    </li>
                    <li>
                        <a href='/projects' className='link'>Projects</a>
                    </li>
                    <li>
                        <a href='/contact' className='link'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar