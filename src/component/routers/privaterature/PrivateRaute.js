import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const PrivateRaute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);

    // location detect
    const location = useLocation();


    if (loader) {
        return
    }


    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRaute;