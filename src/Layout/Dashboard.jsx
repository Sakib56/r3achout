import React from 'react';
import logo from '../assets/footerLogo.png';
import bookmark from '../assets/dashboardIcons/bookmark.png';
import candidate from '../assets/dashboardIcons/candidate.png';
import dashboard from '../assets/dashboardIcons//dashboard.png';
import Intake from '../assets/dashboardIcons/Intake.png';
import interview from '../assets/dashboardIcons/interview.png';
import jobDescription from '../assets/dashboardIcons/jobDescription.png';
import searchAssistant from '../assets/dashboardIcons/searchAssistant.png';
import img1 from '../assets/dashboardIcons/Group 39556.png'
import img2 from '../assets/dashboardIcons/Group 39557.png'
import img3 from '../assets/dashboardIcons/Group 39558.png'
import img4 from '../assets/dashboardIcons/Group 39559.png'
import img5 from '../assets/dashboardIcons/Group 39560.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee, faDeaf, faDeleteLeft, faEdit, faEye, faTrash, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
const Dashboard = () => {
    return (
        <section className='py-5'>
            {/* navbar section */}
            <nav className="navbar bg-base-100">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* drawer section start */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <div className='bg-[#F4F7FB] p-10'>
                        <div className='grid grid-cols-3 gap-5'>
                            <div>
                                <img src={img1} alt="" />
                            </div>
                            <div>
                                <img src={img2} alt="" />
                            </div>
                            <div>
                                <img src={img3} alt="" />
                            </div>
                            <div>
                                <img src={img4} alt="" />
                            </div>
                            <div>
                                <img src={img5} alt="" />
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className='flex justify-between'>
                                <h1>Recent Project</h1>
                                <p>See all</p>
                            </div>
                            <div className="overflow-x-auto mt-5">
                                <table className="table table-md">
                                    <thead>
                                        <tr>
                                            <th>Job Title</th>
                                            <th>Status</th>
                                            <th>Hiring manager</th>
                                            <th>stage</th>
                                            <th>priory</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Frontend Developer </td>
                                            <td>Open</td>
                                            <td>Jhon Doe</td>
                                            <td>Initial</td>
                                            <td>High</td>
                                            <td className='flex gap-2'><FontAwesomeIcon className='text-green-600 text-lg' icon={faEye} /><FontAwesomeIcon className='text-blue-600 text-lg' icon={faEdit} /><FontAwesomeIcon className='text-red-600 text-lg' icon={faTrash} /></td>
                                        </tr>
                                        <tr>
                                            <td>Frontend Developer </td>
                                            <td>Close</td>
                                            <td>Jhon Doe</td>
                                            <td>Initial</td>
                                            <td>High</td>
                                            <td className='flex gap-2'><FontAwesomeIcon className='text-green-600 text-lg' icon={faEye} /><FontAwesomeIcon className='text-blue-600 text-lg' icon={faEdit} /><FontAwesomeIcon className='text-red-600 text-lg' icon={faTrash} /></td>
                                        </tr>
                                        <tr>
                                            <td>Frontend Developer </td>
                                            <td>Open</td>
                                            <td>Jhon Doe</td>
                                            <td>Intake</td>
                                            <td>low</td>
                                            <td className='flex gap-2'><FontAwesomeIcon className='text-green-600 text-lg' icon={faEye} /><FontAwesomeIcon className='text-blue-600 text-lg' icon={faEdit} /><FontAwesomeIcon className='text-red-600 text-lg' icon={faTrash} /></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-white text-base-content">
                        {/* Sidebar content here */}
                        <li className='md:mt-5'><button className='btn btn-outline rounded-s-full rounded-e-full text-white bg-[#23B574] px-20 py-2 mt-5'>Create new Job + </button></li>
                        <li><div className='flex'><img className='w-8' src={bookmark} alt="" /> <p>My Jobs</p></div></li>
                        <li className='md:mt-5'><div className='flex'><img className='w-8' src={dashboard} alt="" /> <p>Dashboard</p></div></li>
                        <li className='md:mt-5'><div className='flex'><img className='w-8' src={candidate} alt="" /> <p>Candidate R3achout</p></div></li>
                        <li className='md:mt-5'><div className='flex'><img className='w-8' src={searchAssistant} alt="" /> <p>Search Assistant</p></div></li>
                        <li className='md:mt-5'><div className='flex'><img className='w-8' src={interview} alt="" /> <p>Interview</p></div></li>
                        <li className='md:mt-5'><div className='flex'><img className='w-8' src={Intake} alt="" /> <p>Intake</p></div></li>
                        <li className='md:mt-5'><div className='flex'><img className='w-8' src={jobDescription} alt="" /> <p>Job description</p></div></li>
                        <li className='bg-[#0C579B] text-white rounded-xl'>
                            <button className=''>Upgrade</button>
                        </li>
                    </ul>

                </div>
            </div>
        </section>

    );
};

export default Dashboard;