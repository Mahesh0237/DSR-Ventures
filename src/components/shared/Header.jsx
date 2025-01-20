import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import { useWindowScroll } from '@mantine/hooks';
import { Drawer, Group } from '@mantine/core';
import Drawernav from './Drawernav';

function Header() {
    const [drawer, setDrawer] = useState(false)
    const openDrawer = () => {
        setDrawer(true)
    }
    const closeDrawer = () => {
        setDrawer(false)
    }
    return (
        <header className="minimized" >
            <div className="section-wrapper">
                <div className="header-wrapper">
                    <div className="site-logo">
                            <a href="/" rel="home">
                                <img src={logo} width="160px" height="60px" />
                            </a>
                    </div>
                    <nav className="main-navigation">
                        <div className="menu-main-menu-container">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/aboutus">About DSR</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/contactus">Contact Us</a></li>
                            </ul>
                        </div>
                    </nav>
                    <button className="hamburger hamburger--spring" type="button" onClick={openDrawer}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <Drawer
                opened={drawer}
                onClose={closeDrawer}
                zIndex={99999}
                size="xs"
                withCloseButton={false}
            >
                <Drawernav />
            </Drawer>
        </header>
    )
}

export default Header