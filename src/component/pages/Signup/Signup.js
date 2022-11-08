import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from '../../Context/Authprovider/Authprovider';



const Signup = () => {

    // navigate 
    const navigate = useNavigate()



    const { createUser, providerLogIn } = useContext(AuthContext)

    const handlesignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        const check = { name, photourl, email, password }
        console.log(check)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/login')
            
                form.reset()
            })
            .catch(err => console.error(err))
    }

    // google provider make
    const googleProvider = new GoogleAuthProvider()



    // Handle Gogle Signup
    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(err => console.error(err))
    }



    return (
        <div className="hero ">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center w-3/4 lg:text-left">
                    <div>
                        <img src="" alt="" />
                    </div>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                    <form onSubmit={handlesignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder=" Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photourl' placeholder="Enter your PhotoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="type your password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="signup" />

                        </div>
                    </form>
                    <p className='pb-5 text-center'>Already have an account?Please <Link className='text-blue-600 font-bold' to='/login'>Log In</Link></p>
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-square btn-outline rounded-full">
                            <AiFillGoogleCircle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
