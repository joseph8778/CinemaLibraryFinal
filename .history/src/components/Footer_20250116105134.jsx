import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="footer__wrapper">
                    <img src={logo} className='footer_logo' alt="" />
                        
                            </div>
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
            </div>
        </footer>
    );
}

export default Footer;
