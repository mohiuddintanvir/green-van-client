import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Images/homeimg/img-2.jpg'

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
    }
    return (
        <div>
            <div className="hero ">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center w-full lg:text-left">
                        <div>
                            <img src={img1} alt="" />
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="Type your password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                        </form>
                        <p className='pb-5 text-center'>New to genious car?Please <Link className='text-blue-600 font-bold' to='/signup'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;