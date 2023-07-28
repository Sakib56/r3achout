import React from 'react';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import fIcons1 from '../assets/fIcons1.png'
import fIcons2 from '../assets/fIcons2.png'
import fIcons3 from '../assets/fIcons3.png'
import fIcons4 from '../assets/fIcons4.png'
import fIcons5 from '../assets/fIcons5.png'
import fIcons6 from '../assets/fIcons6.png'

const Features = () => {
    return (
        <section className='my-28 px-16'>
            <h1 className='text-center text-5xl font-bold'>Our Main <span className='text-[#23B574]'>Features</span> </h1>
            <p className='text-[#556571] text-lg text-center mt-6'>With r3achout.ai's core features, recruiters can revolutionize their email outreach,<br /> streamline their processes, and achieve unparalleled success in attracting and <br /> engaging with the best-fit candidates</p>

            <div className='grid grid-cols-2 mt-20 gap-y-28'>
                <div>
                    <img src={feature1} alt="" />
                </div>
                <div >
                    <div className='flex items-center gap-5'>
                        <img src={fIcons1} alt="" />
                        <h2 className='text-2xl font-bold'>Engage in More Conversations</h2>
                    </div>
                    <p className='text-[#556571] text-lg ml-20 px-5'>Effective communication is key in recruitment. Our web app helps you engage in more conversations with  potential candidates by ensuring your reachouts are compelling and impactful. Stand out from the crowd with personalized messages that offer clear benefits to candidates, increasing their interest and willingness to engage</p>
                </div>
                <div >
                    <div className='flex items-center gap-5'>
                        <img src={fIcons2} alt="" />
                        <h2 className='text-2xl font-bold'>Expand Your Network</h2>
                    </div>
                    <p className='text-[#556571] text-lg ml-20 px-5'>If you're looking to expand your professional network, r3achout.ai is here to assist. We provide the option to
                        craft emails specifically aimed at networking, allowing you to connect with professionals in your field, build
                        relationships, and stay informed about upcoming vacant positions.</p>
                </div>
                <div className='ml-28'>
                    <img src={feature2} alt="" />
                </div>
                <div>
                    <img src={feature1} alt="" />
                </div>
                <div >
                    <div className='flex items-center gap-5'>
                        <img src={fIcons3} alt="" />
                        <h2 className='text-2xl font-bold'>Tailored Interview Questions</h2>
                    </div>
                    <p className='text-[#556571] text-lg ml-20 px-5'>r3achout.ai enables you to cater interview questions to specific positions or technology stacks. Our platform
                        generates job description-relevant assessment and technical questions, ensuring you gather the information you need to make informed hiring decisions</p>
                </div>
                <div >
                    <div className='flex items-center gap-5'>
                        <img src={fIcons4} alt="" />
                        <h2 className='text-2xl font-bold'>Enhance Candidate <br />Assessments and Reputation</h2>
                    </div>
                    <p className='text-[#556571] text-lg ml-20 px-5'>
                        By leveraging r3achout.ai, you can enhance candidate assessments and your professional reputation. Our
                        platform helps you ask high-quality questions, ensuring you attract top-tier candidates to your talent pool.
                        Elevate your recruitment process and build a reputation for excellence.</p>
                </div>
                <div className='ml-28'>
                    <img src={feature2} alt="" />
                </div>
                <div>
                    <img src={feature1} alt="" />
                </div>
                <div >
                    <div className='flex items-center gap-5'>
                        <img src={fIcons5} alt="" />
                        <h2 className='text-2xl font-bold'>Analyze Recruitment Metrics and <br /> Expert Advice</h2>
                    </div>
                    <p className='text-[#556571] text-lg ml-20 px-5'>
                        Gain valuable insights into your recruitment efforts with our comprehensive metric analysis. r3achout.ai crunches decades of recruitment experience into a sophisticated algorithm, providing you with expert advice on what activities to prioritize next. Optimize your strategies and maximize your recruitment success.</p>
                </div>
                <div >
                    <div className='flex items-center gap-5'>
                        <img src={fIcons6} alt="" />
                        <h2 className='text-2xl font-bold'>Generate Candidate Personas</h2>
                    </div>
                    <p className='text-[#556571] text-lg ml-20 px-5'>
                        Our web app offers a powerful feature that analyzes job descriptions and generates candidate personas. With
                        r3achout.ai, you can effortlessly create profiles that best describe your ideal candidates, facilitating a more
                        targeted recruitment approach.</p>
                </div>
                <div className='ml-28'>
                    <img src={feature2} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Features;