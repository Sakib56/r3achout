import React from 'react';
import logo from '../assets/footerLogo.png'

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-white py-7 flex justify-between">
            <div className="items-center grid-flow-col">
                <img src={logo} alt="" />

            </div>
            <div className='flex gap-5 text-lg'>
                <a href="">Product</a>
                <a href="">Benefit</a>
                <a href="">Pricing</a>
                <a href="">Terms & condition</a>
            </div>
            <div>
                <p className='text-xl'>All right reserved <span className='text-[#064B84EB]'>r3achout.ai</span></p>
            </div>

        </footer>
    );
};

export default Footer;