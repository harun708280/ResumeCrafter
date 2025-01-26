import React from 'react';
import { Button } from '../components/ui/button';

const Nav = () => {
    return (
        <div className=' p-4 shadow-lg'>
            <div className="max-w-[1600px] mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <img src="./logo.svg" alt="" />
                <h1 className='text-xl font-extrabold uppercase text-primary ml-3'>Resume Crafter</h1>

            </div>
            <div className="">

                <Button variant='outline' className='outline-primary text-primary text-lg font-semibold' >Start Now</Button>

            </div>
            </div>
        </div>
    );
};

export default Nav;