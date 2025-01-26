import React, { useState } from 'react';
import { useResumeInfoContext } from '@/context/DataContext';
import FromSection from './FromSection';
import ResumePreview from './ResumePreview';
const Resume = () => {
    const [resumeInfo,setResumeInfo]=useState();
    
    return (
        
        <div>
            <useResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
                <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
                    <FromSection  ></FromSection>
                    <ResumePreview></ResumePreview>

                </div>
            </useResumeInfoContext.Provider>
            
        </div>
    );
};

export default Resume;