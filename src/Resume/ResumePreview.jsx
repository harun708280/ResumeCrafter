import React, { useContext } from 'react';
import { useResumeInfoContext } from '../Context/DataContext';
import PersonalData from '../Preview/PersonalData';

const ResumePreview = () => {
    const {resumeInfo,setResumeInfo}=useContext(useResumeInfoContext)
    console.log(resumeInfo);
    
    return (
        <div className={`shadow-lg h-full p-14 border-t-[20px] `}style={{borderTopColor:resumeInfo?.themeColor}}>

            <PersonalData resumeInfo={resumeInfo} ></PersonalData>
            
        </div>
    );
};

export default ResumePreview;