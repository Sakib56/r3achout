import React from 'react';

const FreeAccountBanner = () => {
    return (
        <div className='max-w-6xl mx-5 md:mx-auto bg-[#0C579B] mt-[1950px] md:mt-[420px] rounded-lg text-center mb-10 md:mb-20'>
            <div className='py-12 md:py-20 text-white'>
                <h1 className='text-xl md:text-5xl font-bold'>Get a free account today</h1>
                <p className='text-[#D6E5F1] text-lg mt-2 md:mt-5'>No credit card required</p>
                <button className='btn btn-outline rounded-s-full rounded-e-full text-white bg-[#23B574] px-20 py-2 mt-5'>Get Started</button>
            </div>
        </div>
    );
};

export default FreeAccountBanner;