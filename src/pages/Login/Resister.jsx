import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import google from '../../assets/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Resister = () => {
    const { user, createUser, updateUserProfile, logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleResister = event => {
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value;
        const name = firstName + lastName


        if (password != confirmPassword) {
            Swal.fire({
                title: 'password and confirm password not match!',
                text: '',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
            return;
        }
        console.log(firstName, lastName, email, password, confirmPassword,name)
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(loggedUser, name)
                    .then(() => { })
                    .catch(error => console.log(error))
            
                navigate('/', { replace: true })
                Swal.fire({
                    title: 'Successfully Account Created',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                
            })
            .catch(error => {
                console.log(error.message)
            })

    }


    return (
        <section className='grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-[#0C579B] lg:p-20 hidden lg:block'>
                <img className='' src={logo} alt="" />
                <div className='mt-36'>
                    <h1 className='text-5xl text-white font-semibold'>Start you Journey
                        <br />   With US</h1>
                    <p className='mt-10 w-96 text-[#D8E1E8]'>r3achout.ai is an AI-powered web app SAAS that revolutionizes email crafting for recruiters, offering a comprehensive feature set to elevate recruitment processes and stand out from the competition.</p>
                </div>
            </div>
            <div>
                <div className='py-10 px-5 md:py-20 md:px-10'>
                    <div className='border rounded-xl shadow-lg bg-white w-full md:w-3/4 p-5 md:p-10 max-w-2xl mx-auto'>
                        <h1 className='text-3xl mt-2 font-bold text-center'>Register to R3achout.ai</h1>
                        <p className='text-center mt-3'>Create your account. It’s free, no credit card required and only takes a few minutes.</p>
                        <div className='divider mt-10'>or sign in with Email</div>

                        <form onSubmit={handleResister} className='md:p-5'>
                            <div className='form-control grid grid-cols-2 gap-8'>
                                <div> <label>
                                    <p className='text-lg font-semibold mb-1 mt-3'>First Name <span className='text-red-600'>*</span></p>
                                </label>
                                    <input className="input input-bordered rounded-s-full rounded-e-full w-full" type="text" placeholder='jhon' name="firstName" />
                                </div>
                                <div> <label>
                                    <p className='text-lg font-semibold mb-1 mt-3'>Last Name <span className='text-red-600'>*</span></p>
                                </label>
                                    <input className="input input-bordered rounded-s-full rounded-e-full w-full" type="text" placeholder='doe' name="lastName" />
                                </div>

                            </div>
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
                                <input className="input rounded-s-full rounded-e-full input-bordered w-full" type="" placeholder='******' name="password" />
                            </div>
                            <div className='form-control relative'>
                                <label>
                                    <p className='text-lg font-semibold mb-1 mt-3'>Confirm Password <span className='text-red-600'>*</span></p>
                                </label>
                                <input className="input rounded-s-full rounded-e-full input-bordered w-full" type="" placeholder='*******' name="confirmPassword" />
                            </div>
                            <div className='flex mt-2 gap-5 items-center'>
                                <FontAwesomeIcon className='text-green-600 md:text-lg' icon={faCheckCircle} />
                                <p>I accepts <span className='text-blue-500'>Terms of use</span>&<span className='text-blue-500'>privacy policy</span></p>
                            </div>
                            <input type="submit" className='w-full bg-[#23B574] rounded-lg mt-5 py-2 text-xl text-white rounded-s-full rounded-e-full font-bold cursor-pointer' value="Resister Now" />
                            <h1 className='text-center text-md mt-5'>Already have an account? Please<Link to='/login'><span className='link text-blue-500'> Login</span></Link></h1>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resister;