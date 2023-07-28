import React from 'react';

const Banner = () => {
    return (
        <div className='text-center bg-[#064B84EB] text-white lg:py-16'>
            <h1 className='text-xl md:text-6xl font-semibold'>Introducing <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6FFFE8] to-[#94FFEE]'>r3achout.ai</span> <br />The Ultimate Recruiter's Assistant
            </h1>
            <p className='text-md md:text-lg my-5'>r3achout.ai is an AI-powered web app SAAS that revolutionizes email crafting for <br /> recruiters, offering comprehensive features to elevate recruitment processes and <br /> stand out from the competition.</p>
            <button className='rounded-s-full rounded-e-full bg-gradient-to-r from-[#23B574] to-[#0d4478] text-white px-8 py-5 font-bold text-lg'>Get Started</button>
        </div>
    );
};

export default Banner;