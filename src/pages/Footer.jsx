import React from 'react';
import logo from '../assets/footerLogo.png'

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-white md:py-7 grid-cols-2 lg:grid-cols-3 ">
            
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-5 text-md md:text-lg '>
                    <a href="">Product</a>
                    <a href="">Benefit</a>
                    <a href="">Pricing</a>
                    <a href="">Terms&condition</a>
             
            </div>
            <div className='lg:ml-28 -mt-10 md:-mt-0'>
                <p className='text-lg md:text-xl'>All right reserved <span className='text-[#064B84EB]'>r3achout.ai</span></p>
            </div>

        </footer>
    );
};

export default Footer;