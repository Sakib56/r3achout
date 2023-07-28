import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Features from './Features';
import Pricing from './Pricing';
import FreeAccountBanner from './FreeAccountBanner';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='bg-[#F4F7FB]'>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='lg:mt-[650px]'>
                <Features></Features>
            </div>
            <Pricing></Pricing>
            <FreeAccountBanner></FreeAccountBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;