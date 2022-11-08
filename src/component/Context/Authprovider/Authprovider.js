import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [loader, setloader] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentuser => {
            console.log(currentuser);
            setuser(currentuser)
        });
        return () => {
            return unsubcribe()
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;