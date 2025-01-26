import React from 'react';
import { Button } from '../components/ui/button';

import { Input } from "@/components/ui/input"

const PersonalDetails = ({next,setNext}) => {
    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Personal Detail</h2>
            <p>Get Started with the basic information</p>
           

            <form >
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input name="firstName"  required   />
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input name="lastName" 
                     />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input name="jobTitle" required 
                     />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input name="address" required 
                     />
                </div>
                <div>
                    <label className='text-sm'>Phone</label>
                    <Input name="phone" required 
                     />
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input name="email" required 
                      />
                </div>
            </div>
            <div className='mt-3 flex justify-end'>
                <Button type="submit"></Button>
              
                   
            </div>
        </form>

            <Button onClick={() => setNext(next + 1)}>Next</Button>
        </div>
    );
};

export default PersonalDetails;