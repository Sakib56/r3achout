import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Features from './Features';
import Pricing from './Pricing';

const Home = () => {
    return (
        <div className='bg-[#F4F7FB]'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;