import React from 'react';
import logo from '../assets/logo.svg'
import FooterDirectLinks from './FooterDirectLinks';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="footer__wrapper">
                    <div className="footer__top--wrapper">

                    <img src={logo} className='footer_logo' alt="" />
                           
                <FooterDirectLinks type='Company'/>
                <FooterDirectLinks type='Security'/>
                <FooterDirectLinks type='Partners'/>
                <FooterDirectLinks type='Resources'/>

                <div className="footer__signup--wrapper">
                    <h1 className='NLTitle'>Newsletter Signup</h1>

                    <input className='NLBox NLName' type="text" />
                    <input className='NLBox NLEmail' type="email" />
                    <button className='NLButton'>Sign up</button>
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
