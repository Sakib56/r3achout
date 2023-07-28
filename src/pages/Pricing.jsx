import React from 'react';

import PricingCard from '../Components/PricingCard';

const Pricing = () => {
    return (
        <section className='relative'>
            <div className='bg-[#0C579B] h-[750px] text-center lg:pt-28'>
                <h1 className='text-5xl font-bold text-white'>Affordable <span className='text-[#23B574]'> Pricing Plans</span></h1>
                <p className='text-[#E7EEF5] mt-5'> Accessible Pricing for Everyone: Our affordable pricing plans ensure that anyone can <br /> easily purchase and benefit from our services, regardless of budget constraints.</p>
                <div className='text-white font-bold flex justify-center gap-3 mt-5'>
                    <p>Yearly</p>
                    <input type="checkbox" className="toggle toggle-success" checked />
                    <p>Monthly</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-7 absolute top-1/2 max-w-6xl mx-auto'>
                <PricingCard></PricingCard>
            </div>
        </section >
    );
};

export default Pricing;