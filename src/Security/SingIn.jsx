import React from 'react';
import { SignIn } from '@clerk/clerk-react'
const SingIn = () => {
    return (
        <div className='flex justify-center items-center my-20'>
            <SignIn/>
        </div>
    );
};

export default SingIn;