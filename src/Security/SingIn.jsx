import React from 'react';
import { SignIn } from '@clerk/clerk-react'
const SingIn = () => {
    return (
        <div className='flex justify-center items-center my-20'>
             <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 'bg-emerald-500 hover:bg-emerald-600 border-none text-sm',
              },
            }}
          />
        </div>
    );
};

export default SingIn;