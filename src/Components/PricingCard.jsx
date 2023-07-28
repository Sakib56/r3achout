import React from 'react';
import pIcons1 from '../assets/pIcons1.png';
import pIcons2 from '../assets/pIcons2.png';
import pIcons3 from '../assets/pIcons3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

const PricingCard = () => {
    return (
        <>
            <div className='shadow-2xl p-8 bg-white'>
                <div className='flex items-center gap-5'>
                    <img src={pIcons3} alt="" />
                    <div>
                        <h1 className='text-4xl font-bold'>Free</h1>
                        <p className='text-xl font-bold'>4000 words / Month</p>
                        <p className='text-green-500'>No Credit card required</p>
                    </div>
                </div>
                <h1 className='my-4'><span className='text-3xl text-[#0C579B] font-bold'>$00</span>/Month</h1>
                <p className='text-lg font-bold mb-3'>What's Included</p>
                <div className='flex items-center gap-5 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Trained AI reachouts for <br />recruiters
                    </p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Cold email</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Conversation starter</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Network expansion</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Unlimited projects</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Search Assistant</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Interview questions</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-gray-400 text-lg' icon={faXmarkCircle} />
                    <p>Metrics Analysis & <br /> recommendations</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-gray-400 text-lg' icon={faXmarkCircle} />
                    <p>Any new features</p>
                </div>

                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-gray-400 text-lg' icon={faXmarkCircle} />
                    <p>Email support</p>
                </div>

                <div className='text-center'>
                    <button className='btn btn-outline rounded-s-full rounded-e-full text-blue-700 w-full px-3 mt-5'>Sign Up for free</button>
                </div>

            </div>
            <div className='shadow-2xl p-8 bg-white'>
                <div className='flex items-center gap-5'>
                    <img src={pIcons3} alt="" />
                    <div>
                        <h1 className='text-4xl font-bold'>Free</h1>
                        <p className='text-xl font-bold'>4000 words / Month</p>
                        <p className='text-green-500'>No Credit card required</p>
                    </div>
                </div>
                <h1 className='my-4'><span className='text-3xl text-[#0C579B] font-bold'>$00</span>/Month</h1>
                <p className='text-lg font-bold mb-3'>What's Included</p>
                <div className='flex items-center gap-5 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Trained AI reachouts for <br />recruiters
                    </p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Cold email</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Conversation starter</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Network expansion</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Unlimited projects</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Search Assistant</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Interview questions</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-gray-400 text-lg' icon={faXmarkCircle} />
                    <p>Metrics Analysis & <br /> recommendations</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-gray-400 text-lg' icon={faXmarkCircle} />
                    <p>Any new features</p>
                </div>

                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-gray-400 text-lg' icon={faXmarkCircle} />
                    <p>Email support</p>
                </div>

                <div className='text-center'>
                    <button className='btn btn-outline rounded-s-full rounded-e-full text-blue-700 w-full px-3 mt-5'>Sign Up for free</button>
                </div>

            </div>
            <div className='shadow-2xl p-8 bg-white'>
                <div className='flex items-center gap-5'>
                    <img src={pIcons3} alt="" />
                    <div>
                        <h1 className='text-4xl font-bold'>Free</h1>
                        <p className='text-xl font-bold'>4000 words / Month</p>
                        <p className='text-green-500'>No Credit card required</p>
                    </div>
                </div>
                <h1 className='my-4'><span className='text-3xl text-[#0C579B] font-bold'>$00</span>/Month</h1>
                <p className='text-lg font-bold mb-3'>What's Included</p>
                <div className='flex items-center gap-5 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Trained AI reachouts for <br />recruiters
                    </p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Cold email</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Conversation starter</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Network expansion</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Unlimited projects</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Search Assistant</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-green-600 text-lg' icon={faCheckCircle} />
                    <p>Interview questions</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-gray-400 text-lg' icon={faXmarkCircle} />
                    <p>Metrics Analysis & <br /> recommendations</p>
                </div>
                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-gray-400 text-lg' icon={faXmarkCircle} />
                    <p>Any new features</p>
                </div>

                <div className='flex items-center gap-5 mt-3 font-semibold'>
                    <FontAwesomeIcon className='text-gray-400 text-lg' icon={faXmarkCircle} />
                    <p>Email support</p>
                </div>

                <div className='text-center'>
                    <button className='btn btn-outline rounded-s-full rounded-e-full text-blue-700 w-full px-3 mt-5'>Sign Up for free</button>
                </div>

            </div>
        </>


    );
};

export default PricingCard;