import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {


    // user state make 
    const [user, setuser] = useState(null);

    // loader
    const [loader, setloader] = useState(true)




    // loader iteams

    const createUser = (email, password) => {
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login section
   
    const signin = (email, password) => {
         setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    // useeffect sector: 

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentuser => {
            console.log(currentuser);
            setuser(currentuser)
            setloader(false)
        });
        return () => {
            return unsubcribe()
        }
    }, []);



    // sinin provider area :

    const providerLogIn = (Provider) => {
        setloader(true)
        return signInWithPopup(auth, Provider);
    }


    // log out
    const logOut = () => {
      setloader(true)
        return signOut(auth);
    }


    // info transfer area 

    const authInfo = {
        user,
        loader,
        createUser,
        providerLogIn,
        logOut,
        signin,
        
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        
    );
};

export default Authprovider;