import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/footerLogo.png';
import google from '../../assets/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <div className='bg-[#F4F7FB] py-10 px-5 md:py-20 md:px-10'>
            <div className='border rounded-xl shadow-lg bg-white w-full md:w-3/4 p-5 md:p-10 max-w-2xl mx-auto'>
                <div className='w-fit mx-auto'>
                    <img className='w-full' src={logo} alt="" />
                </div>
                <h1 className='text-3xl mt-2 font-bold text-center'>Login</h1>
                <p className='text-center mt-3'>Login to your account with your credentials</p>
                <div className='px-8 cursor-pointer mt-5'>
                    <button className='flex items-center justify-center gap-4 btn btn-outline rounded-s-full rounded-e-full  w-full hover:bg-primary hover:border-0'><img className='w-12 h-12 p-2' src={google} alt="" />Login With Google </button>
                </div>
                <div className='divider mt-10'>or sign in with Email</div>

                <form className='md:p-5'>
                    <div className='form-control'>
                        <label>
                            <p className='text-lg font-semibold mb-1 mt-3'>Email Address <span className='text-red-600'>*</span></p>
                        </label>
                        <input className="input input-bordered rounded-s-full rounded-e-full w-full" type="email" placeholder='mail@example.com' name="email" />

                    </div>
                    <div className='form-control relative'>
                        <label>
                            <p className='text-lg font-semibold mb-1 mt-3'>Password <span className='text-red-600'>*</span></p>
                        </label>
                        <input className="input rounded-s-full rounded-e-full input-bordered w-full" type="" placeholder='Enter your password' name="password" />
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex md:gap-3 items-center'>
                            <FontAwesomeIcon className='text-green-600 md:text-lg' icon={faCheckCircle} />
                            <p>Remember me</p>
                        </div>
                        <div className='text-blue-400'>Forget Password? </div>
                    </div>
                    <input type="submit" className='w-full bg-[#23B574] rounded-lg mt-5 py-2 text-xl text-white rounded-s-full rounded-e-full font-bold cursor-pointer' value="Login" />
                    <h1 className='text-center text-md mt-5'>Not register ? <Link to='/resister'><span className='link text-blue-500'>create an account</span></Link></h1>
                </form>

            </div>
        </div>
    );
};

export default Login;