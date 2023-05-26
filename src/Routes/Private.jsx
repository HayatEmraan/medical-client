import React, { useContext } from 'react';
import { AuthData } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const { user } = useContext(AuthData);
    console.log(user);
    if (!user) {
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default Private;