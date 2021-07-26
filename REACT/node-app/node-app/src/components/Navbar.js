import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand ps-2">
            Note App
        </div> 
        <ul className="navbar-nav d-flex">
            <li className="nav-item">
                <NavLink className="nav-link"
                to="/" exact>Главная</NavLink>
                
            </li>
            <li className="nav-item">
                <NavLink className="nav-link"
                to="/about">Информация</NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar