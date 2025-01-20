import React from 'react'
import logo from '../../assets/logo.jpg'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import googleplus from '../../assets/googleplus.png'
import { Group } from '@mantine/core'
function Footer() {
    return (
        // <footer className="ltn__footer-area  ">
        //     <div className="footer-top-area  section-bg-2 plr--5">
        //         <div className="container-fluid">
        //             <div className="row">
        //                 <div className="col-xl-3 col-md-6 col-sm-6 col-12">
        //                     <div className="footer-widget footer-about-widget">
        //                         <div className="footer-logo">
        //                             <div className="site-logo">
        //                                 <img src={logo} alt="Logo" />
        //                             </div>
        //                         </div>
        //                         <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
        //                         <div className="footer-address">
        //                             <ul>
        //                                 <li>
        //                                     <div className="footer-address-icon">
        //                                         <i className="icon-placeholder"></i>
        //                                     </div>
        //                                     <div className="footer-address-info">
        //                                         <p>Brooklyn, New York, United States</p>
        //                                     </div>
        //                                 </li>
        //                                 <li>
        //                                     <div className="footer-address-icon">
        //                                         <i className="icon-call"></i>
        //                                     </div>
        //                                     <div className="footer-address-info">
        //                                         <p><a href="tel:+0123-456789">+0123-456789</a></p>
        //                                     </div>
        //                                 </li>
        //                                 <li>
        //                                     <div className="footer-address-icon">
        //                                         <i className="icon-mail"></i>
        //                                     </div>
        //                                     <div className="footer-address-info">
        //                                         <p><a href="mailto:example@example.com">example@example.com</a></p>
        //                                     </div>
        //                                 </li>
        //                             </ul>
        //                         </div>
        //                         <div className="ltn__social-media mt-20">
        //                             <ul>
        //                                 <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
        //                                 <li><a href="#" title="Youtube"><i className="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-2 col-md-6 col-sm-6 col-12">
        //                     <div className="footer-widget footer-menu-widget clearfix">
        //                         <h4 className="footer-title">Company</h4>
        //                         <div className="footer-menu">
        //                             <ul>
        //                                 <li><a href="#">About</a></li>
        //                                 <li><a href="#">Blog</a></li>
        //                                 <li><a href="#">All Products</a></li>
        //                                 <li><a href="#">Locations Map</a></li>
        //                                 <li><a href="#">FAQ</a></li>
        //                                 <li><a href="#">Contact us</a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-2 col-md-6 col-sm-6 col-12">
        //                     <div className="footer-widget footer-menu-widget clearfix">
        //                         <h4 className="footer-title">Services</h4>
        //                         <div className="footer-menu">
        //                             <ul>
        //                                 <li><a href="#">Order tracking</a></li>
        //                                 <li><a href="#">Wish List</a></li>
        //                                 <li><a href="#">Login</a></li>
        //                                 <li><a href="#">My account</a></li>
        //                                 <li><a href="#">Terms & Conditions</a></li>
        //                                 <li><a href="#">Promotional Offers</a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-2 col-md-6 col-sm-6 col-12">
        //                     <div className="footer-widget footer-menu-widget clearfix">
        //                         <h4 className="footer-title">Customer Care</h4>
        //                         <div className="footer-menu">
        //                             <ul>
        //                                 <li><a href="#">Login</a></li>
        //                                 <li><a href="#">My account</a></li>
        //                                 <li><a href="#">Wish List</a></li>
        //                                 <li><a href="#">Order tracking</a></li>
        //                                 <li><a href="#">FAQ</a></li>
        //                                 <li><a href="#">Contact us</a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-3 col-md-6 col-sm-12 col-12">
        //                     <div className="footer-widget footer-newsletter-widget">
        //                         <h4 className="footer-title">Newsletter</h4>
        //                         <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
        //                         <div className="footer-newsletter">
        //                             <form action="#">
        //                                 <input type="email" name="email" placeholder="Email*" />
        //                                 <div className="btn-wrapper">
        //                                     <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow"></i></button>
        //                                 </div>
        //                             </form>
        //                         </div>
        //                         <h5 className="mt-30">We Accept</h5>
        //                         <img src={payment} alt="Payment Image" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
        //         <div className="container-fluid ltn__border-top-2">
        //             <div className="row">
        //                 <div className="col-md-6 col-12">
        //                     <div className="ltn__copyright-design clearfix">
        //                         <p>All Rights Reserved @ DSR VENTURE <span className="current-year"></span></p>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6 col-12 align-self-center">
        //                     <div className="ltn__copyright-menu text-end">
        //                         <ul>
        //                             <li><a href="#">Terms & Conditions</a></li>
        //                             <li><a href="#">Claim</a></li>
        //                             <li><a href="#">Privacy & Policy</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        <footer className="site-footer">
            <div className="section-wrapper">
                <div className="footer-top-wrapper">
                    <div className="footer-col">
                        <a href="#">
                            <img src={logo} alt="" width="150px" height="60px" />
                        </a>
                    </div>
                    <div className="footer-col links">
                        <div className="link-col">
                            <a href="/">Home</a>
                        </div>
                        <div className="link-col">
                            <a href="/aboutus">About DSR</a>
                        </div>
                        <div className="link-col">
                            <a href="/projectsdetail">Projects</a>
                        </div>
                        <div className="link-col">
                            <a href="/contactus">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-wrapper">
                    <div className="footer-col about">
                        <div className="footer-sub-header footer-about" href="#about-us" data-scroll-to="" data-scroll-offset="-75">About Us</div>
                        <div className="footer-info">
                            <div className="footer-p">Unparalleled Design</div>
                            <div className="footer-p">Expertise</div>
                            <div className="footer-p">Client-Centric Approach</div>
                        </div>
                    </div>
                    <div className="footer-col get-in-touch">
                        <div className="footer-sub-header">Get In Touch</div>
                        <div className="footer-contact-wrapper">
                            <div className="footer-contact-col footer-contact-info">
                                <div className="footer-contact-col-item">
                                    {/* <div className="footer-label">Office</div> */}
                                    <div className="footer-contact">
                                        <a href="#" className="phone-number">+91 8088977779</a>
                                    </div>
                                </div>
                                <div className="footer-contact-col-item">
                                    {/* <div className="footer-label">Email</div> */}
                                    <div className="footer-contact mt-0">
                                        <a href="#" className="email">dsrprojects7@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-contact-col">
                                <div className="footer-label">Address</div>
                                <div className="footer-contact">
                                    <a href="#">24/,3rdCross,Subashnagar,Battarahalli, Virgonagar post, K.R Puram, Bangalore-49, India.</a>
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
                <div className="footer-credit">Designed by <a href="http://incigol.in/" target="_blank">INCIGOL</a></div>
            </div>
        </footer>
    )
}

export default Footer