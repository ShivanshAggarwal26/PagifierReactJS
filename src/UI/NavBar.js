import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const handleToggle = () => {
        setNavBarOpen(!navBarOpen);
    };

    const menuNavClasses = navBarOpen ? 'menuNav-showMenu' : 'menuNav';

    return (
        <div className='navBar'>
            <div className={menuNavClasses}>
                <NavLink to='/student'>
                    Student Table
                </NavLink>
                <NavLink to='/employee'>
                    Employee Table
                </NavLink>
            </div>
            <a className='icon' onClick={handleToggle}>
                <i className='fa fa-bars'></i>
            </a>
        </div>
    )
}

export default NavBar