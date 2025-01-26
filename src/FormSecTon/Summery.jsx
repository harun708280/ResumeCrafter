import React from 'react';
import { Button } from '../components/ui/button';

const Summery = ({next,setNext}) => {
    return (
        <div>
            summery <Button onClick={() => setNext(next + 1)}>Next</Button>
        </div>
    );
};

export default Summery;