import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
const Education = ({next,setNext}) => {
    const [educationalList,setEducationalList]=useState([
        {
          universityName:'',
          degree:'',
          major:'',
          startDate:'',
          endDate:'',
          description:''
        }
      ])

      const AddNewEducation=()=>{
        setEducationalList([...educationalList,
          {
            universityName:'',
            degree:'',
            major:'',
            startDate:'',
            endDate:'',
            description:''
          }
        ])
      }
      const RemoveEducation=()=>{
        setEducationalList(educationalList=>educationalList.slice(0,-1))
    
      }
    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Education</h2>
    <p>Add Your educational details</p>

    <div>
      {educationalList.map((item,index)=>(
        <div>
          <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
            <div className='col-span-2'>
              <label>University Name</label>
              <Input name="universityName" 
             
              />
            </div>
            <div>
              <label>Degree</label>
              <Input name="degree" 
               />
            </div>
            <div>
              <label>Major</label>
              <Input name="major" 
               />
            </div>
            <div>
              <label>Start Date</label>
              <Input type="date" name="startDate" 
               />
            </div>
            <div>
              <label>End Date</label>
              <Input type="date" name="endDate" 
               />
            </div>
            <div className='col-span-2'>
              <label>Description</label>
              <Textarea name="description" 
               />
            </div>

          </div>
       
        </div>
      ))}
    </div>
    <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button variant="outline" onClick={AddNewEducation} className="text-primary"> + Add More Education</Button>
            <Button variant="outline" onClick={RemoveEducation} className="text-primary"> - Remove</Button>

            </div>
            <Button onClick={() => setNext(next + 1)}>Next</Button>
        </div>
    </div>
             
        </div>
    );
};

export default Education;