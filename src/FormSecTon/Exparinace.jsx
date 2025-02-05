import React, { useState } from 'react';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import RichTextEditor from './RichTextEditor';
import { ArrowLeftToLine, ArrowRight } from 'lucide-react';

const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummery:'',

}
const Exparinace = ({next,setNext}) => {
    const [experienceList,setExperianceList]=useState([{
        title:'',
        companyName:'',
        city:'',
        state:'',
        startDate:'',
        endDate:'',
        workSummery:'',
    }])

    const addNewExperiance=()=>{
        setExperianceList([
            ...experienceList,{
                title:'',
                companyName:'',
                city:'',
                state:'',
                startDate:'',
                endDate:'',
                workSummery:'',
            }
        ])
    }

    const RemoveExperiance=()=>{
        
        setExperianceList(experienceList=>experienceList.slice(0,-1))
    }


    return (
        <div>
            <div>
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
            {/* {experinceList.map((item,index)=>( */}
                {
                    experienceList.map((item,index)=>
                        <div >
                    <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                        <div>
                            <label className='text-xs'>Position Title</label>
                            <Input name="title" 
                            
                            />
                        </div>
                        <div>
                            <label className='text-xs'>Company Name</label>
                            <Input name="companyName" 
                             />
                        </div>
                        <div>
                            <label className='text-xs'>City</label>
                            <Input name="city" 
                            />
                        </div>
                        <div>
                            <label className='text-xs'>State</label>
                            <Input name="state" 
                            
                             />
                        </div>
                        <div>
                            <label className='text-xs'>Start Date</label>
                            <Input type="date"  
                            name="startDate" 
                            />
                        </div>
                        <div>
                            <label className='text-xs'>End Date</label>
                            <Input type="date" name="endDate" 
                            
                            />
                        </div>
                        <div className='col-span-2'>
                           {/* Work Summery  */}
                           {/* <RichTextEditor
                           index={index}
                           defaultValue={item?.workSummery}
                           onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}  /> */}
                           <RichTextEditor></RichTextEditor>
                        </div>
                    </div>
                </div>)
                }
            {/* ))} */}
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button variant="outline" onClick={addNewExperiance}  className="text-primary"> + Add More Experience</Button>
            <Button disabled={experienceList.length===1} onClick={RemoveExperiance} variant="outline"  className="text-primary"> - Remove</Button>

            </div>
            <div className="mt-2 flex justify-end space-x-2">
        <Button onClick={() => setNext(next - 1)}> <ArrowLeftToLine></ArrowLeftToLine> Previous  </Button>
        <Button onClick={() => setNext(next + 1)}>Next <ArrowRight/> </Button>
        </div>
        </div>
        </div>
    </div>
           
        </div>
    );
};

export default Exparinace;