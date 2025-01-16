import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="footer__wrapper">
                    <div className="footer__top--wrapper">

                    <img src={logo} className='footer_logo' alt="" />
                           
                            <div className="footer__direct-links">
                                <div className="footer__links-wrapper">
                                    <h1 className='footer__links-title'>Useful Links</h1>
                                    <div className="footer__links">
                                        <a href="#" className='footer__link'>Privacy Policy</a>
                                        <a href="#" className='footer__link'>Terms of use</a>
                                        <a href="#" className='footer__link'>Cookie Policy</a>
                                        <a href="#" className='footer__link'>Cookie Settings</a>
                                    </div>
                            </div>
                    </div>
                </div>

                    <div className="footer__bottom--wrapper">
                            <h1>
                            © Cinema Library - 2025
                            </h1>

                            <div className="footer_socials">
                                <div className="social-icons_wrapper">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-tiktok"></i>
                                </div>
                            </div>
                    </div>
                       
                </div>
            </div>
        </footer>
    );
}

export default Footer;
