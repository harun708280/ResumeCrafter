import React from 'react';
import { Button } from '../components/ui/button';

const Exparinace = ({next,setNext}) => {
    return (
        <div>
            ex
            <Button onClick={() => setNext(next + 1)}>Next</Button>
        </div>
    );
};

export default Exparinace;