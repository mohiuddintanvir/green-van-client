import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import Usetitle from '../../../hocks/Usetitle';

const Signup = () => {
    Usetitle('Signup')

    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://green-ven-server-4mnt-f4ubmytay.vercel.app/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log("User saved:", data);
            navigate('/login')
        })
        .catch(err => console.error(err));
    }

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User created:", user);
                saveUser(name, email);
                form.reset();
            })
            .catch(err => console.error("Error creating user:", err));
    }
    // jwt token

    // const getUserToken = (email) => {
    //     fetch(`https://green-ven-server-4mnt-ceaph3r15.vercel.app/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.AccessToken) {
    //             localStorage.setItem('accessToken', data.AccessToken);
    //            ;
    //         }
    //     })
    //     .catch(err => console.error(err));
    // }

    const googleProvider = new GoogleAuthProvider();

    return (
        <div className="hero mt-20 mb-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <div>
                        <img src="https://cdn.trendhunterstatic.com/phpthumbnails/283/283832/283832_1_800.jpeg" alt="" />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
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
                            <input type="password" name='password' placeholder="Type your password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Signup" />
                        </div>
                    </form>
                    <p className='pb-5 text-center'>Already have an account? Please <Link className='text-blue-600 font-bold' to='/login'>Log In</Link></p>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
