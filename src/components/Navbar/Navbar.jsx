import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); //This state variable (isMenuOpen) keeps track of whether the mobile menu is open or closed.//
    //Initially, it's set to "false" (closed).//

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    }; //This function toggles the state of isMenuOpen whenever the hamburger icon is clicked.//


    const closeMenu = () => {
        setIsMenuOpen(false); //This function ensures that when a user clicks on a menu item, the menu closes//
    };

    return (
        <nav className={styles.navbar}> {/*The main container for the navbar. */}
            <a className={styles.title} href="/">Portfolio</a> {/*The site title/logo */}
            <div className={styles.menuItems}> {/*Wraps the hamburger icon and menu items. */}
                <FontAwesomeIcon icon={faBars} className={styles.icon} onClick={toggleMenu} /> {/* Toggles the menu open/close. */}
                <ul className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>

                    {/*Each <li> contains an anchor <a> link to different sections of the webpage. */}
                    {/*ensures the menu closes when a link is clicked. */}
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};