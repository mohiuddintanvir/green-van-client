import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../../../Images/homeimg/img-2.jpg'
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import Usetitle from '../../../hocks/Usetitle';


const Login = () => {

    Usetitle('LogIn')



    // navigate call

    const navigate = useNavigate();


    // error set
    const [error, seterror] = useState('')

    // locations
    const location = useLocation()


    // get location:
    const from = location.state?.form?.pathname || '/'

    // signIn section
    const { signin, providerLogIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user); 
                 navigate(from, { replace: true },'/');
                form.reset();
                seterror('');
              
            })
            .catch(err => {

                console.error(err)
                seterror(err.massage);
            })
    }
    // signIn section end 

    // google provider make
    const googleProvider = new GoogleAuthProvider()

    // google handle
    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(err => console.error(err))
    }





    return (
        <div>
            <div className="hero  mt-20 mb-20">
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
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                            <p>{error}</p>
                        </form>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning ml-24 mb-2 ">
                                <AiFillGoogleCircle /> Login with Google
                            </button>
                        </div>
                        <p className='pb-5 text-center'>New to Green-van?Please <Link className='text-blue-600 font-bold' to='/signup'>Sign up</Link></p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;