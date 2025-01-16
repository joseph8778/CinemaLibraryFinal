import React, { useState } from 'react';

const FooterDirectLinks = ({type}) => {
    const linkData = {
        Security: [
            'Privacy Policy',
            'Terms of use',
            'Cookie Policy',
            'Cookie Settings',
        ],

        Company: [
            'About Us', 
            'Careers', 
            'Contact'
        ],

        Resources: [
            'Staff',
            'API Ref',
            'Blog',
            'Community'
        ],

        Partners: [
            'Partner Program', 
            'Integrations', 
            'Affiliate Program'
        ]
    }


    return (
        <div className="footer__direct-links">
        <div className="footer__links-wrapper">
            <h1 className='footer__links-title'>
                 Useful Links
            </h1>
            <div className="footer__links">
                <a href="#" className='footer__link'>Privacy Policy</a>
                <a href="#" className='footer__link'>Terms of use</a>
                <a href="#" className='footer__link'>Cookie Policy</a>
                <a href="#" className='footer__link'>Cookie Settings</a>
            </div>
    </div>
</div>
    );
}

export default FooterDirectLinks;
