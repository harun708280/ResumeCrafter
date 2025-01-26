import React from 'react';
import { Button } from '../components/ui/button';

const Education = ({next,setNext}) => {
    return (
        <div>
            edu <Button onClick={() => setNext(next + 1)}>Next</Button>
        </div>
    );
};

export default Education;