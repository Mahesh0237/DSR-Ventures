import React from 'react'
import logo from '../../assets/logo.jpg'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import googleplus from '../../assets/googleplus.png'
import { Group } from '@mantine/core'
import footerbg from '../../assets/footerbg.jpeg'
function Footer() {
    return (
        // <footer className="site-footer" style={{ background: "#0b9444" }}>
        <footer className="site-footer"
            style={{
                backgroundImage: `linear-gradient(rgba(11, 148, 68, 0.8), rgba(11, 148, 68, 0.8)), url(${footerbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
            <div className="section-wrapper">
                <div className="footer-top-wrapper">
                    <div className="footer-col">
                        <a href="#">
                            <img src={logo} alt="" width="150px" height="60px" />
                        </a>
                    </div>
                    <div className="footer-col links">
                        <div className="link-col">
                            <a href="/" className='text-white'>Home</a>
                        </div>
                        <div className="link-col">
                            <a href="/aboutus" className='text-white'>About DSR</a>
                        </div>
                        <div className="link-col">
                            <a href="/projects" className='text-white'>Projects</a>
                        </div>
                        <div className="link-col">
                            <a href="/contactus" className='text-white'>Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-wrapper">
                    <div className="footer-col about">
                        <div className="footer-sub-header footer-about text-white" href="/aboutus">About Us</div>
                        <div className="footer-info">
                            <div className="footer-p text-white">Unparalleled Design</div>
                            <div className="footer-p text-white">Expertise</div>
                            <div className="footer-p text-white">Client-Centric Approach</div>
                        </div>
                    </div>
                    <div className="footer-col get-in-touch">
                        <div className="footer-contact-wrapper">
                            <div className="footer-contact-col">
                                <div className="footer-label text-white" style={{ fontSize: "17px" }}>Projects</div>
                                <div className="footer-contact" style={{ display: "flex", flexDirection: "column" }}>
                                    <a href="/satvikamogaplots" className='text-white' style={{ fontSize: "16px" }}>DSR Sathvik Amogha Plots</a>
                                    <a href="/satvikfortunedetails" className='text-white' style={{ fontSize: "16px" }}>DSR Sathvik Fortune City</a>
                                    <a href="/sathvikfusioncity" className='text-white' style={{ fontSize: "16px" }}>DSR Sathvik Fusion City</a>
                                    <a href="/sathvikdreamcity" className='text-white' style={{ fontSize: "16px" }}>DSR Sathvik Dream City</a>
                                    <a href="#" className='text-white' style={{ fontSize: "16px" }}>DSR Sathvik snow City</a>
                                    <a href="#" className='text-white' style={{ fontSize: "16px" }}>DSR Sathvik golden City</a>
                                    <a href="/sathvikavenue" className='text-white' style={{ fontSize: "16px" }}>Sathvik Avenues</a>
                                    <a href="/preranagreensdetails" className='text-white' style={{ fontSize: "16px" }}>Prerana Greens</a>
                                    <a href="/greenavenuesdetails" className='text-white' style={{ fontSize: "16px" }}>Greenwood Meadows</a>
                                    <a href="#" className='text-white' style={{ fontSize: "16px" }}>Green Avenues</a>
                                    <a href="/sathvikelite" className='text-white' style={{ fontSize: "16px" }}>Sathvik Elite</a>
                                    <a href="/sathviklotusfarm" className='text-white' style={{ fontSize: "16px" }}>Sathvik Lotus Farm</a>
                                </div>
                            </div>
                            <div className="footer-contact-col footer-contact-info">
                                <div className="footer-contact-col-item">
                                    <div className="footer-label text-white">Get in Touch</div>
                                    <div className="footer-contact" style={{ display: "flex", flexDirection: "column" }}>
                                        <a href="#" className="phone-number text-white">+91 8088977779</a>
                                        <a href="#" className="email text-white">dsrprojects7@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-contact-col">
                                <div className="footer-label text-white">Address</div>
                                <div className="footer-contact">
                                    <a href="#" className='text-white'>24/,3rdCross,Subashnagar,Battarahalli, Virgonagar post, K.R Puram, Bangalore-49, India.</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Group justify='center' py={20}>
                    <a href="#" target="_blank">
                        <img src={twitter} />
                    </a>
                    <a href="#" target="_blank">
                        <img src={googleplus} />
                    </a>
                    <a href="#" target="_blank">
                        <img src={facebook} />
                    </a>
                    <a href="#" target="_blank">
                        <img src={linkedin} />
                    </a>
                </Group>
                <div className="footer-credit text-white">Designed by <a href="http://incigol.in/" target="_blank">INCIGOL</a></div>
            </div>
        </footer>
    )
}

export default Footer