import React from 'react';
import { Button } from '../components/ui/button';

const Skils = ({next,setNext}) => {
    return (
        <div>
           <Button onClick={() => setNext(next + 1)}>Next</Button>
        </div>
    );
};

export default Skils;