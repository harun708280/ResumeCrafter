import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '@/components/ui/input'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';

const Skils = ({ next, setNext }) => {
    const [skillsList, setSkillsList] = useState([{
        name: '',
        rating: 0
    }]);

    const AddNewSkills =()=>{
        setSkillsList([...skillsList, {
            name: '',
            rating: 0
        }])
    };
    // const AddNewSkills=()=>{
    //     setSkillsList([...skillsList,{
    //         name:'',
    //     rating:0 
    //     }])
    // }
    const RemoveSkills = () => {
        setSkillsList(skillsList => skillsList.slice(0, -1));
    };

    const handleNameChange = (e, index) => {
        const newSkillsList = [...skillsList];
        newSkillsList[index].name = e.target.value;
        setSkillsList(newSkillsList);
    };

    const handleRatingChange = (newRating, index) => {
        const newSkillsList = [...skillsList];
        newSkillsList[index].rating = newRating;
        setSkillsList(newSkillsList);
    };

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Skills</h2>
                <p>Add Your top professional key skills</p>

                <div>
                    {skillsList.map((item, index) => (
                        <div key={index} className='flex justify-between mb-2 border rounded-lg p-3'>
                            <div>
                                <label className='text-xs'>Name</label>
                                <Input 
                                    className="w-full" 
                                    value={item.name} 
                                    onChange={(e) => handleNameChange(e, index)} 
                                />
                            </div>
                            <Rating 
                                style={{ maxWidth: 120 }} 
                                value={item.rating} 
                                onChange={(newRating) => handleRatingChange(newRating, index)} 
                                fillcolor='gold'
                                
                            />
                        </div>
                    ))}
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <Button variant="outline" onClick={AddNewSkills} className="text-primary">+ Add More Skill</Button>
                        <Button variant="outline" onClick={RemoveSkills} className="text-primary">- Remove</Button>
                    </div>
                    <Button onClick={() => setNext(next + 1)}>Next</Button>
                </div>
            </div>
        </div>
    );
};

export default Skils;
