import React from 'react';
import Header from '../Libs/Header/Header';
import Footer from '../Libs/Footer/Footer';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div>
            <Header />
            <div className='min-h-screen'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default LayOut;