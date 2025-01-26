import React from 'react';
import { hasEveryProp } from './../../node_modules/jsx-ast-utils/src/hasProp';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div className=''>
           <Nav></Nav>
           <div className="max-w-[1600px] mx-auto">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default LayOut;